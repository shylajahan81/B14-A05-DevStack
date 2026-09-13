import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Brand Info (Spans 2 columns) */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold px-2.5 py-1 rounded-lg text-sm">
              DS
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent inline-block">
              Dev Stack
            </span>
          </div>
          <p className="text-slate-600 text-sm max-w-sm">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex space-x-4 text-sm font-medium text-slate-600 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition">LinkedIn</a>
          </div>
        </div>

        {/* Product Column */}
        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><a href="#home" className="hover:text-slate-900 transition">Home</a></li>
            <li><a href="#technologies" className="hover:text-slate-900 transition">Technologies</a></li>
            <li><a href="#projects" className="hover:text-slate-900 transition">Projects</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><a href="#about" className="hover:text-slate-900 transition">About</a></li>
            <li><a href="#contact" className="hover:text-slate-900 transition">Contact</a></li>
            <li><a href="#careers" className="hover:text-slate-900 transition">Careers</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><a href="#privacy" className="hover:text-slate-900 transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-slate-900 transition">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-100 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#privacy" className="hover:text-slate-800 transition">Privacy</a>
          <a href="#terms" className="hover:text-slate-800 transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';

export default Footer;