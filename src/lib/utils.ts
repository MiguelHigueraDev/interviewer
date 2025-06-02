import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Duration, InterviewDifficulty } from "./types";

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
