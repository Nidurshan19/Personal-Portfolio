import React from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <Navigation />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;