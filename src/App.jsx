import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <Hero />
      <Technology />
    </div>
  );
}

export default App;