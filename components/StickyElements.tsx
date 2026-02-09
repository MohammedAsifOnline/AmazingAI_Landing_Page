
import React, { useState } from 'react';

const StickyElements: React.FC = () => {
  const [showBottomBar, setShowBottomBar] = useState(true);

  return (
    <>
      {/* WhatsApp Button - Number updated to +919700035365 */}
      <a 
        href="https://wa.me/919700035365" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-200 hover:scale-110 transition-transform animate-bounce cursor-pointer group"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408.002 12.045a11.9 11.9 0 001.591 5.976L0 24l6.135-1.61a11.893 11.893 0 005.912 1.569h.005c6.635 0 12.048-5.407 12.05-12.044a11.82 11.82 0 00-3.417-8.514" />
        </svg>
        <span className="absolute left-16 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Chat with an AI Advisor
        </span>
      </a>

      {/* Sticky Bottom Bar */}
      {showBottomBar && (
        <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 animate-slide-up">
          <div className="max-w-4xl mx-auto glass shadow-2xl rounded-3xl p-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 border-blue-100/50">
            <div className="flex items-center gap-6">
              <div className="text-center md:text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Limited Time Offer</span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 line-through text-lg font-medium">$199</span>
                  <span className="text-3xl font-black text-blue-600">$49</span>
                  <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Save 75%</span>
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-slate-100"></div>
              <div className="hidden lg:flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Ends in</span>
                <span className="font-mono font-bold text-blue-600">04:22:59</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button 
                onClick={() => setShowBottomBar(false)}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <button className="flex-grow md:flex-grow-0 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyElements;
