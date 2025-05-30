"use client";

import { InterviewDifficulty } from "@/lib/types";
import { useInterviewStore } from "@/stores/interview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Separator } from "../../ui/separator";
import { DifficultySlider } from "./difficulty-slider";
import { InterviewTypeSelector } from "./interview-type-selector";

const getDifficultyName = (difficulty: InterviewDifficulty): string => {
  switch (difficulty) {
    case InterviewDifficulty.EASY:
      return "Easy";
    case InterviewDifficulty.MEDIUM:
      return "Medium";
    case InterviewDifficulty.HARD:
      return "Hard";
    default:
      return "";
  }
};

export function DifficultySelector() {
  const { difficulty, setDifficulty, interviewType, setInterviewType } =
    useInterviewStore();

  return (
    <Card className="w-full md:w-[380px]">
      <CardHeader>
        <CardTitle>Interview Configuration</CardTitle>
        <CardDescription>
          Adjust the difficulty and view the interview type.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <DifficultySlider
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          getDifficultyName={getDifficultyName}
        />

        <Separator />

        <InterviewTypeSelector
          interviewType={interviewType}
          setInterviewType={setInterviewType}
        />
      </CardContent>
    </Card>
  );
}
