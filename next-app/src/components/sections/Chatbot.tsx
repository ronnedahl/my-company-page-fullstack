"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faXmark } from "@/lib/icons";

interface Message {
  role: "bot" | "user";
  text: string;
}

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:8000";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hej! Välkommen till Växtkraft Webb. Hur kan jag hjälpa dig idag?",
    },
    {
      role: "bot",
      text: "Du kan fråga om våra tjänster, priser eller boka en kostnadsfri rådgivning.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Ursäkta, jag kunde inte nå servern just nu. Försök igen om en stund eller kontakta oss på hej@vaxtkraftwebb.se.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] w-15 h-15 bg-accent-green text-white rounded-full flex items-center justify-center text-2xl cursor-pointer shadow-[0_5px_20px_rgba(6,78,59,0.3)] transition-transform duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={faRobot} />
      </div>

      <div
        className={`fixed bottom-[90px] right-5 md:bottom-[100px] md:right-8 z-[999] w-[calc(100vw-40px)] md:w-[350px] bg-white rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-accent-green text-white px-5 py-4 flex justify-between items-center font-semibold text-[0.95rem]">
          <span>Hej! Hur kan vi hjälpa dig?</span>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-transparent border-none text-white text-lg cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="p-5 max-h-[250px] overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`px-4 py-2.5 rounded-xl mb-2.5 text-[0.85rem] leading-relaxed ${
                msg.role === "bot"
                  ? "bg-light-green text-text"
                  : "bg-accent-green text-white ml-8"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="bg-light-green text-text px-4 py-2.5 rounded-xl mb-2.5 text-[0.85rem] leading-relaxed">
              <span className="inline-flex gap-1">
                <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-5 py-4 border-t border-[#eee]">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Skriv ett meddelande..."
              className="flex-1 px-4 py-2.5 border border-[#ddd] rounded-lg text-[0.85rem] outline-none"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="px-4 py-2.5 bg-accent-green text-white rounded-lg text-[0.85rem] font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              Skicka
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
