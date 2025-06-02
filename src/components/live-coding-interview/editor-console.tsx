interface ConsoleMessage {
  type: "log" | "error" | "warn" | "info";
  message: string;
  timestamp: Date;
}

interface EditorConsoleProps {
  messages: ConsoleMessage[];
}

export function EditorConsole({ messages }: EditorConsoleProps) {
  const getMessageColor = (type: ConsoleMessage["type"]) => {
    switch (type) {
      case "error":
        return "text-red-500";
      case "warn":
        return "text-yellow-600";
      case "info":
        return "text-blue-500";
      default:
        return "text-black";
    }
  };

  return (
    <div className="flex flex-col gap-2 flex-1 h-full">
      <div className="bg-gray-50 text-white p-2 rounded border h-full overflow-y-auto font-mono text-sm">
        {messages.length === 0 ? (
          <div className="text-start text-gray-500">
            Console output will appear here...
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`${getMessageColor(
                msg.type
              )} whitespace-pre-wrap text-start`}
            >
              <span className="text-black text-xs">
                [{msg.timestamp.toLocaleTimeString()}]
              </span>
              <span className="ml-1">{msg.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export type { ConsoleMessage };
