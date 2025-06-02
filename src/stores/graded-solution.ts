import { create } from "zustand";
import { GradedSolution } from "@/lib/types";

type GradedSolutionStore = {
  gradedSolution: GradedSolution | null;
  setGradedSolution: (gradedSolution: GradedSolution) => void;
  resetGradedSolution: () => void;
};

export const useGradedSolutionStore = create<GradedSolutionStore>((set) => ({
  gradedSolution: null,
  setGradedSolution: (gradedSolution) => set({ gradedSolution }),
  resetGradedSolution: () => set({ gradedSolution: null }),
}));
