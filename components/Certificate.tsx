
import React, { useEffect, useState } from 'react';
import EditableText from './EditableText';

interface CertificateProps {
  content: any;
  logoUrl?: string;
}

const Certificate: React.FC<CertificateProps> = ({ content, logoUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('certificate-section');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const checklistItems = [
    "Validates your expertise in 25+ AI Tools",
    "Demonstrates practical prompt engineering skills",
    "Recognized by industry leaders and employers",
    "Boosts your LinkedIn profile and resume visibility",
    "Proof of completion for ISO 9001 certified training"
  ];

  const defaultLogo = "https://www.etrades.in/wp-content/uploads/2026/02/Amazing_AI_logo_small-1.png";

  return (
    <div id="certificate-section" className="relative bg-[#0f172a] overflow-hidden py-24 md:py-32 px-6">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black mb-8 text-white tracking-tight">
            <EditableText value={content.title} />
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            <EditableText value={content.subtitle} />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 perspective-1000">
             <div className="relative group transform transition-all duration-700 hover:rotate-y-2 hover:rotate-x-2">
               <div className="relative aspect-[1.4/1] bg-white rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border-[12px] border-slate-800 p-6 md:p-12 text-slate-900">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  <div className="absolute inset-4 border border-blue-100 pointer-events-none"></div>

                  <div className="relative h-full flex flex-col items-center justify-between text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                        <img src={logoUrl || defaultLogo} alt="Logo" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Official Certification</div>
                    </div>

                    <div className="w-full">
                      <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Awarded To</div>
                      <div className="text-3xl md:text-5xl font-serif text-slate-900 italic mb-2">
                        <EditableText value={content.studentName} />
                      </div>
                      <div className="h-px w-1/2 bg-slate-100 mx-auto mb-2"></div>
                      <div className="text-slate-500 text-[10px] md:text-xs max-w-sm mx-auto leading-relaxed">
                        For successful completion and mastery of the course
                        <br />
                        <span className="text-blue-600 font-bold block mt-1 text-sm md:text-base">
                          <EditableText value={content.courseName} />
                        </span>
                      </div>
                    </div>

                    <div className="w-full flex justify-between items-end px-2 md:px-8">
                      <div className="text-left">
                        <div className="w-20 md:w-24 h-px bg-slate-300 mb-1"></div>
                        <div className="text-slate-900 font-bold text-[10px]">12 MAY 2024</div>
                        <div className="text-slate-400 text-[8px] font-bold uppercase tracking-widest">Date Issued</div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600/5 rounded-full flex items-center justify-center mb-1 border-2 border-dashed border-blue-400/30 transition-all">
                          {content.sealUrl ? (
                            <img src={content.sealUrl} alt="Seal" className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-full" />
                          ) : (
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white font-black text-[8px] rotate-12 shadow-xl border-4 border-white/20">
                              <span>ISO 9001</span>
                              <span>CERTIFIED</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-serif italic text-lg md:text-xl text-slate-900 mb-0">
                          <EditableText value={content.founderName} />
                        </div>
                        <div className="w-20 md:w-24 h-px bg-slate-300 mb-1 ml-auto"></div>
                        <div className="text-slate-900 font-bold uppercase text-[8px] tracking-widest">Founder, AmazingAI</div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-[#65a34e] text-2xl md:text-3xl font-black mb-10 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-1 bg-[#65a34e] rounded-full"></span>
              Why this certificate matters:
            </h3>
            
            <ul className="space-y-6">
              {checklistItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-5 group transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#65a34e] flex items-center justify-center text-[#65a34e] bg-[#65a34e]/5 group-hover:bg-[#65a34e] group-hover:text-white transition-all shadow-lg shadow-[#65a34e]/10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-slate-200 opacity-90 leading-tight group-hover:text-white group-hover:translate-x-1 transition-all">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className={`mt-12 bg-slate-800/40 border border-slate-700 p-6 md:p-8 rounded-[2rem] flex items-center gap-5 max-w-sm shadow-2xl backdrop-blur-md transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 text-2xl shadow-xl shadow-yellow-500/5 animate-pulse">
                ★
              </div>
              <div>
                <h5 className="text-lg font-black text-white">AmazingAI Verified</h5>
                <p className="text-slate-400 text-xs font-bold tracking-wide">
                  Signed by {content.founderName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
