
import { Bot, User } from "lucide-react";

interface ChatbotMessageProps {
  message: string;
  role: "user" | "assistant";
}

export default function ChatbotMessage({
  message,
  role,
}: ChatbotMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full gap-2.5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
          <Bot size={17} className="text-cyan-400" />
        </div>
      )}

      <div
        className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3 py-2 text-sm leading-5 ${
          isUser
            ? "rounded-br-sm bg-cyan-500 text-slate-950"
            : "rounded-bl-sm border border-white/10 bg-slate-800/80 text-slate-200"
        }`}
      >
        {message}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <User size={16} className="text-slate-300" />
        </div>
      )}
    </div>
  );
}
