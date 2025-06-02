import Editor from "@/components/live-coding-interview/editor";
import { NoQuestionRedirector } from "@/components/live-coding-interview/no-question-redirector";

export default function LiveCodingInterviewPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="text-center py-4 px-4 flex-shrink-0"></div>
      <div className="flex-1 min-h-0 px-4 pb-4">
        <Editor />
      </div>
      <NoQuestionRedirector />
    </div>
  );
}
