import { FC } from "react";

import { PriceProps } from "./types";
import css from "./Price.module.css";

const Price: FC<PriceProps> = ({ oldPrice, price, text }) => (
  <div className={css.wrap}>
    <div className={css.oldPrice}>{oldPrice}</div>
    <div className={css.price}>{price}</div>
    {text}
  </div>
);

export default Price;
