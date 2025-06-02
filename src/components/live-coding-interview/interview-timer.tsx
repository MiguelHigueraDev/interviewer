"use client";

import { useEffect, useState, useRef } from "react";
import { useInterviewStore } from "@/stores/interview";
import { useGradedSolutionStore } from "@/stores/graded-solution";
import { useRouter } from "next/navigation";
import { formatTime, getDurationInMs } from "@/lib/utils";
import { gradeSolution } from "@/lib/ai";
import { Clock } from "lucide-react";

export function InterviewTimer() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const {
    duration,
    interviewStartTime,
    isInterviewActive,
    currentCode,
    testCases,
    setIsInterviewActive,
  } = useInterviewStore();

  const { setGradedSolution } = useGradedSolutionStore();

  const handleAutoSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setIsInterviewActive(false);

    try {
      const gradedSolution = await gradeSolution(currentCode, testCases);
      setGradedSolution(gradedSolution);
      router.push("/results");
    } catch (error) {
      console.error("Auto-submit failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isInterviewActive || !interviewStartTime) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    const durationMs = getDurationInMs(duration);

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = now - interviewStartTime;
      const remaining = Math.max(0, durationMs - elapsed);

      setTimeRemaining(remaining);

      if (remaining <= 0) {
        clearInterval(intervalRef.current!);
        handleAutoSubmit();
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInterviewActive, interviewStartTime, duration]);

  if (!isInterviewActive || !interviewStartTime) {
    return null;
  }

  const isTimeAlmostUp = timeRemaining <= 60000; // Less than 1 minute
  const isTimeCritical = timeRemaining <= 300000; // Less than 5 minutes

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-lg font-semibold ${
        isTimeAlmostUp
          ? "bg-red-100 text-red-700 border border-red-300"
          : isTimeCritical
          ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
          : "bg-green-100 text-green-700 border border-green-300"
      }`}
    >
      <Clock className="w-5 h-5" />
      <span>{isSubmitting ? "Submitting..." : formatTime(timeRemaining)}</span>
      {isTimeAlmostUp && !isSubmitting && (
        <span className="text-sm font-normal">- Time&apos;s almost up!</span>
      )}
    </div>
  );
}
