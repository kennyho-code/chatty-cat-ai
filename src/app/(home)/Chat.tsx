import { twMerge } from "tailwind-merge";
import chatData, { ChatMessage } from "./chatData";

function Chat() {
  return (
    <div>
      Chat
      <Messages messages={chatData} />
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
            <span className="border-2">{message.content}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
