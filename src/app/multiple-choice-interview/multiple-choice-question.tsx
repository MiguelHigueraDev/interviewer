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
  currentQuestionIndex: number;
  questions: Question[];
}

export function MultipleChoiceQuestion({
  question,
  selectedOption,
  onSelectionChange,
  onNext,
  hasUnansweredQuestions,
  currentQuestionIndex,
  questions,
}: MultipleChoiceQuestionProps) {
  return (
    <div className="w-full max-w-md bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
      <div className="flex justify-center items-center w-full mb-4">
        <div className="text-sm text-gray-500 tracking-widest">
          {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>
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
