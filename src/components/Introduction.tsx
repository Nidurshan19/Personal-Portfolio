import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code2, Globe, Cpu } from 'lucide-react';

export default function Introduction() {
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center bg-[#0A0F1C]">
      {/* Animated gradient background */}
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
        {[Code2, Globe, Cpu].map((Icon, index) => (
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

      <div className="relative max-w-6xl mx-auto px-4 py-16 text-center z-10">
        {/* Profile section */}
        <div className="relative mb-12 animate-[float_6s_ease-in-out_infinite]">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[spin_10s_linear_infinite] blur-xl opacity-50"/>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover border-2 border-white/10 glassmorphism"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"/>
              <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping"/>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <p className="text-blue-400 text-xl font-light tracking-wider">FULL STACK DEVELOPER</p>
            <h1 className="text-8xl font-bold tracking-tighter">
              <span className="text-white">John</span>
              <span className="text-gradient ml-4">Doe</span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed glassmorphism rounded-2xl p-6">
            Pioneering the future of web development with <span className="text-gradient font-semibold">AI-enhanced</span> solutions. 
            Crafting <span className="text-gradient font-semibold">immersive digital experiences</span> that push the boundaries 
            of modern technology.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
            { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' }
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="group relative glassmorphism rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"/>
              <div className="relative flex items-center gap-3">
                <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-gray-300 group-hover:text-white">{label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToSkills}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 glassmorphism rounded-full p-4 text-blue-400 hover:text-white transition-colors group"
        >
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  );
}