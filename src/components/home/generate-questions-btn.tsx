"use client";

import { useInterviewStore } from "@/stores/interview";
import { Button } from "../ui/button";
import { getDifficultyName } from "@/lib/utils";
import { generateQuestions } from "@/lib/ai";
import { Loader2Icon } from "lucide-react";

export function GenerateQuestionsBtn() {
  const { difficulty, selectedTechnology, isGeneratingQuestions } =
    useInterviewStore();

  if (isGeneratingQuestions) {
    return (
      <Button className="w-full p-6 cursor-pointer" disabled>
        <Loader2Icon className="animate-spin" />
        Generating questions...
      </Button>
    );
  }

  return (
    <Button onClick={generateQuestions} className="w-full p-6 cursor-pointer">
      Generate {getDifficultyName(difficulty)} {selectedTechnology.name}{" "}
      Interview Questions
    </Button>
  );
}
