import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#intro", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen 
          ? 'bg-blue-900/80 backdrop-blur-lg border-b border-blue-700/50 py-2' 
          : 'bg-blue-900/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-400/30 transition-all duration-300"/>
            <div className="relative flex items-center gap-2 text-2xl font-bold text-white">
              <Code2 className="w-8 h-8 text-gradient"/>
              <span className="text-gradient">Portfolio</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group px-6 py-2"
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <div className="absolute inset-0 w-full h-full bg-blue-800/50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"/>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 rounded-lg bg-blue-800/50 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-x-0 top-[72px] transition-all duration-300 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="mx-4 bg-blue-900/90 backdrop-blur-lg rounded-2xl border border-blue-700/50">
            <div className="py-4 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block mx-2 px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-blue-800/50 transition-all text-center text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}