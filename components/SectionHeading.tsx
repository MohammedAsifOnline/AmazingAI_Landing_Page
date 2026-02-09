
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="max-w-3xl mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-500 leading-relaxed">{subtitle}</p>}
      <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-6"></div>
    </div>
  );
};

export default SectionHeading;
