
import React from 'react';

interface PromoVideoProps {
  videoUrl: string;
  onUpdateVideo: (newUrl: string) => void;
  isEditMode: boolean;
}

const PromoVideo: React.FC<PromoVideoProps> = ({ videoUrl, onUpdateVideo, isEditMode }) => {
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
      let videoId = '';
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split(/[?#]/)[0];
      } else if (url.includes('youtube.com/watch')) {
        const urlObj = new URL(url);
        videoId = urlObj.searchParams.get('v') || '';
      } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('embed/')[1]?.split(/[?#]/)[0];
      }
      // Simpler embed string to avoid configuration errors (153)
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    } catch (e) {
      console.error("Failed to parse YouTube URL", e);
      return '';
    }
  };

  const handleVideoEdit = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.stopPropagation();
    const newUrl = prompt('Enter YouTube Video URL (e.g., https://youtu.be/Iz4huvnC-0M):', videoUrl);
    if (newUrl !== null && newUrl.trim() !== "") onUpdateVideo(newUrl);
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div 
        className={`relative group bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-video w-full transition-all ${isEditMode ? 'ring-4 ring-blue-500/50' : ''}`}
      >
        {embedUrl ? (
          <iframe 
            className="absolute inset-0 w-full h-full pointer-events-auto"
            src={embedUrl}
            title="Promotional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold p-10 text-center">
            Invalid or missing YouTube URL. Please update in Edit Mode.
          </div>
        )}
        
        {isEditMode && (
          <div 
            onClick={handleVideoEdit}
            className="absolute inset-0 bg-blue-600/30 backdrop-blur-[2px] z-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="bg-white text-blue-600 px-8 py-4 rounded-full font-black shadow-2xl scale-95 group-hover:scale-100 transition-transform">
              Edit Video URL
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromoVideo;
