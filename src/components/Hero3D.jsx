import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#0b0b12] via-[#0a0716] to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
          Aneesh Singh Rajoriya
        </h1>
        <p className="mt-3 text-lg md:text-xl text-white/80">Software Developer • Next.js • React • TypeScript • Node.js</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          <a href="#projects" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-4">
            <div className="text-left">
              <p className="text-sm uppercase tracking-wide text-white/60">Explore</p>
              <p className="text-base font-medium">Dive into my work</p>
            </div>
          </a>
          <a href="#about" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-4">
            <div className="text-left">
              <p className="text-sm uppercase tracking-wide text-white/60">About</p>
              <p className="text-base font-medium">Who I am</p>
            </div>
          </a>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-4">
            <div className="text-left">
              <p className="text-sm uppercase tracking-wide text-white/60">Contact</p>
              <p className="text-base font-medium">Get in touch</p>
            </div>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </section>
  );
}
