"use client";

import { QuestionChoices } from "./question-choices";
import { NavigationButton } from "./navigation-button";
import { Question } from "@/lib/types";

interface MultipleChoiceQuestionProps {
  question: Question;
  selectedOption: number | undefined;
  onSelectionChange: (choiceIndex: number) => void;
  onNext: () => void;
  hasUnansweredQuestions: boolean;
}

export function MultipleChoiceQuestion({
  question,
  selectedOption,
  onSelectionChange,
  onNext,
  hasUnansweredQuestions,
}: MultipleChoiceQuestionProps) {
  return (
    <div className="w-full max-w-md bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
      <div className="mb-6 w-full text-center text-xl font-semibold">
        {question.question}
      </div>
      <QuestionChoices
        choices={question.choices}
        selectedOption={selectedOption}
        onSelectionChange={onSelectionChange}
      />
      <NavigationButton
        onClick={onNext}
        disabled={selectedOption === undefined}
        hasUnansweredQuestions={hasUnansweredQuestions}
      />
    </div>
  );
}
