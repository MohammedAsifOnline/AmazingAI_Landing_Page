
import React, { useState } from 'react';
import { SectionId } from '../types';
import EditableText from './EditableText';

interface HeaderProps {
  activeSection: string;
  logoUrl?: string;
  brandName: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection, logoUrl, brandName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home', id: SectionId.HERO },
    { name: 'Master', id: SectionId.MASTER },
    { name: 'Benefits', id: SectionId.GAIN },
    { name: 'Certificate', id: SectionId.CERTIFICATE },
    { name: 'Offer', id: SectionId.STUDENT },
    { name: 'FAQ', id: SectionId.FAQ },
  ];

  const renderBrandName = (name: string) => {
    if (name === "AmazingAI") {
      return (
        <>
          Amazing<span className="text-blue-600">AI</span>
        </>
      );
    }
    return name;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-6">
      <nav className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-blue-500/10">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden transition-all">
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                {brandName.charAt(0)}
              </div>
            )}
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 ml-1">
            {renderBrandName(brandName)}
          </span>
        </div>

        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-base font-bold transition-all hover:text-blue-600 hover:scale-105 active:scale-95 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-blue-600 text-white px-8 py-2.5 rounded-full text-base font-bold shadow-md hover:bg-blue-700 hover:scale-105 transition-all">
            Register
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 glass rounded-3xl p-6 shadow-2xl animate-slide-down border border-white/50">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left py-2 text-xl font-bold transition-colors ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li className="pt-4">
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl">
                Get Started Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
