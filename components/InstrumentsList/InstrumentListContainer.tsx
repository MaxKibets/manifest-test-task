"use client";

import { FC } from "react";
import Marquee from "react-fast-marquee";

import { WithChildren } from "@/types";
import useMediaQuery from "@/hooks";

const InstrumentListContainer: FC<WithChildren> = ({ children }) => {
  const isWeb = useMediaQuery("(min-width: 1025px)");

  if (!isWeb) {
    return (
      <Marquee pauseOnClick loop={0}>
        {children}
      </Marquee>
    );
  }

  return children;
};

export default InstrumentListContainer;
