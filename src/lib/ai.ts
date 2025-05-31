import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import useApiKeyStore from "@/stores/api-key";
import { getDifficultyName } from "./utils";
import { useInterviewStore } from "@/stores/interview";
import { questionsSchema } from "./types";

export const generateMultipleChoiceQuestions = async () => {
  const {
    difficulty,
    selectedTechnology,
    setQuestions,
    setIsGeneratingQuestions,
  } = useInterviewStore.getState();
  setIsGeneratingQuestions(true);
  try {
    setIsGeneratingQuestions(true);
    const google = getGoogleGenAIClient();
    const response = await generateObject({
      model: google("gemini-2.0-flash"),
      system: `You are a helpful assistant that generates interview questions for a given technology and difficulty level. 
        Each question should have a 'text' field and a 'choices' array of 4 objects, 
        each with 'text' and 'isCorrect' (boolean, only one isCorrect should be true per question, 
        the rest should be false (non correct choices)).
        Try to make the questions as diverse as possible.
        Don't always make the correct answer the first choice.`,
      prompt: `Generate 10 ${getDifficultyName(
        difficulty
      )} interview questions about the ${selectedTechnology.name}`,
      schema: questionsSchema,
    });
    const questions = response.object.questions;
    setQuestions(questions);
    console.log(questions);
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    setIsGeneratingQuestions(false);
  }
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
