import { useState } from "react";
import {
  useSendMessageMutation,
  useClearChatHistoryMutation,
} from "../api/chatApi";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const [clearHistory, { isLoading: isClearing }] =
    useClearChatHistoryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const currentMsg = message;
    setMessage("");

    try {
      await sendMessage(currentMsg).unwrap();
    } catch (err) {
      setMessage(currentMsg);
    }
  };

  return (
    <div className="border-t border-[#E5E7EB] dark:border-[#303030] bg-[#FFFFFF] dark:bg-[#1E1E1E] p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => clearHistory()}
          disabled={isClearing}
          className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#166534] bg-transparent text-[#166534] transition-all hover:bg-[#DCFCE7] disabled:opacity-50 dark:border-[#22C55E] dark:text-[#22C55E] dark:hover:bg-[#166534]/30"
          title="Clear History"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:scale-110 group-active:scale-95"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a medical question..."
          className="flex-1 h-11 rounded-full border border-[#E5E7EB] dark:border-[#303030] bg-[#F8FAFC] dark:bg-[#121212] px-5 py-2.5 text-[15px] text-[#111827] dark:text-[#F9FAFB] placeholder-[#9CA3AF] shadow-sm transition-all focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#166534] text-white shadow-sm transition-all hover:bg-[#15803D] hover:shadow-md disabled:opacity-50 disabled:hover:bg-[#166534] disabled:hover:shadow-sm"
        >
          <svg
            className="h-5 w-5 rotate-90 transition-transform group-hover:scale-110 group-active:scale-95"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
