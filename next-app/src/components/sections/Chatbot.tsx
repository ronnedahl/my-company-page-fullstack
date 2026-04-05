"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@/lib/icons";

interface Message {
  role: "bot" | "user";
  text: string;
}

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hej! Välkommen till Webbkraft. Hur kan jag hjälpa dig idag?",
    },
    {
      role: "bot",
      text: "Du kan fråga om våra tjänster, priser eller boka en kostnadsfri rådgivning.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

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
          text: "Ursäkta, jag kunde inte nå servern just nu. Försök igen om en stund eller kontakta oss på info@webbkraft.net.",
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
      {/* Desktop backdrop blur */}
      <div
        onClick={() => setIsOpen(false)}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className={`fixed inset-0 z-[998] backdrop-blur-sm hidden md:block transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Stäng chattbot" : "Öppna chattbot"}
        className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] w-15 h-15 rounded-full overflow-hidden cursor-pointer shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 border-2 border-accent-green ${
          isScrolling && !isOpen ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        <Image
          src="/images/peter-ai-chatbot-karlstad.webp"
          alt="Peter – AI och chatbot-utvecklare i Karlstad"
          width={60}
          height={60}
          className="object-cover w-full h-full"
        />
      </button>

      {/* Mobile: fullscreen chat */}
      <div
        className={`fixed inset-0 z-[9999] bg-card-bg flex flex-col md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-accent-green text-white px-5 py-4 flex justify-between items-center font-semibold text-[0.95rem]">
          <span>Hej! Hur kan vi hjälpa dig?</span>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-transparent border-none text-white text-2xl cursor-pointer p-2"
            aria-label="Stäng chatt"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="flex-1 p-5 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`px-4 py-2.5 rounded-xl mb-2.5 text-[0.9rem] leading-relaxed ${
                msg.role === "bot"
                  ? "bg-light-green text-text"
                  : "bg-accent-green text-white ml-8"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="bg-light-green text-text px-4 py-2.5 rounded-xl mb-2.5 text-[0.9rem] leading-relaxed">
              <span className="inline-flex gap-1">
                <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-5 py-4 border-t border-border pb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Skriv ett meddelande..."
              className="flex-1 px-4 py-3 border border-border bg-bg text-text rounded-lg text-[0.9rem] outline-none focus:border-accent-green"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="px-5 py-3 bg-accent-green text-white rounded-lg text-[0.9rem] font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              Skicka
            </button>
          </div>
        </div>
      </div>

      {/* Desktop: widget chat */}
      <div
        className={`fixed bottom-[100px] right-8 z-[999] w-[350px] bg-card-bg rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 hidden md:block ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-accent-green text-white px-5 py-4 flex justify-between items-center font-semibold text-[0.95rem]">
          <span>Hej! Hur kan vi hjälpa dig?</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Stäng chatt"
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

        <div className="px-5 py-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Skriv ett meddelande..."
              className="flex-1 px-4 py-2.5 border border-border bg-bg text-text rounded-lg text-[0.85rem] outline-none focus:border-accent-green"
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
