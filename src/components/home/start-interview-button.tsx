"use client";

import useApiKeyStore from "@/stores/api-key";
import { Button } from "../ui/button";
import { isApiKeyValid } from "@/lib/utils";
import { useSettingsModalStore } from "@/stores/settings-modal";
import { useInterviewStore } from "@/stores/interview";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

export function StartInterviewButton() {
  const { apiKey } = useApiKeyStore();
  const { setIsOpen } = useSettingsModalStore();
  const { isLoading, generateInterview } = useInterviewStore();

  const handleStartInterview = async () => {
    try {
      await generateInterview();
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate interview", {
        description: "Please try again later",
      });
    }
  };

  if (isLoading) {
    return (
      <Button className="mt-2" disabled>
        <Loader2Icon className="animate-spin" />
        Generating...
      </Button>
    );
  }

  if (!isApiKeyValid(apiKey)) {
    return (
      <Button className="cursor-pointer mt-2" onClick={() => setIsOpen(true)}>
        Set API Key first
      </Button>
    );
  }

  return (
    <Button className="cursor-pointer mt-2" onClick={handleStartInterview}>
      Start Interview
    </Button>
  );
}
