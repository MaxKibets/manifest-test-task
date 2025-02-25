import { FC } from "react";

import { WithChildren } from "@/types";

import css from "./Heading.module.css";

const Heading: FC<WithChildren> = ({ children }) => (
  <h2 className={css.heading}>{children}</h2>
);

export default Heading;
