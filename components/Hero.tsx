
import React from 'react';
import EditableText from './EditableText';
import NeuralBackground from './NeuralBackground';

interface HeroProps {
  content: any;
  onUpdate: (key: string, value: string) => void;
  isEditMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ content, onUpdate, isEditMode }) => {
  return (
    <div className="relative pt-24 pb-12 px-6 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      <NeuralBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-blue-600/5 backdrop-blur-sm border border-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
            <EditableText value={content.badge} onChange={(val) => onUpdate('badge', val)} isEditMode={isEditMode} />
          </div>
          
          <h1 className="reveal text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight" style={{ transitionDelay: '100ms' }}>
            <EditableText value={content.title} onChange={(val) => onUpdate('title', val)} isEditMode={isEditMode} tag="span" />{' '}
            <span className="text-gradient">
              <EditableText value={content.titleAccent} onChange={(val) => onUpdate('titleAccent', val)} isEditMode={isEditMode} tag="span" />
            </span>
          </h1>
          
          <p className="reveal text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium" style={{ transitionDelay: '200ms' }}>
            <EditableText value={content.subtitle} onChange={(val) => onUpdate('subtitle', val)} isEditMode={isEditMode} tag="span" />
          </p>
          
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6" style={{ transitionDelay: '300ms' }}>
            <button className="group w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 transition-all">
              <EditableText value={content.primaryCTA} onChange={(val) => onUpdate('primaryCTA', val)} isEditMode={isEditMode} />
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
              <EditableText value={content.secondaryCTA} onChange={(val) => onUpdate('secondaryCTA', val)} isEditMode={isEditMode} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
