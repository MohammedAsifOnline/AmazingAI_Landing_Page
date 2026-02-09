
import React from 'react';

interface EditableImageProps {
  src: string;
  onChange: (newSrc: string) => void;
  isEditMode: boolean;
  alt: string;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ src, onChange, isEditMode, alt, className }) => {
  const handleClick = () => {
    if (!isEditMode) return;
    const newUrl = prompt('Enter new image URL:', src);
    if (newUrl) onChange(newUrl);
  };

  return (
    <div className={`relative group ${isEditMode ? 'cursor-pointer' : ''}`} onClick={handleClick}>
      <img src={src} alt={alt} className={className} />
      {isEditMode && (
        <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-white px-2 py-1 rounded text-[10px] font-bold shadow-sm">Change Image</span>
        </div>
      )}
    </div>
  );
};

export default EditableImage;
