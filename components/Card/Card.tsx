import { FC } from "react";
import clsx from "clsx";

import css from "./Card.module.css";
import { CardProps } from "./types";

const Card: FC<CardProps> = ({ children, active }) => (
  <div
    className={clsx(css.card, {
      [css.active]: active,
    })}
  >
    {children}
  </div>
);

export default Card;
