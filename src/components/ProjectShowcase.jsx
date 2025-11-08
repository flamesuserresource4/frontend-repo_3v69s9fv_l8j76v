import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'Rubik\'s Cube Solver',
    description: 'An algorithmic solver with visualizer and heuristic optimizations.',
    link: '#',
    tags: ['TypeScript', 'Next.js', 'WebGL'],
  },
  {
    title: 'McqBattleApp',
    description: 'Realtime multiplayer quiz battles with websockets and leaderboards.',
    link: '#',
    tags: ['React', 'Node.js', 'Socket.IO'],
  },
  {
    title: 'P2P File Sharing',
    description: 'Peer-to-peer file transfer in the browser with WebRTC.',
    link: '#',
    tags: ['WebRTC', 'Vite', 'Tailwind'],
  },
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur will-change-transform"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <div style={{ transform: 'translateZ(30px)' }}>{children}</div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative py-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22, delay: idx * 0.06 }}
            >
              <TiltCard>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
