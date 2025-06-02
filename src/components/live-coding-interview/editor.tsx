"use client";

import MonacoEditor from "@/components/monaco/monaco-editor";
import { ConsoleMessage } from "@/components/live-coding-interview/editor-console";
import EditorSidebar from "@/components/live-coding-interview/editor-sidebar";
import { useState, useEffect, useRef } from "react";
import { useInterviewStore } from "@/stores/interview";
import { transpileTs } from "@/lib/utils";

interface EditorProps {
  onSubmit?: () => void;
}

export default function Editor({ onSubmit }: EditorProps) {
  const { typeScriptCode, setCurrentCode } = useInterviewStore();
  const [consoleOutput, setConsoleOutput] = useState<ConsoleMessage[]>([]);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-execute code with debouncing
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Store original console methods, override them to capture output
    // and restore them after execution
    const executeCode = () => {
      const messages: ConsoleMessage[] = [];

      const originalConsole = {
        log: console.log,
        error: console.error,
        warn: console.warn,
        info: console.info,
      };

      console.log = (...args) => {
        messages.push({
          type: "log",
          message: args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" "),
          timestamp: new Date(),
        });
        originalConsole.log(...args);
      };

      console.error = (...args) => {
        messages.push({
          type: "error",
          message: args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" "),
          timestamp: new Date(),
        });
        originalConsole.error(...args);
      };

      console.warn = (...args) => {
        messages.push({
          type: "warn",
          message: args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" "),
          timestamp: new Date(),
        });
        originalConsole.warn(...args);
      };

      console.info = (...args) => {
        messages.push({
          type: "info",
          message: args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" "),
          timestamp: new Date(),
        });
        originalConsole.info(...args);
      };

      try {
        const jsCode = transpileTs(typeScriptCode);
        const func = new Function(jsCode);
        func();
      } catch (error) {
        messages.push({
          type: "error",
          message: `Runtime Error: ${
            error instanceof Error ? error.message : String(error)
          }`,
          timestamp: new Date(),
        });
      } finally {
        console.log = originalConsole.log;
        console.error = originalConsole.error;
        console.warn = originalConsole.warn;
        console.info = originalConsole.info;
      }

      setConsoleOutput((prev) => [...prev, ...messages]);
    };

    if (typeScriptCode.trim()) {
      debounceTimerRef.current = setTimeout(() => {
        setConsoleOutput([]);
        executeCode();
      }, 2000); // 2 seconds
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [typeScriptCode]);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full h-full max-w-7xl mx-auto">
      <div className="flex flex-col w-full md:w-3/5 h-full border border-gray-200 rounded-lg p-2">
        <MonacoEditor
          width="100%"
          height="100%"
          defaultLanguage="typescript"
          defaultValue="// type your code here"
          theme="vs-light"
          options={{
            fontSize: 16,
            minimap: { enabled: false },
          }}
          value={typeScriptCode}
          onChange={(value) => setCurrentCode(value ?? "")}
        />
      </div>
      <EditorSidebar consoleOutput={consoleOutput} onSubmit={onSubmit} />
    </div>
  );
}
