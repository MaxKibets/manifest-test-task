"use client";

import { FC } from "react";
import Marquee from "react-fast-marquee";

import { WithChildren } from "@/types";
import useMediaQuery from "@/utils";

const InstrumentListContainer: FC<WithChildren> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery("(max-width: 1024px)");

  if (isTabletOrMobile) {
    return (
      <Marquee pauseOnClick loop={0}>
        {children}
      </Marquee>
    );
  }

  return children;
};

export default InstrumentListContainer;
