import { Button } from "@/components/ui/button";
import {
  EditorConsole,
  ConsoleMessage,
} from "@/components/live-coding-interview/editor-console";

interface EditorSidebarProps {
  consoleOutput: ConsoleMessage[];
  onSubmit?: () => void;
}

export default function EditorSidebar({
  consoleOutput,
  onSubmit,
}: EditorSidebarProps) {
  return (
    <div className="flex flex-col gap-4 w-full md:w-2/5 h-full border border-gray-200 rounded-lg p-2">
      <div className="flex flex-col gap-4 flex-shrink-0">
        <div>
          <h2 className="text-lg font-semibold mb-2">Question</h2>
          <p className="text-sm mb-2">
            Given an array of integers, return the two numbers such that they
            add up to a specific target number.
          </p>
          <p className="text-sm text-gray-600">Example:</p>
          <p className="text-sm text-gray-600">
            Input: nums = [2, 7, 11, 15], target = 9
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Test Cases</h2>
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <p>Test Case 1</p>
            <p>Test Case 2</p>
            <p>Test Case 3</p>
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
