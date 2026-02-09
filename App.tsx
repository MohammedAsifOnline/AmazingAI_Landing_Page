
import React, { useState, useEffect } from 'react';
import { SectionId, PageContent, Benefit, Tool } from './types';
import { INITIAL_CONTENT } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import BenefitCard from './components/BenefitCard';
import FAQSection from './components/FAQSection';
import StickyElements from './components/StickyElements';
import Footer from './components/Footer';
import Certificate from './components/Certificate';
import EditableText from './components/EditableText';
import PromoVideo from './components/PromoVideo';
import EditableImage from './components/EditableImage';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.HERO);
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<PageContent>(INITIAL_CONTENT);
  const [draggedItem, setDraggedItem] = useState<{ section: 'gain' | 'master', id: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateHero = (key: string, value: string) => {
    setContent(prev => ({ ...prev, hero: { ...prev.hero, [key]: value } }));
  };

  const updateBrand = (key: string, value: string) => {
    setContent(prev => ({ ...prev, brand: { ...prev.brand, [key]: value } }));
  };

  const updateCertificate = (key: string, value: string) => {
    setContent(prev => ({ ...prev, certificate: { ...prev.certificate, [key]: value } }));
  };

  const updateBenefit = (id: string, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      gain: {
        ...prev.gain,
        items: prev.gain.items.map(item => item.id === id ? { ...item, [field]: value } : item)
      }
    }));
  };

  const updateImageGridItem = (index: number, newSrc: string) => {
    setContent(prev => {
      const newGrid = [...prev.imageGrid];
      newGrid[index] = newSrc;
      return { ...prev, imageGrid: newGrid };
    });
  };

  const handleDragStart = (section: 'gain' | 'master', id: string) => {
    if (!isEditMode) return;
    setDraggedItem({ section, id });
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (!isEditMode) return;
    e.preventDefault();
  };

  const handleDrop = (section: 'gain' | 'master', targetId: string) => {
    if (!isEditMode || !draggedItem || draggedItem.section !== section) return;
    
    setContent(prev => {
      const items = [...prev[section].items];
      const fromIndex = items.findIndex(item => item.id === draggedItem.id);
      const toIndex = items.findIndex(item => item.id === targetId);
      
      const [removed] = items.splice(fromIndex, 1);
      items.splice(toIndex, 0, removed);
      
      return {
        ...prev,
        [section]: { ...prev[section], items }
      };
    });
    setDraggedItem(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-100">
      <Header 
        activeSection={activeSection} 
        logoUrl={content.brand.logoUrl} 
        brandName={content.brand.title}
        onUpdateBrand={updateBrand}
        isEditMode={isEditMode}
      />
      
      <div className="fixed top-24 right-6 z-[200]">
        <button 
          onClick={() => setIsEditMode(!isEditMode)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black shadow-2xl transition-all border transform hover:scale-105 ${
            isEditMode 
              ? 'bg-blue-600 text-white border-blue-700 ring-4 ring-blue-500/20' 
              : 'bg-white text-slate-900 border-slate-200'
          }`}
        >
          {isEditMode ? (
            <><span className="animate-pulse">●</span> Publish Changes</>
          ) : (
            <>✏️ Customize Page</>
          )}
        </button>
      </div>

      <main>
        {/* HERO */}
        <section id={SectionId.HERO}>
          <Hero content={content.hero} onUpdate={updateHero} isEditMode={isEditMode} />
        </section>

        {/* PROMO VIDEO */}
        <section id={SectionId.PROMO} className="relative z-10 -mt-20">
          <PromoVideo 
            videoUrl={content.hero.promoVideoUrl} 
            onUpdateVideo={(url) => updateHero('promoVideoUrl', url)} 
            isEditMode={isEditMode} 
          />
        </section>

        {/* 3 IMAGE GRID */}
        <section id={SectionId.IMAGE_GRID} className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.imageGrid.map((src, index) => (
              <div key={index} className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500 h-[400px]">
                <EditableImage 
                  src={src} 
                  onChange={(val) => updateImageGridItem(index, val)} 
                  isEditMode={isEditMode} 
                  alt={`Showcase ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* MASTER - AI TOOLS SECTION */}
        <section id={SectionId.MASTER} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
                <EditableText 
                  value={content.master.title} 
                  onChange={(val) => setContent(prev => ({...prev, master: {...prev.master, title: val}}))} 
                  isEditMode={isEditMode} 
                />
                <span className="text-green-500">
                  <EditableText 
                    value={content.master.subtitle} 
                    onChange={(val) => setContent(prev => ({...prev, master: {...prev.master, subtitle: val}}))} 
                    isEditMode={isEditMode} 
                  />
                </span>
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {content.master.items.map((tool) => (
                <div 
                  key={tool.id} 
                  className={`flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm transition-all duration-700 min-w-[180px] ${tool.isBlurred ? 'blur-[6px] opacity-20 hover:blur-none hover:opacity-100' : 'hover:shadow-md hover:-translate-y-1'}`}
                  draggable={isEditMode}
                  onDragStart={() => handleDragStart('master', tool.id)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop('master', tool.id)}
                >
                  <div 
                    onClick={() => {
                      if (!isEditMode) return;
                      const newLogo = prompt('Enter Tool Logo URL:', tool.logo);
                      if (newLogo) {
                        setContent(prev => ({
                          ...prev,
                          master: {
                            ...prev.master,
                            items: prev.master.items.map(t => t.id === tool.id ? {...t, logo: newLogo} : t)
                          }
                        }));
                      }
                    }}
                    className={`w-10 h-10 flex-shrink-0 flex items-center justify-center ${isEditMode ? 'cursor-pointer ring-2 ring-blue-500 rounded-lg p-1' : ''}`}
                  >
                    <img 
                      src={tool.logo || 'https://via.placeholder.com/40'} 
                      alt={tool.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <span className="font-bold text-slate-900 text-lg">
                    <EditableText 
                      value={tool.name} 
                      onChange={(val) => {
                        setContent(prev => ({
                          ...prev,
                          master: {
                            ...prev.master,
                            items: prev.master.items.map(t => t.id === tool.id ? {...t, name: val} : t)
                          }
                        }));
                      }} 
                      isEditMode={isEditMode} 
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GAIN */}
        <section id={SectionId.GAIN} className="max-w-7xl mx-auto px-6 py-32 bg-slate-50 rounded-[4rem] shadow-inner my-12">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              <EditableText 
                value={content.gain.title} 
                onChange={(val) => setContent(prev => ({...prev, gain: {...prev.gain, title: val}}))} 
                isEditMode={isEditMode} 
                tag="h2"
              />
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl font-medium">
              <EditableText 
                value={content.gain.subtitle} 
                onChange={(val) => setContent(prev => ({...prev, gain: {...prev.gain, subtitle: val}}))} 
                isEditMode={isEditMode} 
                tag="p"
              />
            </p>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-8 shadow-sm"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.gain.items.map((benefit) => (
              <div 
                key={benefit.id}
                draggable={isEditMode}
                onDragStart={() => handleDragStart('gain', benefit.id)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop('gain', benefit.id)}
              >
                <BenefitCard 
                  benefit={benefit} 
                  onUpdate={updateBenefit} 
                  isEditMode={isEditMode} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATE */}
        <section id={SectionId.CERTIFICATE} className="py-32 overflow-hidden bg-white">
          <Certificate content={content.certificate} onUpdate={updateCertificate} isEditMode={isEditMode} />
        </section>

        {/* FAQ */}
        <section id={SectionId.FAQ} className="py-32 bg-slate-50">
          <FAQSection />
        </section>

        {/* STUDENT OFFER */}
        <section id={SectionId.STUDENT} className="max-w-7xl mx-auto px-6 py-20 mb-20">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-white shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-xs font-black uppercase tracking-widest mb-8">Exclusive Opportunity</span>
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Student Success Plan</h2>
                <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium opacity-90">Verify your status and get immediate access to our entire AI tools library at a fraction of the cost.</p>
                <button className="px-12 py-5 bg-white text-blue-700 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl">Claim 50% Discount Now</button>
              </div>
              <div className="glass bg-white/10 p-12 rounded-[3rem] border-white/20 text-center flex flex-col items-center">
                  <div className="text-8xl font-black mb-4">50%</div>
                  <div className="text-lg font-black text-blue-100 uppercase tracking-[0.3em]">Off Forever</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyElements />
    </div>
  );
};

export default App;
