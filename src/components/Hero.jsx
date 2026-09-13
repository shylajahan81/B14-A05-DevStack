import React from 'react';

function Hero() {
  return (
    <section className="flex-grow flex items-center justify-center px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Content: Title, Description & Action Buttons */}
        <div className="text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition">
              Explore Technologies
            </button>
            <button className="bg-slate-100 text-slate-700 border border-slate-300 font-medium px-6 py-3 rounded-xl hover:bg-slate-200 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content: clean  Illustration */}
        <div className="flex justify-center">
          <img 
            src="/banner-stack.png"
            alt="Development Stack Illustration" 
            className="w-full max-w-md md:max-w-lg h-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;