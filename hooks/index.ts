import { TimerContext } from "@/components/TimerContext/TimerContext";

import { use, useEffect, useState } from "react";

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
