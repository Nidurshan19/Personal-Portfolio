import React from 'react';
import { Code2, Database, Globe, Palette, Cpu, Server, Layers, Paintbrush } from 'lucide-react';

const technologies = [
  {
    name: "React",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
  },
  {
    name: "HTML5",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
  },
  {
    name: "Java",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
  },
  {
    name: "MySQL",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
  },
  {
    name: "SQL",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "GitHub",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
  },
  {
    name: "Unity",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg"
  },
  {
    name: "Node.js",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center bg-[#0A0F1C] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#2A2F4C] opacity-80"
           style={{ backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }}/>
      
      {/* Animated mesh grid */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'float 15s infinite linear'
      }}/>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Cpu, Layers, Code2].map((Icon, index) => (
          <div
            key={index}
            className="absolute text-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'scale(3)',
              animation: `float ${Math.random() * 5 + 10}s infinite ease-in-out`
            }}
          >
            <Icon />
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">
            <span className="text-white">Technical</span>
            <span className="text-gradient ml-4">Skills</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto glassmorphism rounded-2xl p-6">
            Proficient in a wide range of <span className="text-gradient font-semibold">modern technologies</span> for building robust applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative glassmorphism rounded-2xl p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"/>
              
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl transform group-hover:scale-125 transition-transform"/>
                <img
                  src={tech.imageUrl}
                  alt={tech.name}
                  className="w-16 h-16 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-semibold text-white text-center relative z-10">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}