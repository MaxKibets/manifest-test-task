import { FC } from "react";
import clsx from "clsx";

import { PackageSelectorProps } from "./types";
import css from "./PackageSelector.module.css";

const PackageSelector: FC<PackageSelectorProps> = ({ children, active }) => (
  <div className={clsx(css.selector, { [css.active]: active })}>{children}</div>
);

export default PackageSelector;
