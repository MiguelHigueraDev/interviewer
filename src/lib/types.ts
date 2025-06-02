import { z } from "zod";

export enum InterviewDifficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export enum Duration {
  MINUTES_10 = "MINUTES_10",
  MINUTES_20 = "MINUTES_20",
  MINUTES_30 = "MINUTES_30",
}

export const testCaseSchema = z.object({
  input: z.string(),
  expectedOutput: z.string(),
});

export const liveCodingInterviewSchema = z.object({
  problem: z.string(),
  difficulty: z.string(),
  duration: z.string(),
  testCases: z.array(testCaseSchema),
  typeScriptInitialCode: z.string(),
  javaScriptInitialCode: z.string(),
});

export type LiveCodingInterview = z.infer<typeof liveCodingInterviewSchema>;
export type TestCase = z.infer<typeof testCaseSchema>;
