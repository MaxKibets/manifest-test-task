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

// move to API?
export const TIMER_DURATION = 2 * 60 * 1000;

export const TEXT = {
  HEADING: "Choose Your Plan:",
  BUTTON: "Get Started",
  INSTRUMENT: {
    PARAPHRASER: "Paraphraser",
    GRAMMAR_CHECK: "Grammar Check",
    PLAGIARISM_CHECK: "Plagiarism Check",
    AI_HUMANIZER: "AI Humanizer",
    AI_DETECTOR: "AI Detector",
    SUMMARIZER: "Summarizer",
    CHROME_EXTENSION: "Chrome Extension",
  },
  SALE_ENDS: "SALE ENDS IN",
  TERMS: {
    AUTO_RENEW: "Automatic renewal of",
    PER_MONTH: "per month.",
    MAY_CANCEL: "You may cancel by",
    EMAIL: "support@justdone.ai",
    OUR_GOAL: "Our goal is customer satisfaction",
  },
};
