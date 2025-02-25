import { ReactNode } from "react";

import { SIZE, TYPE } from "@/constants";

export type WithChildren<T = object> = T & {
  children: ReactNode;
};

export type Size = (typeof SIZE)[keyof typeof SIZE];
export type Type = (typeof TYPE)[keyof typeof TYPE];
