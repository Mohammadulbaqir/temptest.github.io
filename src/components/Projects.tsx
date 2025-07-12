import React from 'react';
import { ExternalLink, BarChart3, TrendingUp, Database, PieChart, Target, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Layoff Trends Analysis',
      description: 'Cleaned 5,500+ layoff records, grouped by industry and region using SQL. Found tech layoffs peaked in early 2023.',
      tech: ['SQL', 'Data Cleaning', 'Trend Analysis'],
      icon: <BarChart3 className="text-blue-400" size={32} />,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Oct 2024',
      metrics: ['5,500+ records cleaned', 'Industry-wise grouping', 'Peak trends identified'],
      link: 'https://github.com/Baqir-R/Portfolio-Projects/blob/main/Data_Cleaning.sql'
    },
    {
      title: 'Airbnb Data Dashboard',
      description: 'Visualized 48,000+ listings to identify pricing trends and availability gaps in NYC.',
      tech: ['Tableau', 'Data Visualization', 'Dashboard Design'],
      icon: <TrendingUp className="text-purple-400" size={32} />,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 2024',
      metrics: ['48,000+ listings analyzed', 'Pricing trends mapped', 'Availability gaps found'],
      link: 'https://public.tableau.com/app/profile/mohammadulbaqir.rampurawala/viz/AirbnbDataVisualizationProject/Dashboard1'
    },
    {
      title: 'Data Science Survey Dashboard',
      description: 'Analyzed 3,000+ responses from data professionals to explore salary bands, roles, and language preferences.',
      tech: ['Power BI', 'Survey Analysis', 'Statistical Analysis'],
      icon: <Database className="text-cyan-400" size={32} />,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Dec 2024',
      metrics: ['3,000+ responses analyzed', 'Salary bands explored', 'Role preferences mapped'],
      link: 'https://github.com/Baqir-R/Portfolio-Projects/blob/main/Data%20Professional%20Survey.jpg'
    },
    {
      title: 'Web Scraping & Product Analysis',
      description: 'Scraped 300+ Amazon listings to compare prices, ratings, and delivery times using BeautifulSoup and pandas.',
      tech: ['Python', 'BeautifulSoup', 'Pandas', 'Web Scraping'],
      icon: <PieChart className="text-green-400" size={32} />,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Feb 2025',
      metrics: ['300+ listings scraped', 'Price comparison done', 'Rating analysis completed'],
      link: 'https://github.com/Baqir-R/Portfolio-Projects/blob/main/Amazon%20Web%20Scraping.ipynb'
    },
    {
      title: 'Movie Dataset Correlation & EDA',
      description: 'Found budget vs. revenue correlations for 1,000+ Hollywood movies. Discovered budget impact on earnings, not ratings.',
      tech: ['Python', 'EDA', 'Correlation Analysis', 'Data Visualization'],
      icon: <Activity className="text-pink-400" size={32} />,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Mar 2025',
      metrics: ['1,000+ movies analyzed', 'Budget-revenue correlation', 'Rating patterns found'],
      link: 'https://github.com/Baqir-R/Portfolio-Projects/blob/main/Movie.ipynb'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world data analysis projects that delivered measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-slate-900/80 rounded-full backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Metrics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Results:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Want to see more projects or discuss a potential collaboration?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;