import React from 'react';
import { Code, Database, BarChart3, Brain, TrendingUp, PieChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 92 },
      ]
    },
    {
      title: 'Data Tools & Platforms',
      icon: <Database className="text-purple-400" size={24} />,
      skills: [
        { name: 'Tableau', level: 90 },
        { name: 'Power BI', level: 90 },
        { name: 'Excel', level: 95 },
      ]
    },
    {
      title: 'Data Processing',
      icon: <BarChart3 className="text-cyan-400" size={24} />,
      skills: [
        { name: 'Data Cleaning', level: 92 },
        { name: 'Web Scraping', level: 85 },
        { name: 'EDA', level: 88 },
        { name: 'Data Mining', level: 80 },
      ]
    },
    {
      title: 'Analysis Techniques',
      icon: <Brain className="text-green-400" size={24} />,
      skills: [
        { name: 'Correlation Analysis', level: 85 },
        { name: 'Trend Analysis', level: 88 },
        { name: 'Pattern Recognition', level: 82 },
        { name: 'Statistical Analysis', level: 80 },
      ]
    },
    {
      title: 'Data Visualization',
      icon: <PieChart className="text-pink-400" size={24} />,
      skills: [
        { name: 'Dashboard Design', level: 92 },
        { name: 'Data Storytelling', level: 88 },
        { name: 'Interactive Charts', level: 85 },
        { name: 'Report Creation', level: 90 },
      ]
    },
    {
      title: 'Business Intelligence',
      icon: <TrendingUp className="text-orange-400" size={24} />,
      skills: [
        { name: 'Business Analysis', level: 85 },
        { name: 'Market Research', level: 80 },
        { name: 'Performance Metrics', level: 87 },
        { name: 'Insights Generation', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive skill set covering the entire data analysis lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white ml-3">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;