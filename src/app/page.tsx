import { DifficultySettings } from "@/components/home/difficulty-settings";
import { Settings } from "@/components/home/settings";
import { StartInterviewButton } from "@/components/home/start-interview-button";
import { QuestionRedirector } from "@/components/live-coding-interview/question-redirector";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Interviewer</h1>
        <h2 className="text-lg text-muted-foreground">
          Simulate a live coding interview with AI
        </h2>
        <p className="text-sm text-muted-foreground">
          You can write code in TypeScript or JavaScript
        </p>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <div className="border border-gray-200 rounded-lg p-6 md:p-8 space-y-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Settings</h3>
          <DifficultySettings />
          <StartInterviewButton />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Settings />
      </div>
      <QuestionRedirector />
    </div>
  );
}
