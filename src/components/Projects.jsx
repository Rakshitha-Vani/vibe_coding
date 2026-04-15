import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Finance Tracker',
      date: 'Sep 2025 – Oct 2025',
      description:
        'Developed a Personal Finance Tracker application to record and manage daily income and expenses. The system helps users monitor financial transactions, maintain financial records, and improve budgeting habits.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Database'],
      highlight: true,
      achievement: '🏆 Won 1st Prize – Poster Presentation',
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-slate-800/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Projects</span>
      </h2>

      <div className="grid gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`glass-card rounded-2xl p-8 transition-all hover:-translate-y-2 ${
              project.highlight ? 'border border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.08)]' : ''
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
              <div className="flex items-center gap-2 text-slate-400 text-sm whitespace-nowrap bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                <Calendar size={14} />
                {project.date}
              </div>
            </div>

            {project.achievement && (
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium">
                {project.achievement}
              </div>
            )}

            <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
