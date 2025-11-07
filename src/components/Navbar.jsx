import React from 'react';
import { Rocket, User, FolderGit2, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Rocket className="h-5 w-5 text-teal-300" />
          <span className="font-semibold">Toni Aditya</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-teal-300"
        >
          <Mail className="h-4 w-4" /> Get in touch
        </a>
      </div>
    </header>
  );
}
