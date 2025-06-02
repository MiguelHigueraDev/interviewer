"use client";

import { gradeSolution } from "@/lib/ai";
import { useInterviewStore } from "@/stores/interview";
import { Button } from "../ui/button";
import { useGradedSolutionStore } from "@/stores/graded-solution";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

// Submit button and modal
export function GradeButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { isInterviewActive, setIsInterviewActive } = useInterviewStore();

  const router = useRouter();
  const handleSubmit = async () => {
    const { setGradedSolution } = useGradedSolutionStore.getState();
    const { currentCode, testCases } = useInterviewStore.getState();
    setIsLoading(true);
    setIsInterviewActive(false); // Stop the timer when manually submitted
    const gradedSolution = await gradeSolution(currentCode, testCases);
    setGradedSolution(gradedSolution);
    setIsLoading(false);
    router.push("/results");
  };

  return (
    <Button
      className="w-full flex-shrink-0"
      onClick={handleSubmit}
      disabled={isLoading || !isInterviewActive}
    >
      {isLoading && <Loader2Icon className="animate-spin" />}
      {isLoading ? "Grading..." : "Submit and grade"}
    </Button>
  );
}
