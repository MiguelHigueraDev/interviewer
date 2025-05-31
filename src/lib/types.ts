import { z } from "zod";

export enum InterviewDifficulty {
  EASY,
  MEDIUM,
  HARD,
}

export type InterviewType = "MULTIPLE_CHOICE";

export interface Technology {
  name: string;
  description: string;
  icon: string;
}

export const choiceSchema = z.object({
  choice: z.string(),
  isCorrect: z.boolean(),
});

export const questionSchema = z.object({
  question: z.string(),
  choices: z.array(choiceSchema).length(4),
});

export const questionsSchema = z.object({
  questions: z.array(questionSchema),
});

export type Choice = z.infer<typeof choiceSchema>;
export type Question = z.infer<typeof questionSchema>;
export type Questions = z.infer<typeof questionsSchema>;
