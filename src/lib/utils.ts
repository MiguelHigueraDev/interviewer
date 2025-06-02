import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Duration, InterviewDifficulty } from "./types";
import { transform } from "sucrase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDifficultyLabel = (value: InterviewDifficulty) => {
  switch (value) {
    case InterviewDifficulty.EASY:
      return "Easy";
    case InterviewDifficulty.MEDIUM:
      return "Medium";
    case InterviewDifficulty.HARD:
      return "Hard";
    default:
      return "Medium";
  }
};

export const getDurationLabel = (value: Duration) => {
  switch (value) {
    case Duration.MINUTES_10:
      return "10 minutes";
    case Duration.MINUTES_20:
      return "20 minutes";
    case Duration.MINUTES_30:
      return "30 minutes";
    default:
      return "20 minutes";
  }
};

export const isApiKeyValid = (apiKey: string) => {
  return apiKey.startsWith("AIza");
};

export const transpileTs = (tsCode: string) => {
  return transform(tsCode, { transforms: ["typescript"] }).code;
};

export const getDurationInMs = (value: Duration) => {
  switch (value) {
    case Duration.MINUTES_10:
      return 10 * 60 * 1000;
    case Duration.MINUTES_20:
      return 20 * 60 * 1000;
    case Duration.MINUTES_30:
      return 30 * 60 * 1000;
  }
};

export const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};
