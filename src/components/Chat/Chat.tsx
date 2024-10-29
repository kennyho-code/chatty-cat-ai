import { twMerge } from "tailwind-merge";
import { ChatMessage } from "./chatData";
import { useState } from "react";
import DefaultChat from "./DefaultChat";
import { useOpenAI } from "@/utils/useOpenAi";

import { v4 as uuidv4 } from "uuid";

function Chat() {
  const [promptType, setPromptType] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const openai = useOpenAI();

  function handleSetPromptType(promptType: string) {
    setPromptType(promptType);
  }

  async function handleSubmit(inputValue: string) {
    const newInputChatMessage: ChatMessage = {
      id: uuidv4(),
      role: "user",
      content: inputValue,
    };
    const newChatMessages: ChatMessage[] = [
      ...chatMessages,
      newInputChatMessage,
    ];
    setChatMessages(newChatMessages);
    const response = await openai.createChatCompletion(newChatMessages);
    const responseMessage = response.choices.map((choice) => ({
      content: choice.message.content,
      role: choice.message.role,
      id: response.id,
    }))[0] as ChatMessage;

    setChatMessages([...newChatMessages, responseMessage]);
    console.log("createChatCompletion response: ", response);
  }

  return (
    <div className="h-screen w-full max-w-[598px] flex flex-col">
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
          <Messages messages={chatMessages} />
        )}
      </div>
      <ChatInput onSubmit={handleSubmit} />
    </div>
  );
}

interface ChatInputProps {
  onSubmit: (inputVal: string) => void;
}
function ChatInput({ onSubmit }: ChatInputProps) {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="flex gap-4">
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.currentTarget.value);
        }}
        className="w-full bg-gray-100 py-2 px-4 border-2 rounded-md"
        type="text"
        placeholder="Ask me anything..."
      />
      <button
        onClick={() => {
          onSubmit(inputVal);
        }}
        className="bg-gray-100 px-4 py-2 rounded-md border-2 rounded-m"
      >
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
