import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { InterviewDifficulty } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDifficultyName = (difficulty: InterviewDifficulty): string => {
  switch (difficulty) {
    case InterviewDifficulty.EASY:
      return "Easy";
    case InterviewDifficulty.MEDIUM:
      return "Medium";
    case InterviewDifficulty.HARD:
      return "Hard";
    default:
      return "";
  }
};
