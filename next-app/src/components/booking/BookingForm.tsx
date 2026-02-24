"use client";

import { useState } from "react";

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
  loading: boolean;
}

export default function BookingForm({ onSubmit, loading }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone, description });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-center">Dina uppgifter</h2>
      <p className="text-gray-text text-center mb-8">
        Fyll i dina kontaktuppgifter
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Namn <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ditt namn"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-green"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            E-post <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="din@email.se"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-green"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Telefon</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="070-123 45 67"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-green"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Beskriv kort vad du behöver hjälp med
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="T.ex. 'Vill veta hur AI kan hjälpa min restaurang...'"
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-green resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-green text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Bokar..." : "Bekräfta bokning"}
        </button>
      </form>
    </div>
  );
}
