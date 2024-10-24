import { twMerge } from "tailwind-merge";
import chatData, { ChatMessage } from "./chatData";

function Chat() {
  return (
    <div>
      Chat
      <Messages messages={chatData} />
      <div className="flex">
        <input className="w-full bg-gray-100" type="text" />
        <button className="bg-gray-100 px-4 py-2 rounded-md">Submit</button>
      </div>
    </div>
  );
}

function ChatInput() {
  return <input type="text" />;
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
