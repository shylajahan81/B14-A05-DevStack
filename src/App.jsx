import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Hero Component */}
      <Hero />
      
  
    </div>
  );
}

export default App;