"use client";

import { useState } from "react";
import { useInterviewStore } from "@/stores/interview";
import { HomeRedirector } from "@/components/home/home-redirector";
import { MultipleChoiceQuestion } from "./multiple-choice-question";

export default function MultipleChoiceInterview() {
  const { questions, currentQuestionIndex, advanceToNextQuestion } =
    useInterviewStore();
  const [selectedOption, setSelectedOption] = useState<number | undefined>(
    undefined
  );

  const areThereUnansweredQuestions = questions.some(
    (question) => !question.isCorrect
  );

  const handleNext = () => {
    if (selectedOption !== undefined) {
      advanceToNextQuestion(selectedOption);
      setSelectedOption(undefined);
    }
  };

  const handleSelectionChange = (choiceIndex: number) => {
    setSelectedOption(choiceIndex);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col justify-center items-center">
      <HomeRedirector />
      {currentQuestion ? (
        <MultipleChoiceQuestion
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelectionChange={handleSelectionChange}
          onNext={handleNext}
          hasUnansweredQuestions={areThereUnansweredQuestions}
        />
      ) : (
        <div className="text-center text-lg font-medium text-muted-foreground mt-12">
          No more questions
        </div>
      )}
    </div>
  );
}
