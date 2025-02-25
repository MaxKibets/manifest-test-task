"use client";

import { FC } from "react";

import { usePackage } from "@/hooks";
import { getFormattedPrice } from "@/utils";

import TermsLayout from "./TermsLayout";

const Terms: FC = () => {
  const { selectedPackage } = usePackage();
  const price = getFormattedPrice(selectedPackage.price, selectedPackage.currency);

  return <TermsLayout price={price} />;
};

export default Terms;
