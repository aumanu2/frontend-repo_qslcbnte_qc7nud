import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'AI Lesson Builder',
    description:
      'Generate interactive lesson plans and quizzes using LLMs. Perfect for educators who want to save time and keep students engaged.',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
  },
  {
    title: 'Explain It Visually',
    description:
      'Turn complex topics into clean, interactive visuals for YouTube and courses. Script -> scene -> voiceover in one place.',
    tags: ['React', 'Framer Motion', 'Canvas'],
  },
  {
    title: 'Course Analytics',
    description:
      'Track learner progress, content performance, and AI‑generated insights for improving your curriculum.',
    tags: ['FastAPI', 'MongoDB', 'Charts'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-teal-300" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Selected Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <Play className="h-4 w-4 text-teal-300 opacity-0 transition group-hover:opacity-100" />
              </div>
              <p className="mb-4 text-sm text-slate-200/90">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
