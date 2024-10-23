import { twMerge } from "tailwind-merge";

interface SidebarProps {
  hide: boolean;
  onClose: () => void;
}

function Sidebar({ hide, onClose }: SidebarProps) {
  return (
    <aside
      className={twMerge(
        "fixed left-0 top-0 bg-purple-50 h-screen w-full",
        "transition-transform duration-300 ease-in-out",
        hide && "-translate-x-full",
      )}
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <span>🐱 Chatty Cat AI</span> <button onClick={onClose}>X</button>
        </div>
        <div>
          <button>⚡ Ongoing Prompt</button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
