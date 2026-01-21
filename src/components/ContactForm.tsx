"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Create mailto link as a simple contact solution
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:bovinestrengthsystems@gmail.com?subject=${subject}&body=${body}`;

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-silver mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-silver transition-colors"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-silver mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-silver transition-colors"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-silver mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-silver transition-colors"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-silver mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-silver transition-colors resize-none"
          placeholder="Tell us about your fitness goals..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Opening email..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-500 text-center">
          Your email client should open. If not, please call us directly!
        </p>
      )}
    </form>
  );
}
