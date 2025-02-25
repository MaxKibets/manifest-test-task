export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const TYPE = {
  DEFAULT: "default",
  WARNING: "warning",
} as const;

export const TIMER_STORAGE_KEY = "t_timestamp" as const;

export const TIMER_DURATION = 30 * 60 * 1000;
