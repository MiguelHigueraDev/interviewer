import { z } from "zod";

export enum InterviewDifficulty {
  EASY,
  MEDIUM,
  HARD,
}

export enum Duration {
  MINUTES_10,
  MINUTES_20,
  MINUTES_30,
}

export const testCaseSchema = z.object({
  input: z.string(),
  expectedOutput: z.string(),
});

export const liveCodingInterviewSchema = z.object({
  problem: z.string(),
  difficulty: z.nativeEnum(InterviewDifficulty),
  testCases: z.array(testCaseSchema),
});

export type LiveCodingInterview = z.infer<typeof liveCodingInterviewSchema>;
