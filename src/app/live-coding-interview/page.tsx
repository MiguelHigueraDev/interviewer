import { Settings } from "@/components/home/settings";
import Editor from "@/components/live-coding-interview/editor";
import { NoQuestionRedirector } from "@/components/live-coding-interview/no-question-redirector";

export default function LiveCodingInterviewPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="text-center py-4 px-4 flex-shrink-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Interviewer</h1>
        <h2 className="text-base md:text-lg text-muted-foreground">
          Simulate a live coding interview with AI
        </h2>
      </div>
      <div className="flex-1 min-h-0 px-4 pb-4">
        <Editor />
      </div>
      <div className="fixed bottom-4 right-4">
        <Settings />
      </div>
      <NoQuestionRedirector />
    </div>
  );
}
