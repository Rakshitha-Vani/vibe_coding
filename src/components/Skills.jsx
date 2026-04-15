import React from 'react';
import { Code2, Users, Globe2 } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }) => (
  <div className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-2 hover:border-slate-700 group">
    <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:text-purple-400 transition-all">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1.5 bg-slate-800 text-sm rounded-md border border-slate-700 text-slate-300">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100">My <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Skills</span></h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <SkillCard 
          icon={Code2} 
          title="Tech Skills" 
          skills={['Java', 'SQL', 'HTML', 'CyberSecurity Fundamentals', 'Microsoft Office']} 
        />
        <SkillCard 
          icon={Users} 
          title="Soft Skills" 
          skills={['Teamwork', 'Time Management', 'Effective Communication', 'Critical Thinking']} 
        />
        <SkillCard 
          icon={Globe2} 
          title="Languages & Interests" 
          skills={['English', 'Kannada', 'Dancing & Singing', "Solving Rubik's Cube", 'Exploring new ideas']} 
        />
      </div>
    </section>
  );
};

export default Skills;
