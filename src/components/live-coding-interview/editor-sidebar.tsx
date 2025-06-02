import { Button } from "@/components/ui/button";
import {
  EditorConsole,
  ConsoleMessage,
} from "@/components/live-coding-interview/editor-console";
import { useInterviewStore } from "@/stores/interview";

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
          <p className="text-sm mb-2">{question}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Test Cases</h2>
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            {testCases.map((testCase) => (
              <p key={testCase.input}>
                Input: {testCase.input}
                <br />
                Expected Output: {testCase.expectedOutput}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <EditorConsole messages={consoleOutput} />
      </div>
      <Button className="w-full flex-shrink-0" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
}
