import { FC } from "react";
import clsx from "clsx";

import { TYPE, SIZE } from "@/constants";

import { TagProps } from "./types";
import css from "./Tag.module.css";

const Tag: FC<TagProps> = ({ children, type = TYPE.DEFAULT, size = SIZE.SMALL }) => (
  <div className={clsx(css.tag, css[type], css[size])}>{children}</div>
);

export default Tag;
