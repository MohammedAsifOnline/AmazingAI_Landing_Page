
import React, { useState } from 'react';
import { FAQS } from '../constants';
import SectionHeading from './SectionHeading';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about AmazingAI LMS and your learning journey."
      />
      
      <div className="mt-12 space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx} 
            className={`border border-slate-100 rounded-[2rem] p-6 transition-all cursor-pointer bg-white shadow-sm hover:shadow-md ${
              openIndex === idx ? 'faq-open border-blue-200 ring-1 ring-blue-50' : ''
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-bold text-lg text-slate-900">{faq.question}</h4>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all bg-slate-50 ${
                openIndex === idx ? 'bg-blue-600 text-white rotate-180' : 'text-slate-400'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="faq-content">
              <p className="text-slate-500 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
