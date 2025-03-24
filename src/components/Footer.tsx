import React, { useState } from 'react';
import { Code2, Heart, Coffee, ChevronRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
  };

  return (
    <footer className="relative bg-[#0A0F1C] overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#2A2F4C] opacity-80"
           style={{ backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }}/>
      
      {/* Animated mesh grid */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'float 15s infinite linear'
      }}/>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `float ${10 + i * 2}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-500"/>
                <Code2 className="w-10 h-10 text-gradient relative z-10"/>
              </div>
              <span className="text-3xl font-bold text-gradient">Portfolio</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pushing the boundaries of web development with innovative solutions and cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:contact@example.com' }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group relative p-2 glassmorphism rounded-xl hover:scale-110 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting'].map((service) => (
                <li key={service} className="flex items-center gap-2 text-gray-300">
                  <ExternalLink className="w-4 h-4 text-blue-400"/>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 focus-within:opacity-100 transition-opacity -z-10"/>
              </div>
              <button
                type="submit"
                className="group relative w-full py-3 glassmorphism rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"/>
                <span className="relative text-white group-hover:text-blue-400 transition-colors">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-500 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}