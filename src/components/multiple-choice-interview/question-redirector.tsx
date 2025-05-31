"use client";

import { useInterviewStore } from "@/stores/interview";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function QuestionRedirector() {
  const router = useRouter();
  const questions = useInterviewStore((state) => state.questions);

  useEffect(() => {
    if (questions.length > 0) {
      router.push("/multiple-choice-interview");
    }
  }, [questions, router]);

  return null;
}
