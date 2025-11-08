import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProjectShowcase from './components/ProjectShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero3D />
        <section id="about" className="bg-gradient-to-b from-black to-[#0b0b12] py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Building immersive, interactive web experiences</h2>
            <p className="text-white/70 leading-relaxed">
              I craft full‑stack products with Next.js, React, TypeScript, and Node.js. My focus is on
              performance, delightful motion, and 3D interfaces powered by Three.js and Framer Motion.
            </p>
          </div>
        </section>
        <ProjectShowcase />
      </main>
      <Footer />
    </div>
  );
}
