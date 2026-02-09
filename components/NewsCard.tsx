
import React from 'react';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <article className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm uppercase tracking-wider">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 mb-4">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <div className="mt-auto">
          <button className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 group/btn">
            Read Full Story 
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
