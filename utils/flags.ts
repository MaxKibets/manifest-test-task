import {
  Attributes,
  GrowthBook,
  GrowthBookPayload,
  WidenPrimitives,
} from "@growthbook/growthbook";
import { cookies } from "next/headers";
import { cache } from "react";
import { get } from "@vercel/edge-config";
import { flag } from "@vercel/flags/next";
import { ApiData, JsonValue } from "@vercel/flags";

const GROWTHBOOK_DOMAIN = "https://app.growthbook.io";
const EDGE_CONFIG_KEY = "gb_payload";

// Get targeting attributes from cookies/headers
async function getAttributes(): Promise<Attributes> {
  const cookieStore = await cookies();
  return {
    id: cookieStore.get("gbuuid")?.value,
  };
}

/* **** Do not edit below this line **** */

// Get feature definitions from Edge Config
async function getPayload(): Promise<GrowthBookPayload> {
  try {
    const payload: GrowthBookPayload | undefined = await get(EDGE_CONFIG_KEY);
    if (typeof payload !== "string") {
      console.log("Invalid GrowthBook payload", payload);
      return {};
    }
    return JSON.parse(payload);
  } catch (e) {
    console.log("Error parsing GrowthBook payload", e);
  }

  return {}; // Return empty payload as a fallback
}

// Return a memoized GrowthBook instance for a request
const getGrowthBookInstance = cache(async () => {
  return new GrowthBook({ attributes: getAttributes() }).initSync({
    payload: await getPayload(),
  });
});

// Generate feature flag definitions for the Vercel Toolbar
export async function getFlagApiData(): Promise<ApiData> {
  const payload = await getPayload();
  const data: ApiData = {};
  Object.entries(payload.features || {}).forEach(([key, value]) => {
    const options = new Set<JsonValue>([value.defaultValue]);

    // For boolean flags, make sure true/false are always added as options
    if (value.defaultValue === false) options.add(true);
    if (value.defaultValue === true) options.add(false);

    // Loop through rules and add all the possible values
    (value.rules || []).forEach((rule) => {
      // Force and rollout rules
      if (rule.force) {
        options.add(rule.force);
      }
      // Experiment rules
      if (rule.variations) {
        rule.variations.forEach((variation) => options.add(variation));
      }
    });

    data.definitions = data.definitions || {};
    data.definitions[key] = {
      origin: `${GROWTHBOOK_DOMAIN}/features/${key}`,
      options: Array.from(options).map((value) => ({ value })),
    };
  });

  return data;
}

// Helper function to get tracking data for experiments
export interface FlagTrackData {
  feature: string;
  experimentId: string;
  variationId: string;
  hashAttribute: string;
  hashValue: string;
}

export async function getTrackData(): Promise<FlagTrackData[]> {
  const gb = await getGrowthBookInstance();
  const calls = gb.getDeferredTrackingCalls();

  return calls.map((call) => ({
    feature: call.result.featureId ?? "",
    experimentId: call.experiment.key,
    variationId: call.result.key,
    hashAttribute: call.result.hashAttribute,
    hashValue: call.result.hashValue,
  }));
}

// Helper function to evaluate a feature flag
export function getFlagValue<T extends JsonValue>(key: string, defaultValue: T) {
  return flag<T | WidenPrimitives<T>>({
    key,
    defaultValue,
    options: [],
    decide: async () => {
      const gb = await getGrowthBookInstance();
      return gb.getFeatureValue(key, defaultValue);
    },
  })();
}
