import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import useApiKeyStore from "@/stores/api-key";
import { useInterviewStore } from "@/stores/interview";
import { getDifficultyLabel, getDurationLabel } from "./utils";
import { LiveCodingInterview, liveCodingInterviewSchema } from "./types";

export const generateLiveCodingInterview =
  async (): Promise<LiveCodingInterview> => {
    const { difficulty, duration } = useInterviewStore.getState();

    const google = getGoogleGenAIClient();
    const response = await generateObject({
      model: google("gemini-2.0-flash"),
      prompt: `Generate a ${getDifficultyLabel(
        difficulty
      )} problem with test cases for a ${getDurationLabel(
        duration
      )} live coding interview. Include the initial code for both TypeScript and JavaScript
      , which also logs the test cases to the console.`,
      schema: liveCodingInterviewSchema,
    });
    return response.object;
  };

const getGoogleGenAIClient = () => {
  const { apiKey } = useApiKeyStore.getState();
  if (!apiKey.startsWith("AIza")) {
    throw new Error("Invalid API key");
  }
  const google = createGoogleGenerativeAI({
    apiKey,
  });
  return google;
};
