"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <header className="flex justify-between p-4 bg-red-50">
        <span>🐱 Chatty Cat AI </span>
        <button
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          🍔
        </button>
      </header>
      <Sidebar
        onClose={() => {
          setShowSidebar(false);
        }}
        hide={!showSidebar}
      />
    </div>
  );
}

export default Header;
