import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
      <p className="text-blue-400 font-medium tracking-wide mb-4">Hello, I'm</p>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
        Rakshitha Vani D T
      </h1>
      <h2 className="text-2xl md:text-3xl text-slate-400 font-medium mb-8">
        Information Science Student
      </h2>
      <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-10">
        Motivated and detail-oriented Information Science student with a strong academic record.
        Possess basic knowledge of Java, SQL, and HTML, along with problem-solving skills.
        Seeking an opportunity to start my career in the IT/Cyber Security field and contribute
        to organizational growth while continuously learning.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:glow-effect transition-all transform hover:-translate-y-1">
          View Projects
        </a>
        <a href="#footer" className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 font-semibold transition-all">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
