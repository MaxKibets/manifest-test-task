import { ReactNode } from "react";

import { WithChildren } from "@/types";

export type CardProps = WithChildren<{
  active?: boolean;
  tags?: ReactNode[];
}>;
