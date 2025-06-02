"use client";

import { useGradedSolutionStore } from "@/stores/graded-solution";

export function Complexities() {
  const { gradedSolution } = useGradedSolutionStore();

  const getComplexityColor = (complexity: string) => {
    const lowerComplexity = complexity.toLowerCase();
    if (!lowerComplexity) return "text-gray-600";

    if (lowerComplexity.includes("o(1)")) return "text-green-600";
    if (
      lowerComplexity.includes("o(log") ||
      (lowerComplexity.includes("o(n)") && !lowerComplexity.includes("o(n²)"))
    )
      return "text-blue-600";
    if (lowerComplexity.includes("o(n log n)")) return "text-yellow-600";
    if (lowerComplexity.includes("o(n²)") || lowerComplexity.includes("o(2^n)"))
      return "text-red-600";

    return "text-purple-600";
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-purple-50 p-6 h-full flex flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center gap-2">
          <span className="text-purple-600">⚡</span>
          Complexities
        </h1>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm flex-1">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-xl font-bold text-gray-800">
              ⏱️ Time Complexity
            </h2>
            <div
              className={`px-3 py-1 rounded-full text-sm font-mono font-bold ${getComplexityColor(
                gradedSolution?.timeComplexity || ""
              )} bg-gray-100`}
            >
              {gradedSolution?.timeComplexity}
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {gradedSolution?.timeComplexityExplanation}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm flex-1">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-xl font-bold text-gray-800">
              💾 Space Complexity
            </h2>
            <div
              className={`px-3 py-1 rounded-full text-sm font-mono font-bold ${getComplexityColor(
                gradedSolution?.spaceComplexity || ""
              )} bg-gray-100`}
            >
              {gradedSolution?.spaceComplexity}
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {gradedSolution?.spaceComplexityExplanation}
          </p>
        </div>
      </div>
    </div>
  );
}
