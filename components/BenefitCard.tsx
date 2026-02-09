
import React from 'react';
import { Benefit } from '../types';
import EditableText from './EditableText';

interface BenefitCardProps {
  benefit: Benefit;
  onUpdate: (id: string, field: string, value: string) => void;
  isEditMode: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, onUpdate, isEditMode }) => {
  return (
    <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center relative h-full">
      <div 
        onClick={() => {
          if (!isEditMode) return;
          const newIcon = prompt('Enter new emoji icon:', benefit.icon);
          if (newIcon) onUpdate(benefit.id, 'icon', newIcon);
        }}
        className={`w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500 ${isEditMode ? 'cursor-pointer ring-2 ring-blue-400' : ''}`}
      >
        <span className="group-hover:scale-110 transition-transform">{benefit.icon}</span>
      </div>
      
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
        <EditableText 
          value={benefit.title} 
          onChange={(val) => onUpdate(benefit.id, 'title', val)} 
          isEditMode={isEditMode} 
          tag="span"
        />
      </h3>
      
      <p className="text-slate-500 leading-relaxed font-medium">
        <EditableText 
          value={benefit.description} 
          onChange={(val) => onUpdate(benefit.id, 'description', val)} 
          isEditMode={isEditMode} 
          tag="span"
        />
      </p>
      
      {isEditMode && (
        <div className="absolute top-4 left-4 cursor-grab active:cursor-grabbing text-slate-300 hover:text-blue-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 19v-2h2v2H7zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zM7 15v-2h2v2H7zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zM7 11v-2h2v2H7zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zM7 7V5h2v2H7zm4 0V5h2v2h-2zm4 0V5h2v2h-2z"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
