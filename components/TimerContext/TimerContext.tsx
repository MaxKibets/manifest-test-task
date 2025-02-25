"use client";

import { createContext, FC, useEffect, useState } from "react";

import { getRemaining, getStartTimeFromStorage } from "@/utils";
import { TIMER_DURATION, TIMER_STORAGE_KEY } from "@/constants";
import { WithChildren } from "@/types";
import gb from "@/services/growthbook";

export const TimerContext = createContext<number | null>(null);

const TimerProvider: FC<WithChildren> = ({ children }) => {
  const [time, setTime] = useState<number | null>(null);
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);

  useEffect(() => {
    gb.init().then((data) => {
      console.log("GrowthBook initialized");
      const isOn = gb.isOn("banner_with_timer");
      console.log(isOn, data);
      setIsTimerOn(isOn);
    });
  }, []);

  useEffect(() => {
    if (!isTimerOn) {
      localStorage.removeItem(TIMER_STORAGE_KEY);

      return;
    }

    const storedTimestamp = getStartTimeFromStorage();
    const startTime = storedTimestamp || Date.now();

    if (!storedTimestamp) {
      localStorage.setItem(TIMER_STORAGE_KEY, startTime.toString());
      setTime(TIMER_DURATION);

      return;
    }

    const remaining = getRemaining(startTime);

    if (remaining === 0) return;

    const timeout = setTimeout(() => {
      setTime(remaining - 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time, isTimerOn]);

  return <TimerContext.Provider value={time}>{children}</TimerContext.Provider>;
};

export default TimerProvider;
