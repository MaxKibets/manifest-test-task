import { ReactNode } from "react";

import { SIZE, TYPE } from "@/constants";

export type WithChildren<T = object> = T & {
  children: ReactNode;
};

export type Size = (typeof SIZE)[keyof typeof SIZE];
export type Type = (typeof TYPE)[keyof typeof TYPE];

export type ITag = string;

export interface Package {
  id: string;
  name: string;
  regularity: "month" | "year";
  price: number;
  price_full: number;
  currency: "USD";
  trial_period?: number;
  trial_amount?: number;
  trial_amount_full?: number;
  tags: ITag[];
}
