import React from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-fuchsia-400" aria-hidden />
          <span className="font-semibold tracking-tight text-white">Aneesh • Portfolio</span>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="#projects"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            <Github className="h-4 w-4" aria-hidden /> GitHub
          </a>
          <a
            href="mailto:aneesh@example.com"
            className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
