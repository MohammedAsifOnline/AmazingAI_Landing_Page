
import React from 'react';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default EditableImage;
