
"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  X,
  Send,
  MessageCircle,
  Sparkles,
  LoaderCircle,
  Code2,
  FolderGit2,
  BriefcaseBusiness,
  GraduationCap,
  UserRound,
  Mail,
} from "lucide-react";

import ChatbotMessage from "./ChatbotMessage";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  conversationId?: string;
  response?: string;
  message?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const INITIAL_MESSAGE: Message = {
  id: 1,
  role: "assistant",
  content:
    "Hey! 👋 Welcome to Anas's portfolio.\n\nI'm Anas AI, your portfolio assistant. What would you like to know about Anas?",
};

const QUICK_QUESTIONS = [
  {
    label: "Technical Skills",
    question: "Tell me about Anas skills",
    Icon: Code2,
  },
  {
    label: "Projects",
    question: "Tell me about Anas projects",
    Icon: FolderGit2,
  },
  {
    label: "Experience",
    question: "Tell me about Anas experience",
    Icon: BriefcaseBusiness,
  },
  {
    label: "Education",
    question: "Tell me about Anas education",
    Icon: GraduationCap,
  },
  {
    label: "About Anas",
    question: "Tell me about Anas",
    Icon: UserRound,
  },
  {
    label: "Contact",
    question: "How can I contact Anas?",
    Icon: Mail,
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    INITIAL_MESSAGE,
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const submitMessage = async (text: string) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage || isLoading) return;

    if (!API_BASE_URL) {
      setError("API configuration is missing.");
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/Chat/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmedMessage,
          }),
        }
      );

      const data: ChatResponse = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to process your message."
        );
      }

      if (!data.response) {
        throw new Error("Invalid response received from server.");
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.response,
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong.";

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitMessage(input);
  };

  const resetChat = () => {
    if (isLoading) return;

    setMessages([INITIAL_MESSAGE]);
    setInput("");
    setError("");
  };

  return (
    <>
      {/* CHAT WINDOW */}

      {isOpen && (
        <div
          aria-label="Anas AI chatbot"
          role="dialog"
          aria-modal="false"
          className="
            fixed inset-x-3 top-3 bottom-3 z-[100]
            flex flex-col justify-start gap-0
            overflow-hidden p-0
            rounded-[28px] border border-white/10
            bg-[#0B1622] shadow-2xl shadow-black/50

            sm:inset-auto
            sm:bottom-24 sm:right-6
            sm:h-[590px] sm:max-h-[calc(100dvh-7rem)]
            sm:w-[400px]
          "
        >
          {/* HEADER */}

          <header className="
            flex shrink-0 items-center justify-between
            rounded-t-[27px]
            border-b border-white/10
            bg-[#111F2D]
            px-4 py-3
          ">
            <div className="flex min-w-0 items-center gap-3">

              {/* ANAS PROFILE PHOTO */}

              <div className="
                h-11 w-11 shrink-0 overflow-hidden
                rounded-full
                border border-cyan-400/40
                bg-slate-800
              ">
                <img
                  src="/images/IMG_6983.jpeg"
                  alt="MD Anas Alam"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* CHATBOT IDENTITY */}

              <div className="min-w-0">
                <h2 className="text-base font-bold text-white">
                  Anas AI
                </h2>

                <p className="text-xs font-medium text-slate-400">
                  C# Developer| Full Stack Developer
                </p>
              </div>
            </div>

            {/* HEADER ACTIONS */}

            <div className="flex shrink-0 items-center gap-2">

              <button
                type="button"
                onClick={resetChat}
                disabled={isLoading}
                title="Start new chat"
                aria-label="Start new chat"
                className="
                  rounded-lg p-2
                  text-slate-400
                  transition
                  hover:bg-white/10 hover:text-cyan-400
                  disabled:opacity-40
                "
              >
                <Sparkles size={18} />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chatbot"
                aria-label="Close chatbot"
                className="
                  rounded-lg p-2
                  text-slate-400
                  transition
                  hover:bg-white/10 hover:text-white
                "
              >
                <X size={20} />
              </button>

            </div>
          </header>

          {/* MESSAGES */}

          <div
            className="
              flex min-h-0 flex-1 flex-col gap-3
              overflow-y-auto overscroll-contain
              px-3 py-3
            "
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <ChatbotMessage
                key={message.id}
                role={message.role}
                message={message.content}
              />
            ))}

            {/* QUICK QUESTIONS */}

            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 pt-0.5">

                <p className="
                  text-[10px] font-semibold
                  tracking-wider text-slate-500
                ">
                  EXPLORE ANAS&apos;S PORTFOLIO
                </p>

                <div className="grid grid-cols-2 gap-2">

                  {QUICK_QUESTIONS.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => void submitMessage(item.question)}
                      className="
                        flex min-h-[46px] items-center gap-2
                        rounded-xl border border-white/10
                        bg-[#172737] px-3 py-2
                        text-left text-xs font-medium text-slate-300
                        transition duration-200
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/10
                        hover:text-cyan-300
                        active:scale-[0.98]
                      "
                    >
                      <item.Icon
                        size={16}
                        className="shrink-0 text-cyan-400"
                      />

                      <span>{item.label}</span>
                    </button>
                  ))}

                </div>
              </div>
            )}

            {/* TYPING INDICATOR */}

            {isLoading && (
              <div className="flex items-center gap-2.5">

                <div className="
                  flex h-8 w-8 shrink-0 items-center
                  justify-center rounded-full bg-cyan-400/10
                ">
                  <Bot size={17} className="text-cyan-400" />
                </div>

                <div className="
                  flex items-center gap-2
                  rounded-2xl rounded-bl-sm
                  border border-white/10
                  bg-slate-800/80 px-3 py-2
                ">
                  <LoaderCircle
                    size={15}
                    className="animate-spin text-cyan-400"
                  />

                  <span className="text-xs text-slate-400">
                    Anas AI is thinking...
                  </span>
                </div>

              </div>
            )}

            <div ref={messageEndRef} />
          </div>

          {/* ERROR MESSAGE */}

          {error && (
            <div className="
              mx-3 mb-1 shrink-0
              rounded-lg border border-red-400/20
              bg-red-400/10 px-3 py-2
            ">
              <p className="text-xs text-red-300">
                {error}
              </p>
            </div>
          )}

          {/* INPUT AREA */}

          <form
            onSubmit={handleSubmit}
            className="
              shrink-0
              rounded-b-[27px]
              border-t border-white/10
              bg-[#111F2D]
              px-3 pt-2 pb-2
            "
          >
            <div className="
              flex items-center gap-2
              rounded-xl border border-white/10
              bg-[#0B1622] px-3 py-1
              transition
              focus-within:border-cyan-400/50
            ">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything..."
                maxLength={4000}
                disabled={isLoading}
                aria-label="Type your message"
                className="
                  min-w-0 flex-1 bg-transparent
                  py-2 text-sm text-white
                  outline-none
                  placeholder:text-slate-500
                  disabled:opacity-50
                "
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="
                  flex h-9 w-9 shrink-0 items-center
                  justify-center rounded-lg
                  bg-cyan-400 text-slate-950
                  transition hover:bg-cyan-300
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <Send size={16} />
              </button>
            </div>

            <p className="mt-1 text-center text-[10px] text-slate-500">
              Powered by Anas AI
            </p>
          </form>

        </div>
      )}

     {/* FLOATING CHAT BUTTON */}

<button
  type="button"
  onClick={() => setIsOpen((previous) => !previous)}
  aria-label={isOpen ? "Close Anas AI" : "Open Anas AI"}
  aria-expanded={isOpen}
  className="
    fixed bottom-5 right-5 z-[101]
    flex h-16 w-16 items-center justify-center
    overflow-hidden rounded-full
    border-2 border-cyan-400
    bg-[#111F2D]
    shadow-lg shadow-cyan-500/25
    transition duration-300
    hover:-translate-y-1 hover:scale-105
    active:scale-95
    sm:bottom-6 sm:right-6 sm:h-[70px] sm:w-[70px]
  "
>
  {isOpen ? (
    <X size={25} className="text-cyan-400" />
  ) : (
    <img
      src="/images/IMG_6983.jpeg"
      alt="Chat with Anas AI"
      className="h-full w-full rounded-full object-cover object-center"
    />
  )}

  {!isOpen && (
    <span className="
      absolute right-0.5 top-0.5
      h-3.5 w-3.5 rounded-full
      border-2 border-[#0B1622]
      bg-emerald-400
    " />
  )}
</button>
    </>
  );
}
