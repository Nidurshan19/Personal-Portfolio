import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-[#0A0F1C] overflow-hidden">
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
            <span className="text-white">Let's</span>
            <span className="text-gradient ml-4">Connect</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto glassmorphism rounded-2xl p-6">
            Ready to discuss your next project or explore collaboration opportunities? <span className="text-gradient font-semibold">Let's make it happen</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              {[
                { icon: Mail, label: 'contact@example.com', href: 'mailto:contact@example.com' },
                { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, label: 'San Francisco, CA', href: '#' },
                { icon: Linkedin, label: 'LinkedIn Profile', href: 'https://linkedin.com' },
                { icon: Github, label: 'GitHub Profile', href: 'https://github.com' }
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors py-4 group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-lg transform group-hover:scale-125 transition-transform"/>
                    <Icon className="w-6 h-6 text-blue-400 relative z-10" />
                  </div>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glassmorphism rounded-2xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="group relative w-full py-4 rounded-xl glassmorphism hover:bg-white/10 transition-colors"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"/>
              <div className="relative flex items-center justify-center gap-2 text-white">
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}