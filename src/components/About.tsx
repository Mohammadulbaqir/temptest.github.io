import React from 'react';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="text-blue-400" size={24} />, number: '5+', label: 'Projects Completed' },
    { icon: <Users className="text-purple-400" size={24} />, number: '60K+', label: 'Records Analyzed' },
    { icon: <TrendingUp className="text-cyan-400" size={24} />, number: '7', label: 'Tools Mastered' },
    { icon: <Target className="text-green-400" size={24} />, number: '90%', label: 'Data Accuracy' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about turning data into meaningful stories that drive business decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  I'm a data enthusiast skilled in transforming raw data into actionable insights using tools like SQL, Python, Power BI, Tableau, and Excel. My focus lies in uncovering patterns, solving real-world business problems, and communicating findings through compelling visuals.
                </p>
                <p>
                  Through hands-on projects, I've analyzed thousands of records across various domains - from layoff trends in the tech industry to Airbnb pricing patterns in NYC. Each project has strengthened my ability to extract meaningful insights and present them in ways that drive decision-making.
                </p>
                <p>
                  I'm passionate about continuous learning and staying updated with the latest tools and techniques in data analysis. My goal is to help organizations unlock the power of their data through clear, actionable insights.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['SQL', 'Python', 'Tableau', 'Power BI', 'Excel', 'Data Cleaning', 'Data Visualization'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-64 h-64 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-8xl font-bold text-white shadow-2xl">
                  MR
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;