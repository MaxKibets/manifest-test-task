import { TIMER_DURATION, TIMER_STORAGE_KEY } from "@/constants";
import { Package } from "@/types";

export const formatTime = (ms: number) => {
  const totalSeconds = Math.max(Math.floor(ms / 1000), 0);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const getRemaining = (startTime: number) =>
  Math.ceil(Math.max(TIMER_DURATION - (Date.now() - startTime), 0) / 1000) * 1000;

export const getStartTimeFromStorage = () => {
  const storedTimestamp = localStorage.getItem(TIMER_STORAGE_KEY);
  return storedTimestamp ? Number(storedTimestamp) : null;
};

const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "USD":
      return "$";
    default:
      return currency;
  }
};

export const getFormattedPrice = (price: number, currency: string) => {
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${price / 100}`;
};

export const getPackagePricing = ({
  trial_amount,
  trial_amount_full,
  price,
  price_full,
  regularity,
  currency,
}: Omit<Package, "id" | "name" | "tags">) => {
  return {
    price: getFormattedPrice(trial_amount || price, currency),
    oldPrice: getFormattedPrice(trial_amount_full || price_full, currency),
    text: trial_amount
      ? `Then ${getFormattedPrice(price, currency)} per month`
      : `per ${regularity}`,
  };
};

export const getPackages = () => {
  return [
    {
      id: "some-id-3",
      name: "Unlimited Annual Plan",
      regularity: "month",
      price: 2499,
      currency: "USD",
      // no in task description but I assume it should be there
      price_full: 4999,
      tags: ["save 50%", "🚀 best value"],
    },
    {
      id: "some-id-1",
      // "Justdone_plan_39.99_usd_30days_1_trial" should be translated into readeble format from in some way...
      name: "7-day Access",
      regularity: "month",
      price: 2999,
      currency: "USD",
      trial_period: 7,
      trial_amount: 99,
      // no in task description but I assume it should be there
      trial_amount_full: 999,
      tags: ["save 50%"],
    },
    {
      id: "some-id-2",
      name: "Unlimited 1-month Plan",
      regularity: "month",
      price: 3999,
      currency: "USD",
      // no in task description but I assume it should be there
      price_full: 6999,
      tags: ["most popular"],
    },
  ] as Package[];
};
