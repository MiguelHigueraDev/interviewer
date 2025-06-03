"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useInterviewStore } from "@/stores/interview";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    useInterviewStore.getState().resetInterview();
    router.replace("/");
  };

  return (
    <Button className="cursor-pointer" onClick={handleBack}>
      Go back
    </Button>
  );
}
