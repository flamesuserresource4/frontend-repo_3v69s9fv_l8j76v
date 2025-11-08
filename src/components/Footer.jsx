import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 sm:grid-cols-2 items-center">
        <div>
          <h3 className="text-lg font-semibold">Lets build something unreal</h3>
          <p className="text-white/70 mt-1">Open to collaborations, roles, and wild ideas.</p>
        </div>
        <div className="sm:justify-self-end flex gap-3">
          <a
            href="mailto:aneesh@example.com"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 transition-colors"
          >
            Email Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-fuchsia-500/20 hover:bg-fuchsia-500/30 px-4 py-2 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-white/50 pb-6">© {new Date().getFullYear()} Aneesh Singh Rajoriya</div>
    </footer>
  );
}
