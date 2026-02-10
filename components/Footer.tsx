
import React from 'react';

interface FooterProps {
  logoUrl?: string;
}

const Footer: React.FC<FooterProps> = ({ logoUrl }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-40 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logoUrl || "https://www.etrades.in/wp-content/uploads/2026/02/Amazing_AI_logo_small-1.png"} alt="AmazingAI Logo" className="w-full h-full object-contain" />
            </div>
            {/* Removed 'LMS' and styled 'AI' in Blue */}
            <span className="text-lg font-extrabold text-slate-900">Amazing<span className="text-blue-600">AI</span></span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Revolutionizing education through personalized AI learning paths. ISO 9001 certified for excellence in professional training.
          </p>
          <div className="flex gap-4">
            {['twitter', 'linkedin', 'youtube', 'facebook'].map(social => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <span className="text-[10px] uppercase font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Course Path</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-blue-600">AI for Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">AI for Developers</a></li>
            <li><a href="#" className="hover:text-blue-600">Prompt Engineering</a></li>
            <li><a href="#" className="hover:text-blue-600">Enterprise AI Ops</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Success Stories</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4">Get the latest AI tools and tutorials delivered weekly.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-blue-700">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 border-t border-slate-50 pt-8">
        <p>© 2024 AmazingAI. All rights reserved. ISO 9001:2015 Certified.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-600">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600">Terms of Service</a>
          <a href="#" className="hover:text-slate-600">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
