
import React from 'react';
import { Tool } from '../types';

interface ToolIconProps {
  tool: Tool;
}

const ToolIcon: React.FC<ToolIconProps> = ({ tool }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className={`w-20 h-20 glass rounded-2xl flex items-center justify-center p-4 mb-3 transition-all duration-500 ${
        tool.isBlurred ? 'blur-md opacity-40 group-hover:blur-sm group-hover:opacity-60' : 'hover:scale-110 shadow-lg'
      }`}>
        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
      </div>
      <span className={`text-xs font-bold uppercase tracking-wider text-slate-400 transition-all ${
        tool.isBlurred ? 'opacity-0 group-hover:opacity-40' : 'opacity-100'
      }`}>
        {tool.name}
      </span>
    </div>
  );
};

export default ToolIcon;
