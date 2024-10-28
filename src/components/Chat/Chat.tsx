import { twMerge } from "tailwind-merge";
import chatData, { ChatMessage } from "./chatData";
import { useState } from "react";
import DefaultChat from "./DefaultChat";

// function Chat() {
//   return (
//     <div>
//       Chat
//       <Messages messages={chatData} />
//       <div className="flex bottom-0 st w-full bg-amber-500 p-4">
// <input className="w-full max-w-[598px] bg-gray-100" type="text" />
// <button className="bg-gray-100 px-4 py-2 rounded-md">Submit</button>
//       </div>
//     </div>
//   );
// }

function Chat() {
  const [promptType, setPromptType] = useState<string | null>(null);

  function handleSetPromptType(promptType: string) {
    setPromptType(promptType);
  }
  return (
    <div className="h-screen flex flex-col">
      <div
        className="flex-1 overflow-y-auto pb-[68px]"
        style={{
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        {promptType === null ? (
          <DefaultChat setPromptType={handleSetPromptType} />
        ) : (
          <Messages messages={chatData} />
        )}
      </div>
      <ChatInput />
    </div>
  );
}
function ChatInput() {
  return (
    <div className="sticky flex items-center gap-4 mb-8">
      <input
        className="w-full max-w-[598px] bg-gray-100 py-2 px-4 border-2 rounded-md"
        type="text"
        placeholder="Ask me anything..."
      />
      <button className="bg-gray-100 px-4 py-2 rounded-md border-2 rounded-m">
        Submit
      </button>
    </div>
  );
}

interface MessageProps {
  messages: ChatMessage[];
}
function Messages({ messages }: MessageProps) {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((message) => {
        return (
          <div
            className={twMerge(
              "flex",
              message.role === "assistant" ? "justify-start" : "justify-end",
            )}
            key={message.id}
          >
            <span
              className={twMerge(
                "border-2 p-4 rounded-md",
                message.role === "assistant"
                  ? "bg-white"
                  : "bg-blue-500 border-blue-500 text-white",
              )}
            >
              {message.content}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
