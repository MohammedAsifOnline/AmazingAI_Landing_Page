
import React, { useState, useEffect } from 'react';
import { SectionId, PageContent } from './types';
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
  const [content, setContent] = useState<PageContent>(INITIAL_CONTENT);

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
  }, [content]);

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-100">
      <Header 
        activeSection={activeSection} 
        logoUrl={content.brand.logoUrl} 
        brandName={content.brand.title}
      />
      
      <main className="overflow-x-hidden">
        {/* HERO */}
        <section id={SectionId.HERO} className="reveal active">
          <Hero content={content.hero} />
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
              logoUrl={content.brand.logoUrl}
            />
          </div>
        </section>

        {/* 3 IMAGE GRID (News Glimpse Section) */}
        <section id={SectionId.IMAGE_GRID} className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              News Glimps on <br className="md:hidden" />
              <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                Artificial Intelligence
              </span>
            </h2>
            <div className="w-24 h-2 bg-blue-600/10 rounded-full mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.imageGrid.map((src, index) => (
              <div 
                key={index} 
                className="reveal rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500 min-h-[300px] md:h-[400px]"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <EditableImage 
                  src={src} 
                  alt={`News clipping ${index + 1}`} 
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
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 flex flex-wrap items-center justify-center gap-4">
                <EditableText value={content.master.title} />
                <span className="text-green-500">
                  <EditableText value={content.master.subtitle} />
                </span>
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {content.master.items.map((tool, index) => (
                <div 
                  key={tool.id} 
                  className={`reveal flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm transition-all duration-700 min-w-[150px] md:min-w-[180px] ${tool.isBlurred ? 'blur-[8px] opacity-20 cursor-default' : 'hover:shadow-md hover:-translate-y-1'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={tool.logo || 'https://www.etrades.in/wp-content/uploads/2026/02/Amazing_AI_logo_small-1.png/40'} 
                      alt={tool.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <span className="font-bold text-slate-900 text-base md:text-lg">
                    <EditableText value={tool.name} />
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
              <EditableText value={content.gain.title} tag="h2" />
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium">
              <EditableText value={content.gain.subtitle} tag="p" />
            </p>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-8 shadow-sm"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.gain.items.map((benefit, index) => (
              <div 
                key={benefit.id}
                className="reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <BenefitCard benefit={benefit} />
              </div>
            ))}
          </div>
        </section>

        {/* AUDIENCE SECTION (WHO IS THIS FOR) */}
        <section id={SectionId.AUDIENCE} className="py-20 md:py-32 bg-white reveal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                <EditableText value={content.audience.title} tag="h2" />
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium">
                <EditableText value={content.audience.subtitle} tag="p" />
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {content.audience.items.map((item, index) => (
                <div 
                  key={item.id}
                  className="reveal bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    <EditableText value={item.title} />
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    <EditableText value={item.description} />
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
