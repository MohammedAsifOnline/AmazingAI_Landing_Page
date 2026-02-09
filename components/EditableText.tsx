
import React from 'react';

interface EditableTextProps {
  value: string;
  onChange: (newValue: string) => void;
  isEditMode: boolean;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

const EditableText: React.FC<EditableTextProps> = ({ 
  value, 
  onChange, 
  isEditMode, 
  className = "", 
  tag = 'span' 
}) => {
  const Tag = tag;

  if (!isEditMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag 
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.textContent || "")}
      className={`${className} edit-highlight`}
    >
      {value}
    </Tag>
  );
};

export default EditableText;
