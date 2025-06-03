"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useInterviewStore } from "@/stores/interview";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Reset interview timers before going back
    useInterviewStore.getState().setInterviewStartTime(Date.now());
    useInterviewStore.getState().setIsInterviewActive(true);
    router.back();
  };

  return (
    <Button className="mt-4 cursor-pointer" onClick={handleBack}>
      Go back
    </Button>
  );
}
