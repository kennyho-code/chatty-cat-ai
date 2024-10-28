"use client";

import Chat from "@/components/Chat/Chat";
import { Modal } from "@/components/Modal";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="flex justify-center h-screen p-4">
      <div className="max-w-[710px] flex flex-col gap-24">
        <Chat />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <OpenAiModalPanel />
      </Modal>
    </div>
  );
}

function OpenAiModalPanel() {
  return (
    <div>
      <div className="text-center">
        <h1>Enter Your OpenAI API Key</h1>
        <p>
          You need an OpenAI API Key to use this app. Your API Key will be
          stored locally on your browser.
        </p>
        <input
          type="text"
          className="bg-gray-50 border-2 rounded-md w-full p-4"
          placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
        <Link target="_blank" href={"https://platform.openai.com/api-keys"}>
          <span> Go to Open AI to get your API key </span>
        </Link>
        <div></div>
      </div>
    </div>
  );
}
