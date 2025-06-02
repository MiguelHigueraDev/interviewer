import { Button } from "@/components/ui/button";
import {
  EditorConsole,
  ConsoleMessage,
} from "@/components/live-coding-interview/editor-console";
import { useInterviewStore } from "@/stores/interview";
import ReactMarkdown from "react-markdown";
import { ArrowRight, Play } from "lucide-react";

interface EditorSidebarProps {
  consoleOutput: ConsoleMessage[];
  onSubmit?: () => void;
}

export default function EditorSidebar({
  consoleOutput,
  onSubmit,
}: EditorSidebarProps) {
  const { question, testCases } = useInterviewStore();
  return (
    <div className="flex flex-col gap-4 w-full md:w-2/5 h-full border border-gray-200 rounded-lg p-2">
      <div className="flex flex-col gap-4 flex-shrink-0">
        <div>
          <h2 className="text-lg font-semibold mb-2">Question</h2>
          <div className="prose">
            <ReactMarkdown>{question}</ReactMarkdown>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Test Cases</h2>
          <div className="flex flex-col gap-2 text-sm">
            {testCases.map((testCase) => (
              <div
                key={testCase.input}
                className="flex items-center gap-2 p-2 bg-gray-50 rounded-md"
              >
                <Play className="w-3 h-3 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  {testCase.input}
                </span>
                <ArrowRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <span className="text-green-600 font-medium">
                  {testCase.expectedOutput}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <EditorConsole messages={consoleOutput} />
      </div>
      <Button className="w-full flex-shrink-0" onClick={onSubmit}>
        Submit and grade
      </Button>
    </div>
  );
}
