
import React from 'react';
import EditableText from './EditableText';

interface CertificateProps {
  content: any;
  onUpdate: (key: string, value: string) => void;
  isEditMode: boolean;
}

const Certificate: React.FC<CertificateProps> = ({ content, onUpdate, isEditMode }) => {
  const handleSealUpdate = () => {
    if (!isEditMode) return;
    const newSeal = prompt('Enter Seal Image URL:', content.sealUrl);
    if (newSeal !== null) onUpdate('sealUrl', newSeal);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-12 glass rounded-[3rem] border border-blue-100/50 shadow-2xl bg-white/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          <EditableText value={content.title} onChange={(val) => onUpdate('title', val)} isEditMode={isEditMode} />
        </h2>
        <p className="text-slate-500 text-lg">
          <EditableText value={content.subtitle} onChange={(val) => onUpdate('subtitle', val)} isEditMode={isEditMode} />
        </p>
      </div>

      {/* The Certificate Graphic */}
      <div className="relative aspect-[1.4/1] bg-slate-50 border-[16px] border-slate-900 p-8 md:p-16 rounded shadow-inner overflow-hidden">
        {/* Borders and Watermarks */}
        <div className="absolute inset-4 border-2 border-blue-200/50 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] rotate-45 select-none text-[200px] font-black text-blue-900 pointer-events-none whitespace-nowrap uppercase tracking-widest">
          AMAZING AI
        </div>

        <div className="relative h-full flex flex-col items-center justify-between text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl">A</div>
            <div className="text-sm font-black tracking-[0.4em] text-slate-400 mt-2 uppercase">Certificate of Excellence</div>
          </div>

          <div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">This is awarded to</div>
            <div className="text-4xl md:text-6xl font-serif text-slate-900 italic mb-4">
              <EditableText value={content.studentName} onChange={(val) => onUpdate('studentName', val)} isEditMode={isEditMode} />
            </div>
            <div className="h-px w-64 bg-slate-200 mx-auto mb-4"></div>
            <div className="text-slate-500 max-w-md mx-auto leading-relaxed">
              for successful completion of the intensive professional path
              <br />
              <span className="text-blue-600 font-bold block mt-2 text-xl">
                <EditableText value={content.courseName} onChange={(val) => onUpdate('courseName', val)} isEditMode={isEditMode} />
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between items-end px-4 md:px-12">
            <div className="text-left">
              <div className="w-32 h-px bg-slate-900 mb-2"></div>
              <div className="text-slate-900 font-bold">12 May 2024</div>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Date issued</div>
            </div>
            <div className="flex flex-col items-center">
              <div 
                onClick={handleSealUpdate}
                className={`w-24 h-24 bg-blue-600/10 rounded-full flex items-center justify-center mb-2 border-2 border-dashed border-blue-400 transition-all ${isEditMode ? 'cursor-pointer hover:bg-blue-600/20 ring-2 ring-blue-500' : ''}`}
              >
                {content.sealUrl ? (
                  <img src={content.sealUrl} alt="Seal" className="w-20 h-20 object-contain rounded-full" />
                ) : (
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xs rotate-12 shadow-lg">
                    ISO 9001
                  </div>
                )}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Official Seal</div>
            </div>
            <div className="text-right">
              <div className="font-serif italic text-2xl text-slate-900 mb-1">
                <EditableText value={content.founderName} onChange={(val) => onUpdate('founderName', val)} isEditMode={isEditMode} />
              </div>
              <div className="w-32 h-px bg-slate-900 mb-2 ml-auto"></div>
              <div className="text-slate-900 font-bold uppercase text-[10px] tracking-widest">Founder, AmazingAI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
