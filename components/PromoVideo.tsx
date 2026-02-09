
import React from 'react';

interface PromoVideoProps {
  videoUrl: string;
  onUpdateVideo: (newUrl: string) => void;
  isEditMode: boolean;
}

const PromoVideo: React.FC<PromoVideoProps> = ({ videoUrl, onUpdateVideo, isEditMode }) => {
  const getEmbedUrl = (url: string) => {
    if (!url || typeof url !== 'string') return '';
    
    // Regex that handles standard watch?v=, short youtu.be, and embed URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : '';
  };

  const handleVideoEdit = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.stopPropagation();
    const newUrl = prompt('Enter YouTube Video URL:', videoUrl);
    if (newUrl !== null && newUrl.trim() !== "") {
      onUpdateVideo(newUrl.trim());
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div 
        className={`relative group bg-slate-900 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-video w-full transition-all ${isEditMode ? 'ring-4 ring-blue-500/50' : ''}`}
      >
        {embedUrl ? (
          <iframe 
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title="Promotional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-10 text-center">
            <p className="font-bold text-xl">Video configuration pending...</p>
            <p className="text-sm mt-2 opacity-60">Click edit to provide a valid YouTube link.</p>
          </div>
        )}
        
        {isEditMode && (
          <div 
            onClick={handleVideoEdit}
            className="absolute inset-0 bg-blue-600/30 backdrop-blur-[2px] z-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="bg-white text-blue-600 px-8 py-4 rounded-full font-black shadow-2xl scale-95 group-hover:scale-100 transition-transform">
              Change Video
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromoVideo;
