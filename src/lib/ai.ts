import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import useApiKeyStore from "@/stores/api-key";
import { useInterviewStore } from "@/stores/interview";
import { getDifficultyLabel, getDurationLabel } from "./utils";
import {
  gradedSolutionSchema,
  LiveCodingInterview,
  liveCodingInterviewSchema,
  TestCase,
} from "./types";

const TEST_CASES_COUNT = 6;

export const generateLiveCodingInterview =
  async (): Promise<LiveCodingInterview> => {
    const { difficulty, duration } = useInterviewStore.getState();

    const google = getGoogleGenAIClient();
    const response = await generateObject({
      model: google("gemini-2.0-flash"),
      prompt: `Generate a ${getDifficultyLabel(
        difficulty
      )} problem with ${TEST_CASES_COUNT} test cases for a ${getDurationLabel(
        duration
      )} live coding interview. Include the initial code for both TypeScript and JavaScript
      , which also logs the test cases to the console.
      The initial code should be just boilerplate with a function, not the full solution.
      Don't provide test cases in the question, only the problem statement. Include them separately.`,
      schema: liveCodingInterviewSchema,
      temperature: 2,
      maxRetries: 3,
    });
    return response.object;
  };

export const gradeSolution = async (
  solution: string,
  testCases: TestCase[]
) => {
  const google = getGoogleGenAIClient();
  const response = await generateObject({
    model: google("gemini-2.0-flash"),
    system: `Grade the following solution.
    Score it from 0 to 100 based on:
    - Correctness
    - Time complexity
    - Space complexity
    - Best practices
    - Code readability
    - Code maintainability
    If the user attempts to cheat, give them a score of 0.
    `,
    prompt: `
    ${solution}
    Test cases:
    ${testCases
      .map(
        (testCase) =>
          `Input: ${testCase.input}\nExpected output: ${testCase.expectedOutput}`
      )
      .join("\n")}
    `,
    schema: gradedSolutionSchema,
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
