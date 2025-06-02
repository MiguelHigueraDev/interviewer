"use client";

import { useInterviewStore } from "@/stores/interview";
import { Slider } from "../ui/slider";
import { Duration, InterviewDifficulty } from "@/lib/types";
import { getDifficultyLabel, getDurationLabel } from "@/lib/utils";

const DIFFICULTY_OPTIONS = [
  InterviewDifficulty.EASY,
  InterviewDifficulty.MEDIUM,
  InterviewDifficulty.HARD,
];

const DURATION_OPTIONS = [
  Duration.MINUTES_10,
  Duration.MINUTES_20,
  Duration.MINUTES_30,
];

export function DifficultySettings() {
  const { difficulty, duration, setDifficulty, setDuration } =
    useInterviewStore();

  // Convert enum values to slider indices
  const difficultyIndex = DIFFICULTY_OPTIONS.indexOf(difficulty);
  const durationIndex = DURATION_OPTIONS.indexOf(duration);

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
            value={[difficultyIndex]}
            onValueChange={(value) =>
              setDifficulty(DIFFICULTY_OPTIONS[value[0]])
            }
            min={0}
            max={DIFFICULTY_OPTIONS.length - 1}
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
            value={[durationIndex]}
            onValueChange={(value) => setDuration(DURATION_OPTIONS[value[0]])}
            min={0}
            max={DURATION_OPTIONS.length - 1}
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
