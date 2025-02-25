"use client";

import { useEffect } from "react";
import { FlagTrackData } from "./flags";

// Only fire tracking calls once per page load
const trackedExperiments = new Set<string>();

export function TrackFlags({ data }: { data: FlagTrackData[] }) {
  useEffect(() => {
    data.forEach((info) => {
      const props = {
        experimentId: info.experimentId,
        variationId: info.variationId,
        [info.hashAttribute]: info.hashValue,
      };

      const key = JSON.stringify(props);
      if (trackedExperiments.has(key)) return;
      trackedExperiments.add(key);

      // TODO: Send tracking call to analytics (GA4, Segment, etc.)
      console.log(`Experiment Viewed`, props);
    });
  });

  return null;
}
