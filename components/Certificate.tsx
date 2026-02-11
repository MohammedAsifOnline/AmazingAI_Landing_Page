
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
    <div id="certificate-section" className="relative bg-[#0f172a] overflow-hidden py-16 md:py-32 px-4 md:px-6">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl md:text-7xl font-black mb-4 md:mb-8 text-white tracking-tight">
            <EditableText value={content.title} />
          </h2>
          <p className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed px-4">
            <EditableText value={content.subtitle} />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 perspective-1000">
             <div className="relative group transform transition-all duration-700 hover:rotate-y-2 hover:rotate-x-2">
               {/* Certificate Container - Reduced padding and border on mobile */}
               <div className="relative aspect-[1.4/1] bg-white rounded-lg md:rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border-[6px] md:border-[12px] border-slate-800 p-3 md:p-12 text-slate-900">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px] md:[background-size:20px_20px]"></div>
                  <div className="absolute inset-2 md:inset-4 border border-blue-100 pointer-events-none"></div>

                  <div className="relative h-full flex flex-col items-center justify-between text-center">
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      <div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center overflow-hidden">
                        <img src={logoUrl || defaultLogo} alt="Logo" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-[6px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] text-slate-400 uppercase">Official Certification</div>
                    </div>

                    <div className="w-full">
                      <div className="text-slate-400 text-[6px] md:text-[10px] font-bold uppercase tracking-widest mb-0.5 md:mb-1">Awarded To</div>
                      <div className="text-xl md:text-5xl font-serif text-slate-900 italic mb-1 md:mb-2 leading-none">
                        <EditableText value={content.studentName} />
                      </div>
                      <div className="h-px w-1/3 md:w-1/2 bg-slate-100 mx-auto mb-1 md:mb-2"></div>
                      <div className="text-slate-500 text-[6px] md:text-xs max-w-[150px] md:max-w-sm mx-auto leading-tight md:leading-relaxed">
                        For successful completion and mastery of the course
                        <br />
                        <span className="text-blue-600 font-bold block mt-0.5 md:mt-1 text-[8px] md:text-base">
                          <EditableText value={content.courseName} />
                        </span>
                      </div>
                    </div>

                    <div className="w-full flex justify-between items-end px-1 md:px-8">
                      <div className="text-left">
                        <div className="w-10 md:w-24 h-[0.5px] md:h-px bg-slate-300 mb-0.5 md:mb-1"></div>
                        <div className="text-slate-900 font-bold text-[5px] md:text-[10px]">12 MAY 2024</div>
                        <div className="text-slate-400 text-[4px] md:text-[8px] font-bold uppercase tracking-widest">Date Issued</div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 md:w-20 md:h-20 bg-blue-600/5 rounded-full flex items-center justify-center mb-0.5 md:mb-1 border border-dashed border-blue-400/30 transition-all">
                          {content.sealUrl ? (
                            <img src={content.sealUrl} alt="Seal" className="w-8 h-8 md:w-16 md:h-16 object-contain rounded-full" />
                          ) : (
                            <div className="w-8 h-8 md:w-16 md:h-16 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white font-black text-[4px] md:text-[8px] rotate-12 shadow-lg border-2 md:border-4 border-white/20">
                              <span>ISO 9001</span>
                              <span>CERTIFIED</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-serif italic text-[10px] md:text-xl text-slate-900 mb-0 leading-none">
                          <EditableText value={content.founderName} />
                        </div>
                        <div className="w-10 md:w-24 h-[0.5px] md:h-px bg-slate-300 mb-0.5 md:mb-1 ml-auto"></div>
                        <div className="text-slate-900 font-bold uppercase text-[4px] md:text-[8px] tracking-widest">Founder, AmazingAI</div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-[#65a34e] text-xl md:text-3xl font-black mb-6 md:mb-10 uppercase tracking-tight flex items-center gap-3">
              <span className="w-6 h-1 bg-[#65a34e] rounded-full"></span>
              Why this certificate matters:
            </h3>
            
            <ul className="space-y-4 md:space-y-6">
              {checklistItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-3 md:gap-5 group transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#65a34e] flex items-center justify-center text-[#65a34e] bg-[#65a34e]/5 group-hover:bg-[#65a34e] group-hover:text-white transition-all shadow-lg shadow-[#65a34e]/10">
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-xl font-bold text-slate-200 opacity-90 leading-tight group-hover:text-white group-hover:translate-x-1 transition-all">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className={`mt-8 md:mt-12 bg-slate-800/40 border border-slate-700 p-4 md:p-8 rounded-2xl md:rounded-[2rem] flex items-center gap-4 md:gap-5 max-w-sm shadow-2xl backdrop-blur-md transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="w-10 h-10 md:w-14 md:h-14 bg-yellow-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-yellow-500 text-xl md:text-2xl shadow-xl shadow-yellow-500/5 animate-pulse">
                ★
              </div>
              <div>
                <h5 className="text-base md:text-lg font-black text-white">AmazingAI Verified</h5>
                <p className="text-slate-400 text-[10px] md:text-xs font-bold tracking-wide">
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
