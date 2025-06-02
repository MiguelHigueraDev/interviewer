"use client";

import { gradeSolution } from "@/lib/ai";
import { useInterviewStore } from "@/stores/interview";
import { Button } from "../ui/button";
import { useGradedSolutionStore } from "@/stores/graded-solution";
import { useRouter } from "next/navigation";

// Submit button and modal
export function GradeButton() {
  const router = useRouter();
  const handleSubmit = async () => {
    const { setGradedSolution } = useGradedSolutionStore.getState();
    const { currentCode, testCases } = useInterviewStore.getState();
    const gradedSolution = await gradeSolution(currentCode, testCases);
    setGradedSolution(gradedSolution);
    router.push("/results");
  };

  return (
    <Button className="w-full flex-shrink-0" onClick={handleSubmit}>
      Submit and grade
    </Button>
  );
}
