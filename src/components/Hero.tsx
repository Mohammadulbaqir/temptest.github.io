import React, { useState, useEffect } from 'react';
import { ChevronDown, BarChart3, TrendingUp, Database } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Data Analyst', 'Data Enthusiast', 'Business Intelligence Specialist'];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-8 opacity-0 animate-fade-in">
            <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-float">
              <BarChart3 size={32} className="text-blue-400" />
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float delay-300">
              <TrendingUp size={32} className="text-purple-400" />
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-float delay-500">
              <Database size={32} className="text-cyan-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Mohammadulbaqir Rampurawala
            </span>
          </h1>

          <div className="text-2xl md:text-3xl mb-8 h-12 opacity-0 animate-fade-in-up delay-300">
            <span className="text-gray-300">I'm a </span>
            <span className="text-blue-400 font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500">
            I'm a data enthusiast skilled in transforming raw data into actionable insights using tools like SQL, Python, Power BI, Tableau, and Excel. My focus lies in uncovering patterns, solving real-world business problems, and communicating findings through compelling visuals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-700">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl z-10 relative"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300 z-10 relative"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce z-0"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;