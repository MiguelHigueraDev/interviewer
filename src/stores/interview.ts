import { technologies } from "@/lib/constants";
import {
  InterviewDifficulty,
  InterviewType,
  Question,
  Technology,
} from "@/lib/types";
import { create } from "zustand";

export type InterviewStore = {
  difficulty: InterviewDifficulty;
  selectedTechnology: Technology;
  interviewType: InterviewType;
  questions: Question[];
  isGeneratingQuestions: boolean;
  setDifficulty: (difficulty: InterviewDifficulty) => void;
  setSelectedTechnology: (technology: Technology) => void;
  setInterviewType: (interviewType: InterviewType) => void;
  setQuestions: (questions: Question[]) => void;
  setIsGeneratingQuestions: (isGeneratingQuestions: boolean) => void;
};

export const useInterviewStore = create<InterviewStore>((set) => ({
  difficulty: InterviewDifficulty.EASY,
  selectedTechnology: technologies[0],
  interviewType: "MULTIPLE_CHOICE",
  questions: [],
  isGeneratingQuestions: false,
  setDifficulty: (difficulty) => set({ difficulty }),
  setSelectedTechnology: (technology) =>
    set({ selectedTechnology: technology }),
  setInterviewType: (interviewType) => set({ interviewType }),
  setQuestions: (questions) => set({ questions }),
  setIsGeneratingQuestions: (isGeneratingQuestions) =>
    set({ isGeneratingQuestions }),
}));
