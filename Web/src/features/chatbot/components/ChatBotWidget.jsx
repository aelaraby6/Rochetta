import { useState, useCallback } from "react";
import ChatWindow from "./ChatWindow";

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-(--color-primary-700) text-white shadow-[0_4px_14px_0_rgba(22,101,52,0.39)] transition-all duration-300 hover:bg-(--color-primary-800) hover:scale-105 active:scale-95"
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        )}
      </button>

      {isOpen && <ChatWindow onClose={toggleChat} />}
    </>
  );
};

export default ChatBotWidget;
