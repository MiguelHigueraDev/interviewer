"use client";

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
import { getDifficultyName } from "@/lib/utils";

export function DifficultySelector() {
  const { difficulty, setDifficulty, interviewType, setInterviewType } =
    useInterviewStore();

  return (
    <Card className="w-full md:w-1/3">
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
