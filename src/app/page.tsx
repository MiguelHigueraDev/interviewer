import { Settings } from "@/components/home/settings";
import { DifficultySelector } from "@/components/home/interview-config/interview-config";
import { TechnologySelector } from "@/components/home/technology-selector/technology-selector";
import { GenerateQuestionsBtn } from "@/components/home/generate-questions-btn";
import { QuestionRedirector } from "@/components/multiple-choice-interview/question-redirector";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Interviewer</h1>
      <h2 className="text-lg text-muted-foreground mb-4 md:mb-8">
        Get interview questions about the technology you are applying for
      </h2>
      <div className="flex flex-col space-y-4 mb-4 md:space-y-0 md:flex-row gap-4 w-full">
        <TechnologySelector />
        <DifficultySelector />
      </div>
      <GenerateQuestionsBtn />
      <div className="fixed bottom-3 right-3 p-2">
        <Settings />
      </div>
      <QuestionRedirector />
    </>
  );
}
