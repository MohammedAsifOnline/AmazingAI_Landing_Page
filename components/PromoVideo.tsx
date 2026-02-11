
import React, { useState } from 'react';

interface PromoVideoProps {
  videoUrl: string;
  logoUrl?: string;
}

const PromoVideo: React.FC<PromoVideoProps> = ({ videoUrl, logoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoId = (url: string) => {
    if (!url || typeof url !== 'string') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|m\.youtube\.com\/watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  const isDirectVideo = videoUrl.toLowerCase().endsWith('.mp4');
  const defaultLogo = "https://www.etrades.in/wp-content/uploads/2026/02/Amazing_AI_logo_small-1.png";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative group w-full max-w-5xl mx-auto">
      {/* Background glow effect */}
      <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-[4rem] group-hover:bg-blue-600/20 transition-all duration-700 opacity-50"></div>
      
      {/* Main Container */}
      <div 
        className="relative z-10 bg-slate-950 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[16px] border-white shadow-2xl aspect-video w-full transition-all duration-500 hover:scale-[1.01]"
      >
        {isPlaying ? (
          <div className="w-full h-full bg-black">
            {videoId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="AmazingAI Promo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : isDirectVideo ? (
              <video 
                className="w-full h-full object-contain" 
                controls 
                autoPlay 
                src={videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center h-full text-white px-6 text-center">
                Video format not supported for inline playback.
              </div>
            )}
          </div>
        ) : (
          /* Preview UI */
          <div 
            className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
            onClick={handlePlayClick}
          >
            <div className="absolute inset-0 bg-slate-900">
               <img 
                src={videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"} 
                alt="Video Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105 opacity-80"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40">
              {/* Overlay Content */}
              <div className="absolute top-6 left-8 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                  <img src={logoUrl || defaultLogo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-white font-bold text-sm drop-shadow-md">Learn AI with Amazing AI</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/10 text-6xl md:text-9xl font-black uppercase tracking-tighter select-none">Amazing AI</span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping scale-150"></div>
                  <div className="relative w-24 h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover/thumb:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-blue-600 translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4v16l13-8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                  <span className="text-white/80 text-xs font-black tracking-widest uppercase">HD Available</span>
                </div>
                <div className="flex gap-3">
                   <div className="w-8 h-1 bg-white/40 rounded-full"></div>
                   <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                   <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-4 right-8 z-20 hidden md:flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-xl border border-slate-100 transform group-hover:scale-105 transition-transform">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
        <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Verified Curriculum</span>
      </div>
    </div>
  );
};

export default PromoVideo;
