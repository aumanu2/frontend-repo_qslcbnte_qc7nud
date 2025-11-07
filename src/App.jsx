import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Toni Aditya — Crafted with code, curiosity, and coffee.
      </footer>
    </div>
  );
}

export default App;
