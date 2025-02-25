import { use, useEffect, useState } from "react";

import { PackageContext } from "@/components/PackageContext/PackageContext";
import { TimerContext } from "@/components/TimerContext/TimerContext";
import { GrowthBook } from "@growthbook/growthbook";

export const useTimerSplit = () => {
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);

  useEffect(() => {
    const gb = new GrowthBook({
      apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
      clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
    });

    gb.init().then((data) => {
      const isOn = gb.isOn("banner_with_timer");
      console.log(isOn, data);
      setIsTimerOn(isOn);
    });
  }, []);

  return isTimerOn;
};

export default function useMediaQuery(mediaQuery: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setMatches(event.matches);
    };

    handleChange(mediaQueryList);

    mediaQueryList.addEventListener("change", handleChange, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [mediaQuery]);

  return matches;
}

export const useTimer = () => use(TimerContext);

export const usePackage = () => use(PackageContext);
