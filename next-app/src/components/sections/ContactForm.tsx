"use client";

import { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@/lib/icons";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card-bg border-2 border-accent-green rounded-[16px] p-6 sm:p-10"
    >
      <div className="mb-5">
        <label htmlFor="name" className="block font-semibold text-[0.9rem] mb-2">
          Namn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ditt namn"
          required
          className="w-full px-4 py-3 border border-border rounded-lg text-[0.9rem] outline-none transition-colors duration-300 focus:border-accent-green"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block font-semibold text-[0.9rem] mb-2">
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="din@epost.se"
          required
          className="w-full px-4 py-3 border border-border rounded-lg text-[0.9rem] outline-none transition-colors duration-300 focus:border-accent-green"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="block font-semibold text-[0.9rem] mb-2">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Berätta vad du behöver hjälp med..."
          required
          className="w-full px-4 py-3 border border-border rounded-lg text-[0.9rem] outline-none transition-colors duration-300 focus:border-accent-green resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent-green text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 cursor-pointer text-[0.95rem]"
      >
        Skicka Meddelande <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}
