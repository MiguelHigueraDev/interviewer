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
  currentQuestionIndex: number;
  isGeneratingQuestions: boolean;
  setDifficulty: (difficulty: InterviewDifficulty) => void;
  setSelectedTechnology: (technology: Technology) => void;
  setInterviewType: (interviewType: InterviewType) => void;
  setQuestions: (questions: Question[]) => void;
  setIsGeneratingQuestions: (isGeneratingQuestions: boolean) => void;
  advanceToNextQuestion: (optionIndex: number) => void;
};

export const useInterviewStore = create<InterviewStore>((set) => ({
  difficulty: InterviewDifficulty.EASY,
  selectedTechnology: technologies[0],
  interviewType: "MULTIPLE_CHOICE",
  questions: [],
  isGeneratingQuestions: false,
  currentQuestionIndex: 0,
  setDifficulty: (difficulty) => set({ difficulty }),
  setSelectedTechnology: (technology) =>
    set({ selectedTechnology: technology }),
  setInterviewType: (interviewType) => set({ interviewType }),
  setQuestions: (questions) => set({ questions }),
  setIsGeneratingQuestions: (isGeneratingQuestions) =>
    set({ isGeneratingQuestions }),
  advanceToNextQuestion: (optionIndex: number) =>
    set((state) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const correctAnswerIndex = currentQuestion.choices.findIndex(
        (choice) => choice.isCorrect
      );
      return {
        currentQuestionIndex: state.currentQuestionIndex + 1,
        questions: state.questions.map((question, index) =>
          index === state.currentQuestionIndex
            ? { ...question, isCorrect: optionIndex === correctAnswerIndex }
            : question
        ),
      };
    }),
}));
