"use client";

import { FC } from "react";

import { usePackage } from "@/hooks";
import { getFormattedPrice } from "@/utils";

import css from "./Terms.module.css";

const Terms: FC = () => {
  const { selectedPackage } = usePackage();
  const price = getFormattedPrice(selectedPackage.price, selectedPackage.currency);

  return (
    <div className={css.terms}>
      <p>Automatic renewal of {price} per month.</p>
      <p>
        You may cancel by <a href="#">support@justdone.ai</a>. Our goal is customer
        satisfaction
      </p>
    </div>
  );
};

export default Terms;
