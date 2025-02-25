"use client";

import { FC } from "react";

import useMediaQuery, { useTimer } from "@/hooks";
import { formatTime } from "@/utils";

import TimerLayout from "./TimerLayout";

const Timer: FC<{ mediaQuery: string }> = ({ mediaQuery }) => {
  const time = useTimer();
  const isVisible = useMediaQuery(mediaQuery);

  if (time === null || !isVisible) return null;

  return <TimerLayout>{formatTime(time)}</TimerLayout>;
};

export default Timer;
