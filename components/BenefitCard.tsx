
import React from 'react';
import { Benefit } from '../types';
import EditableText from './EditableText';

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  return (
    <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center relative h-full">
      <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
        <span className="group-hover:scale-110 transition-transform">{benefit.icon}</span>
      </div>
      
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
        <EditableText value={benefit.title} tag="span" />
      </h3>
      
      <p className="text-slate-500 leading-relaxed font-medium">
        <EditableText value={benefit.description} tag="span" />
      </p>
    </div>
  );
};

export default BenefitCard;
