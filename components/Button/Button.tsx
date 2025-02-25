"use client";

import { FC } from "react";

import { WithChildren } from "@/types";
import { usePackage } from "@/hooks";

import css from "./Button.module.css";

const Button: FC<WithChildren> = ({ children }) => {
  const { selectedPackage } = usePackage();

  return (
    <button
      type="button"
      className={css.button}
      onClick={() => {
        const styles = "color: green; font-weight: bold;";
        console.log(`%c package ID: ${selectedPackage?.id}`, styles);
        console.log(`%c package NAME: ${selectedPackage?.name}`, styles);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
