"use client";

import { useGradedSolutionStore } from "@/stores/graded-solution";

export function Feedback() {
  const { gradedSolution } = useGradedSolutionStore();

  return (
    <div className="rounded-lg border border-gray-200 bg-blue-50 p-6 h-full flex flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center gap-2">
          <span className="text-blue-600">💬</span>
          Feedback
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {gradedSolution?.feedback}
          </p>
        </div>
      </div>
    </div>
  );
}
