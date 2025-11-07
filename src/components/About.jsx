import React from 'react';
import { GraduationCap, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full bg-slate-950/90 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">About Toni</h2>
          <p className="text-slate-200/90">
            I craft content and products that help people learn faster. My work blends storytelling,
            design, and full‑stack development to make AI approachable and actionable for everyone —
            from students to teams.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-teal-300">
              <Cpu className="h-4 w-4" /> <span className="text-sm font-medium">What I Do</span>
            </div>
            <ul className="list-inside list-disc text-sm text-slate-200/90">
              <li>AI‑powered content pipelines (research, scripts, visuals)</li>
              <li>Interactive learning tools and demos</li>
              <li>End‑to‑end web apps for courses and communities</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-teal-300">
              <GraduationCap className="h-4 w-4" /> <span className="text-sm font-medium">Teaching Style</span>
            </div>
            <p className="text-sm text-slate-200/90">
              Clear, visual, and practical. I turn advanced topics into step‑by‑step experiences with
              code‑along examples and real projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
