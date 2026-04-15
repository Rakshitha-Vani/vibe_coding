import React from 'react';
import { Trophy, GraduationCap, BookOpen } from 'lucide-react';

const TimelineItem = ({ year, degree, institute, score, isLast }) => (
  <div className="relative flex gap-6">
    {/* Line */}
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.6)] flex-shrink-0 mt-1"></div>
      {!isLast && <div className="flex-1 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent mt-1"></div>}
    </div>
    {/* Content */}
    <div className="pb-10">
      <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">{year}</span>
      <h4 className="text-lg font-bold text-slate-100 mt-1">{degree}</h4>
      <p className="text-slate-400 text-sm mt-0.5">{institute}</p>
      <div className="mt-2 inline-block px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200">
        {score}
      </div>
    </div>
  </div>
);

const Education = () => {
  const education = [
    {
      year: '2023 - 2027',
      degree: 'BE [Information Science & Engineering]',
      institute: 'Sambhram Institute of Technology | Bengaluru',
      score: 'CGPA: 9.086 (till 5th sem)',
      isLast: false,
    },
    {
      year: '2023',
      degree: 'Pre-University',
      institute: 'Vidya Soudha PU College | Bengaluru',
      score: 'Percentage: 92.33%',
      isLast: false,
    },
    {
      year: '2021',
      degree: '10th Grade',
      institute: 'Sri Jnanavardhaka English School | Bengaluru',
      score: 'Percentage: 93.44%',
      isLast: true,
    },
  ];

  const achievements = [
    'Awarded Topper Certificate for achieving the highest academic performance.',
    'Won first prize in poster presentation competition at our college for the personal finance tracker project.',
  ];

  const courses = [
    { title: 'Skill Development on Java and SQL', org: 'Vtricks' },
    { title: 'Placement Training', org: 'Genesis Training' },
    { title: 'Enterprise Design Thinking Practitioner', org: 'IBM SkillsBuild (Earned Credly Badge)' },
  ];

  return (
    <section id="education" className="py-20 border-t border-slate-800/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Education & <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Achievements</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Timeline */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-6 text-slate-200">
            <GraduationCap size={20} className="text-blue-400" />
            Education Timeline
          </h3>
          {education.map((item) => (
            <TimelineItem key={item.year} {...item} />
          ))}
        </div>

        {/* Right - Achievements & Training */}
        <div className="flex flex-col gap-6">
          {/* Achievements */}
          <div className="glass-card rounded-2xl p-6 border border-purple-500/20">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-slate-200 pb-3 border-b border-slate-700">
              <Trophy size={20} className="text-yellow-400" />
              Key Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-yellow-500 mt-1 flex-shrink-0">★</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Training & Courses */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-slate-200 pb-3 border-b border-slate-700">
              <BookOpen size={20} className="text-blue-400" />
              Training & Courses
            </h3>
            <ul className="space-y-4">
              {courses.map((course, i) => (
                <li key={i} className="border-l-2 border-blue-500/50 pl-4">
                  <p className="text-slate-200 font-medium text-sm">{course.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{course.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
