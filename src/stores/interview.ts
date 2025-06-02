import { Duration, InterviewDifficulty } from "@/lib/types";
import { create } from "zustand";

export type InterviewStore = {
  difficulty: InterviewDifficulty;
  duration: Duration;
  question: string;
  currentCode: string;
  testResults: { passed: boolean; output: string }[];

  setDifficulty: (difficulty: InterviewDifficulty) => void;
  setDuration: (duration: Duration) => void;
  setQuestion: (question: string) => void;
  resetInterview: () => void;
  submitLiveCodingAnswer: () => void;
};

export const useInterviewStore = create<InterviewStore>((set) => ({
  difficulty: InterviewDifficulty.EASY,
  duration: Duration.MINUTES_10,
  question: "",
  currentCode: "",
  testResults: [],

  setDifficulty: (difficulty) => set({ difficulty }),
  setDuration: (duration) => set({ duration }),
  setQuestion: (question) => set({ question }),
  resetInterview: () =>
    set({
      question: "",
      currentCode: "",
      testResults: [],
    }),
  submitLiveCodingAnswer: () => {
    set({
      testResults: [],
    });
  },
}));
