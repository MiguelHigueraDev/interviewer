"use client";

import { useInterviewStore } from "@/stores/interview";
import { Slider } from "../ui/slider";
import { Duration, InterviewDifficulty } from "@/lib/types";
import { getDifficultyLabel, getDurationLabel } from "@/lib/utils";

export function DifficultySettings() {
  const { difficulty, duration, setDifficulty, setDuration } =
    useInterviewStore();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Difficulty</label>
          <span className="text-lg font-semibold text-blue-600">
            {getDifficultyLabel(difficulty)}
          </span>
        </div>
        <div className="px-4">
          <Slider
            value={[difficulty]}
            onValueChange={(value) =>
              setDifficulty(value[0] as InterviewDifficulty)
            }
            min={InterviewDifficulty.EASY}
            max={InterviewDifficulty.HARD}
            step={1}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 px-4">
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Duration</label>
          <span className="text-lg font-semibold text-green-600">
            {getDurationLabel(duration)}
          </span>
        </div>
        <div className="px-4">
          <Slider
            value={[duration]}
            onValueChange={(value) => setDuration(value[0] as Duration)}
            min={Duration.MINUTES_10}
            max={Duration.MINUTES_30}
            step={1}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 px-4">
          <span>10 min</span>
          <span>20 min</span>
          <span>30 min</span>
        </div>
      </div>
    </div>
  );
}
