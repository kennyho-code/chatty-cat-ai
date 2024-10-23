"use client";

import { useState } from "react";
import Chat from "./Chat";

export default function Home() {
  const [promptType, setPromptType] = useState<string | null>("email");

  function handleSetPromptType(promptType: string) {
    setPromptType(promptType);
  }

  return (
    <div className="flex justify-center h-screen lg:mt-[150px] p-4">
      <div className="max-w-[710px] flex flex-col gap-24">
        {promptType === null ? (
          <DefaultChat setPromptType={handleSetPromptType} />
        ) : (
          <Chat />
        )}
      </div>
    </div>
  );
}

function DefaultChat({
  setPromptType,
}: {
  setPromptType: (promptType: string) => void;
}) {
  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-600">
        <span className="text-black">Hey, I’m Chat AI.</span> Your AI assistant
        and companion for any occasion.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {promptCards.map((card) => (
          <PromptCard
            onClick={(e) => {
              e.preventDefault();
              setPromptType(card.promptType);
            }}
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
}

const promptCards = [
  {
    icon: "✉️",
    promptType: "email",
    title: "Draft Email",
    description: "Generate email for any occasion you need.",
  },
  {
    icon: "✏️",
    promptType: "essay",
    title: "Write an Essay",
    description: "Generate essay for any occasion you need.",
  },
  {
    promptType: "planning",
    icon: "📜",
    title: "Planning",
    description: "Plan for any occasion, from holiday to family.",
  },
  {
    promptType: "assistant",
    icon: "🤖",
    title: "Assistant",
    description: "Become your personal assistant. Helping you.",
  },
];

interface PromptCardProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: string;
  title: string;
  description: string;
}

function PromptCard({ icon, title, description, onClick }: PromptCardProps) {
  return (
    <button
      className="min-w-[166px] min-h-[156px] border-2 rounded-md p-4 m-4 cursor-pointer"
      onClick={onClick}
    >
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </button>
  );
}
