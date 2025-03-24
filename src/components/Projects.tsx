import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and AI task prioritization",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with predictive analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center bg-[#0A0F1C] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#2A2F4C] opacity-80"
           style={{ backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }}/>
      
      {/* Animated mesh grid */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'float 15s infinite linear'
      }}/>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">
            <span className="text-white">Featured</span>
            <span className="text-gradient ml-4">Projects</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto glassmorphism rounded-2xl p-6">
            Showcasing innovative solutions that combine <span className="text-gradient font-semibold">cutting-edge technology</span> with exceptional user experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative glassmorphism rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"/>
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent z-10"/>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Project Content */}
              <div className="relative p-6 z-10">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm text-blue-400 glassmorphism rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.link} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}