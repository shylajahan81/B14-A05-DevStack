import React, { useState, useEffect } from 'react';

function Technology() {
  const [technologies, setTechnologies] = useState([]);
  const [myStack, setMyStack] = useState([]);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error('Error loading technologies:', err));
  }, []);

  // Add to Stack Handler
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = myStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      alert('This technology is already added to your stack!');
      return;
    }
    setMyStack([...myStack, tech]);
  };

  // Remove Single Item Handler
  const handleRemoveItem = (id) => {
    setMyStack(myStack.filter((item) => item.id !== id));
  };

  // Remove All Handler
  const handleRemoveAll = () => {
    setMyStack([]);
  };

  return (
    <section className="px-6 md:px-16 py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Explore the <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout: Grid + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left: Technologies Grid (3 Columns) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isAdded = myStack.some((item) => item.id === tech.id);

              return (
                <div 
                  key={tech.id} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        {tech.badge}
                      </span>
                    </div>

                    {/* Name & Description */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                    <p className="text-slate-600 text-sm mb-6">{tech.description}</p>
                  </div>

                  <div>
                    {/* Category chip, Difficulty & Rating */}
                    <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mb-4">
                      <span className="font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">{tech.category}</span>
                      <span className="bg-slate-50 px-2 py-1 rounded">{tech.difficulty}</span>
                      <span className="flex items-center text-amber-500 font-semibold">
                        ★ {tech.rating}
                      </span>
                    </div>

                    {/* Add to Stack Button */}
                    <button 
                      onClick={() => handleAddToStack(tech)}
                      disabled={isAdded}
                      className={`w-full font-medium py-2.5 rounded-xl transition text-sm ${
                        isAdded 
                          ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed' 
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Your Stack Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Your Stack</h3>
              <p className="text-xs text-slate-500 mb-6">
                {myStack.length} Technology Selected
              </p>

              {myStack.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-sm border border-dashed border-slate-200 rounded-xl">
                  No technologies selected yet. <br />
                  <span className="text-xs mt-1 block">Your stack is empty</span>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {myStack.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center space-x-3">
                        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                          <span className="text-xs text-slate-500">{item.category}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-slate-400 hover:text-red-500 font-bold px-2 py-1 text-sm transition"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button 
                    onClick={handleRemoveAll}
                    className="w-full mt-4 border border-red-200 text-red-600 hover:bg-red-50 font-medium py-2 rounded-xl transition text-sm"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Technology;