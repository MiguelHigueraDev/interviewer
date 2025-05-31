"use client";

import { Button } from "@/components/ui/button";

interface NavigationButtonProps {
  onClick: () => void;
  disabled: boolean;
  hasUnansweredQuestions: boolean;
}

export function NavigationButton({
  onClick,
  disabled,
  hasUnansweredQuestions,
}: NavigationButtonProps) {
  return (
    <Button onClick={onClick} className="mt-8 w-full" disabled={disabled}>
      {hasUnansweredQuestions ? "Next" : "Submit"}
    </Button>
  );
}
