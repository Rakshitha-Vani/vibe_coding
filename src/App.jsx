import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[150px] pointer-events-none -z-10"></div>
      
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-8 xl:px-0">
        <Hero />
        <Skills />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
