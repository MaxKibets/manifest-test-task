"use client";

import { FC } from "react";

import { useTimer } from "@/hooks";
import { formatTime } from "@/utils";

import TimerLayout from "./TimerLayout";

const Timer: FC = () => {
  const time = useTimer();

  if (time === null) return null;

  return <TimerLayout>{formatTime(time)}</TimerLayout>;
};

export default Timer;
