import { FC } from "react";
import clsx from "clsx";

import css from "./Card.module.css";
import { CardProps } from "./types";

const Card: FC<CardProps> = ({ children, active, tags }) => (
  <div
    className={clsx(css.card, {
      [css.active]: active,
      [css.topIndent]: tags && tags.length > 1,
    })}
  >
    <div className={css.tags}>{tags}</div>
    {children}
  </div>
);

export default Card;
