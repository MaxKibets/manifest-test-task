import { FC } from "react";

import { WithChildren } from "@/types";

import css from "./PackagesLayout.module.css";

const PackagesLayout: FC<WithChildren> = ({ children }) => (
  <div className={css.layout}>{children}</div>
);

export default PackagesLayout;
