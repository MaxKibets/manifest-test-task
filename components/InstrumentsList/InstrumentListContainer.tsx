"use client";

import { FC } from "react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";

import { WithChildren } from "@/types";

const InstrumentListContainer: FC<WithChildren> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

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
