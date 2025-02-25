import { TIMER_DURATION, TIMER_STORAGE_KEY } from "@/constants";

export const formatTime = (ms: number) => {
  const totalSeconds = Math.max(Math.floor(ms / 1000), 0);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const getRemaining = (startTime: number) =>
  Math.ceil(Math.max(TIMER_DURATION - (Date.now() - startTime), 0) / 1000) * 1000;

export const getStartTimeFromStorage = () => {
  const storedTimestamp = localStorage.getItem(TIMER_STORAGE_KEY);
  return storedTimestamp ? Number(storedTimestamp) : null;
};
