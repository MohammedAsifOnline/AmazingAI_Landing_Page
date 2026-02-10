
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
import EditableImage from './components/EditableImage';
import PromoVideo from './components/PromoVideo';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.HERO);
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<PageContent>(INITIAL_CONTENT);
  const [draggedItem, setDraggedItem] = useState<{ section: 'gain' | 'master' | 'audience', id: string } | null>(null);

  useEffect(() => {
    // Scroll handling for active navigation link
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

    // Intersection Observer for scroll-reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      elementsToReveal.forEach(el => revealObserver.unobserve(el));
    };
  }, [content]); // Re-observe when content changes to catch new items

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

  const updateAudience = (id: string, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      audience: {
        ...prev.audience,
        items: prev.audience.items.map(item => item.id === id ? { ...item, [field]: value } : item)
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

  const handleDragStart = (section: 'gain' | 'master' | 'audience', id: string) => {
    if (!isEditMode) return;
    setDraggedItem({ section, id });
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (!isEditMode) return;
    e.preventDefault();
  };

  const handleDrop = (section: 'gain' | 'master' | 'audience', targetId: string) => {
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

      <main className="overflow-x-hidden">
        {/* HERO */}
        <section id={SectionId.HERO} className="reveal active">
          <Hero content={content.hero} onUpdate={updateHero} isEditMode={isEditMode} />
        </section>

        {/* PROMO VIDEO SECTION */}
        <section id={SectionId.PROMO} className="pt-8 pb-16 bg-white reveal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Watch How <span className="text-[#65a34e]">AmazingAI</span> is Transforming Learning
              </h2>
            </div>
            <PromoVideo 
              videoUrl={content.hero.promoVideoUrl} 
              onUpdateVideo={(url) => updateHero('promoVideoUrl', url)} 
              isEditMode={isEditMode} 
              logoUrl={content.brand.logoUrl}
            />
          </div>
        </section>

        {/* 3 IMAGE GRID */}
        <section id={SectionId.IMAGE_GRID} className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.imageGrid.map((src, index) => (
              <div 
                key={index} 
                className="reveal rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500 min-h-[300px] md:h-[400px]"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
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
        <section id={SectionId.MASTER} className="py-24 bg-white reveal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 flex flex-wrap items-center justify-center gap-3">
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
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {content.master.items.map((tool, index) => (
                <div 
                  key={tool.id} 
                  className={`reveal flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm transition-all duration-700 min-w-[150px] md:min-w-[180px] ${tool.isBlurred ? 'blur-[6px] opacity-20 hover:blur-none hover:opacity-100' : 'hover:shadow-md hover:-translate-y-1'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
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
                    className={`w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center ${isEditMode ? 'cursor-pointer ring-2 ring-blue-500 rounded-lg p-1' : ''}`}
                  >
                    <img 
                      src={tool.logo || 'https://www.etrades.in/wp-content/uploads/2026/02/Amazing_AI_logo_small-1.png/40'} 
                      alt={tool.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <span className="font-bold text-slate-900 text-base md:text-lg">
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
        <section id={SectionId.GAIN} className="max-w-7xl mx-auto px-6 py-20 md:py-32 bg-slate-50 md:rounded-[4rem] shadow-inner md:my-12 reveal">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              <EditableText 
                value={content.gain.title} 
                onChange={(val) => setContent(prev => ({...prev, gain: {...prev.gain, title: val}}))} 
                isEditMode={isEditMode} 
                tag="h2"
              />
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium">
              <EditableText 
                value={content.gain.subtitle} 
                onChange={(val) => setContent(prev => ({...prev, gain: {...prev.gain, subtitle: val}}))} 
                isEditMode={isEditMode} 
                tag="p"
              />
            </p>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-8 shadow-sm"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.gain.items.map((benefit, index) => (
              <div 
                key={benefit.id}
                className="reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
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

        {/* AUDIENCE SECTION (WHO IS THIS FOR) */}
        <section id={SectionId.AUDIENCE} className="py-20 md:py-32 bg-white reveal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                <EditableText 
                  value={content.audience.title} 
                  onChange={(val) => setContent(prev => ({...prev, audience: {...prev.audience, title: val}}))} 
                  isEditMode={isEditMode} 
                  tag="h2"
                />
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium">
                <EditableText 
                  value={content.audience.subtitle} 
                  onChange={(val) => setContent(prev => ({...prev, audience: {...prev.audience, subtitle: val}}))} 
                  isEditMode={isEditMode} 
                  tag="p"
                />
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {content.audience.items.map((item, index) => (
                <div 
                  key={item.id}
                  className="reveal bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div 
                    onClick={() => {
                      if (!isEditMode) return;
                      const newIcon = prompt('Enter new emoji icon:', item.icon);
                      if (newIcon) updateAudience(item.id, 'icon', newIcon);
                    }}
                    className={`w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 ${isEditMode ? 'cursor-pointer ring-2 ring-blue-400' : ''}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    <EditableText 
                      value={item.title} 
                      onChange={(val) => updateAudience(item.id, 'title', val)} 
                      isEditMode={isEditMode} 
                    />
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    <EditableText 
                      value={item.description} 
                      onChange={(val) => updateAudience(item.id, 'description', val)} 
                      isEditMode={isEditMode} 
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATE */}
        <section id={SectionId.CERTIFICATE} className="py-20 md:py-32 overflow-hidden bg-white reveal">
          <Certificate 
            content={content.certificate} 
            onUpdate={updateCertificate} 
            isEditMode={isEditMode} 
            logoUrl={content.brand.logoUrl}
          />
        </section>

        {/* FAQ */}
        <section id={SectionId.FAQ} className="py-20 md:py-32 bg-slate-50 reveal">
          <FAQSection />
        </section>

        {/* STUDENT OFFER */}
        <section id={SectionId.STUDENT} className="max-w-7xl mx-auto px-6 py-12 md:py-20 mb-20 reveal">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 md:rounded-[4rem] rounded-[2rem] p-8 md:p-24 relative overflow-hidden text-white shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 text-center md:text-left">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-xs font-black uppercase tracking-widest mb-6 md:mb-8">Exclusive Opportunity</span>
                <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-tight">Student Success Plan</h2>
                <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 leading-relaxed font-medium opacity-90">Verify your status and get immediate access to our entire AI tools library at a fraction of the cost.</p>
                <button className="w-full sm:w-auto px-12 py-5 bg-white text-blue-700 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl">Claim 50% Discount Now</button>
              </div>
              <div className="glass bg-white/10 p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] border-white/20 text-center flex flex-col items-center">
                  <div className="text-6xl md:text-8xl font-black mb-2 md:mb-4">50%</div>
                  <div className="text-sm md:text-lg font-black text-blue-100 uppercase tracking-[0.3em]">Off Forever</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer logoUrl={content.brand.logoUrl} />
      <StickyElements />
    </div>
  );
};

export default App;
