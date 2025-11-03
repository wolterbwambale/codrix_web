"use client";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <form className="space-y-6 max-w-md mx-auto">

      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-200">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="w-full p-4 rounded-lg border border-gray-600 bg-[#0c1627] text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-200">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 rounded-lg border border-gray-600 bg-[#0c1627] text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-200">
          Your Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Write your message here..."
          className="w-full p-4 rounded-lg border border-gray-600 bg-[#0c1627] text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition resize-none"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button
        type="button"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
      >
        Send Message
      </button>
    </form>
  );
}
