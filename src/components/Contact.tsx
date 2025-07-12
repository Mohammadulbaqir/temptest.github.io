import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: 'Email',
      content: 'mohammadulbaqir19@gmail.com',
      href: 'mailto:mohammadulbaqir19@gmail.com'
    },
    {
      icon: <Phone className="text-purple-400" size={24} />,
      title: 'Phone',
      content: '(+91) 9309985542',
      href: 'tel:+919309985542'
    },
    {
      icon: <MapPin className="text-cyan-400" size={24} />,
      title: 'Location',
      content: 'Available Remotely',
      href: ''
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/mohammadulbaqir-rampurawala/', color: 'text-blue-400 hover:text-blue-300' },
    { icon: <Github size={24} />, href: 'https://github.com/Baqir-R', color: 'text-gray-400 hover:text-white' },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to turn your data into actionable insights? Let's discuss your next project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {contactInfo.map((info, index) => (
                    info.href ? (
                      <a
                        key={index}
                        href={info.href}
                        className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <p className="text-gray-300">{info.content}</p>
                        </div>
                      </a>
                    ) : (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm text-center"
                      >
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <p className="text-gray-300">{info.content}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm text-center">
              <h3 className="text-xl font-bold text-white mb-3">Availability</h3>
              <p className="text-gray-300 mb-4">
                I'm currently available for new projects and collaborations. 
                Let's discuss how I can help you unlock the power of your data.
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;