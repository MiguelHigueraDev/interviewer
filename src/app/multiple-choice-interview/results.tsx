"use client";

import { useInterviewStore } from "@/stores/interview";

export function Results() {
  const { questions } = useInterviewStore();

  return (
    <div>
      <h1>Results</h1>
      <p>
        You got {questions.filter((question) => question.isCorrect).length} out
        of {questions.length}
      </p>
    </div>
  );
}
