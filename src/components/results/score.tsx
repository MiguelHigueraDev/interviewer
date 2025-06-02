"use client";

import { useGradedSolutionStore } from "@/stores/graded-solution";

export function Score() {
  const { gradedSolution } = useGradedSolutionStore();

  const score = gradedSolution?.score || 0;
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-50 border-green-200";
    if (score >= 60) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const getScoreGrade = (score: number) => {
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  };

  return (
    <div
      className={`rounded-lg border p-6 h-full flex flex-col ${getScoreBgColor(
        score
      )}`}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center gap-2">
          <span className={getScoreColor(score)}>🎯</span>
          Your Score
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="mb-6">
          <div className={`text-6xl font-bold mb-2 ${getScoreColor(score)}`}>
            {score}
            <span className="text-3xl text-gray-500">/100</span>
          </div>
          <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
            Grade: {getScoreGrade(score)}
          </div>
        </div>

        <div className="w-full max-w-sm mb-6">
          <div className="bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
            <div
              className={`h-full transition-all duration-1000 ease-out ${
                score >= 80
                  ? "bg-green-500"
                  : score >= 60
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
