"use client";

import { useInterviewStore } from "@/stores/interview";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function QuestionRedirector() {
  const router = useRouter();
  const question = useInterviewStore((state) => state.question);

  useEffect(() => {
    if (question) {
      router.push("/live-coding-interview");
    }
  }, [question, router]);

  return null;
}
