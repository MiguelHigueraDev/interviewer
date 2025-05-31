"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Choice } from "@/lib/types";

interface QuestionChoicesProps {
  choices: Choice[];
  selectedOption: number | undefined;
  onSelectionChange: (choiceIndex: number) => void;
}

export function QuestionChoices({
  choices,
  selectedOption,
  onSelectionChange,
}: QuestionChoicesProps) {
  return (
    <RadioGroup
      onValueChange={(value) => {
        const choiceIndex = choices.findIndex(
          (choice) => choice.choice === value
        );
        onSelectionChange(choiceIndex);
      }}
      value={
        selectedOption !== undefined && choices[selectedOption]
          ? choices[selectedOption].choice
          : ""
      }
      className="w-full"
    >
      {choices.map((choice, index) => (
        <div className="flex items-center space-x-2 mb-3" key={choice.choice}>
          <RadioGroupItem
            value={choice.choice}
            id={`${choice.choice}-${index}`}
          />
          <Label htmlFor={`${choice.choice}-${index}`}>{choice.choice}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
