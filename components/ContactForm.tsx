"use client";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded-lg"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded-lg"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-3 border rounded-lg"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button type="button" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
        Send Message
      </button>
    </form>
  );
}
