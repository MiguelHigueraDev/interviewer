"use client";

import { useInterviewStore } from "@/stores/interview";
import { Button } from "../ui/button";
import { getDifficultyName } from "@/lib/utils";

export function GenerateQuestionsBtn() {
  const { difficulty, selectedTechnology } = useInterviewStore();

  return (
    <Button className="w-full p-6 cursor-pointer">
      Generate {getDifficultyName(difficulty)} {selectedTechnology.name}{" "}
      Interview Questions
    </Button>
  );
}
