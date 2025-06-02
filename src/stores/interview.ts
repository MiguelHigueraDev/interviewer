import { Duration, InterviewDifficulty, TestCase } from "@/lib/types";
import { create } from "zustand";
import { generateLiveCodingInterview } from "@/lib/ai";

export type InterviewStore = {
  difficulty: InterviewDifficulty;
  duration: Duration;
  question: string;
  currentCode: string;
  language: "typescript" | "javascript";
  typeScriptCode: string;
  javaScriptCode: string;
  testCases: TestCase[];
  testResults: { passed: boolean; output: string }[];
  isLoading: boolean;
  interviewStartTime: number | null;
  isInterviewActive: boolean;

  setDifficulty: (difficulty: InterviewDifficulty) => void;
  setDuration: (duration: Duration) => void;
  setQuestion: (question: string) => void;
  setLanguage: (language: "typescript" | "javascript") => void;
  setCurrentCode: (code: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setInterviewStartTime: (startTime: number | null) => void;
  setIsInterviewActive: (isActive: boolean) => void;
  resetInterview: () => void;
  submitLiveCodingAnswer: () => void;
  generateInterview: () => Promise<void>;
};

export const useInterviewStore = create<InterviewStore>((set) => ({
  difficulty: InterviewDifficulty.EASY,
  duration: Duration.MINUTES_10,
  question: "",
  currentCode: "",
  language: "typescript",
  typeScriptCode: "",
  javaScriptCode: "",
  testCases: [],
  testResults: [],
  isLoading: false,
  interviewStartTime: null,
  isInterviewActive: false,

  setDifficulty: (difficulty) => set({ difficulty }),
  setDuration: (duration) => set({ duration }),
  setQuestion: (question) => set({ question }),
  setLanguage: (language) =>
    set((state) => ({
      language,
      currentCode:
        language === "typescript" ? state.typeScriptCode : state.javaScriptCode,
    })),
  setCurrentCode: (code) =>
    set((state) => ({
      currentCode: code,
      ...(state.language === "typescript"
        ? { typeScriptCode: code }
        : { javaScriptCode: code }),
    })),
  setIsLoading: (isLoading) => set({ isLoading }),
  setInterviewStartTime: (startTime) => set({ interviewStartTime: startTime }),
  setIsInterviewActive: (isActive) => set({ isInterviewActive: isActive }),
  resetInterview: () =>
    set({
      question: "",
      currentCode: "",
      typeScriptCode: "",
      javaScriptCode: "",
      testResults: [],
      interviewStartTime: null,
      isInterviewActive: false,
    }),
  submitLiveCodingAnswer: () => {
    set({
      testResults: [],
      isInterviewActive: false,
    });
  },

  generateInterview: async () => {
    set({ isLoading: true });
    try {
      const interview = await generateLiveCodingInterview();
      set((state) => ({
        question: interview.problem,
        typeScriptCode: interview.typeScriptInitialCode,
        javaScriptCode: interview.javaScriptInitialCode,
        currentCode:
          state.language === "typescript"
            ? interview.typeScriptInitialCode
            : interview.javaScriptInitialCode,
        testResults: [],
        testCases: interview.testCases,
        isLoading: false,
        interviewStartTime: Date.now(),
        isInterviewActive: true,
      }));
    } catch (error) {
      console.error("Failed to generate interview:", error);
      set({ isLoading: false });
      throw error;
    }
  },
}));
