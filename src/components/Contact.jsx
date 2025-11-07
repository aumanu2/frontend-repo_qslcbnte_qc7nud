import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-6 flex items-center gap-3">
          <Mail className="h-5 w-5 text-teal-300" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none backdrop-blur focus:border-teal-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none backdrop-blur focus:border-teal-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none backdrop-blur focus:border-teal-400"
            required
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-teal-300"
          >
            Send message
            <Send className="h-4 w-4" />
          </button>
          {status && <p className="text-sm text-teal-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
