
import React from 'react';

interface EditableTextProps {
  value: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

const EditableText: React.FC<EditableTextProps> = ({ 
  value, 
  className = "", 
  tag = 'span' 
}) => {
  const Tag = tag;
  return <Tag className={className}>{value}</Tag>;
};

export default EditableText;
