import { technologies } from "@/lib/constants";
import { InterviewDifficulty, InterviewType, Technology } from "@/lib/types";
import { create } from "zustand";

export type InterviewStore = {
  difficulty: InterviewDifficulty;
  selectedTechnology: Technology;
  interviewType: InterviewType;
  questions: string[];
  setDifficulty: (difficulty: InterviewDifficulty) => void;
  setSelectedTechnology: (technology: Technology) => void;
  setInterviewType: (interviewType: InterviewType) => void;
  setQuestions: (questions: string[]) => void;
};

export const useInterviewStore = create<InterviewStore>((set) => ({
  difficulty: InterviewDifficulty.EASY,
  selectedTechnology: technologies[0],
  interviewType: "MULTIPLE_CHOICE",
  questions: [],
  setDifficulty: (difficulty) => set({ difficulty }),
  setSelectedTechnology: (technology) =>
    set({ selectedTechnology: technology }),
  setInterviewType: (interviewType) => set({ interviewType }),
  setQuestions: (questions) => set({ questions }),
}));
