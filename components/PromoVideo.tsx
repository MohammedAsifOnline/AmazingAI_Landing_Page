
import React from 'react';

interface PromoVideoProps {
  videoUrl: string;
  onUpdateVideo: (newUrl: string) => void;
  isEditMode: boolean;
}

const PromoVideo: React.FC<PromoVideoProps> = ({ videoUrl, onUpdateVideo, isEditMode }) => {
  const getVideoId = (url: string) => {
    if (!url || typeof url !== 'string') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|m\.youtube\.com\/watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  // Construct the best URL for app deep-linking (standard watch URL triggers app intent on mobile)
  const appUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : videoUrl;

  const handleVideoEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const newUrl = prompt('Enter a valid YouTube Video URL:', videoUrl);
    if (newUrl !== null && newUrl.trim() !== "") {
      onUpdateVideo(newUrl.trim());
    }
  };

  const handleInteraction = () => {
    if (isEditMode) return;
    window.open(appUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative group w-full max-w-5xl mx-auto">
      {/* Visual background glow */}
      <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-[4rem] group-hover:bg-blue-600/20 transition-all duration-700 opacity-50"></div>
      
      <div 
        className={`relative z-10 bg-slate-950 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[16px] border-white shadow-2xl aspect-video w-full transition-all duration-500 ${
          isEditMode ? 'ring-4 ring-blue-400' : 'hover:scale-[1.01]'
        }`}
      >
        <div 
          className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
          onClick={handleInteraction}
        >
          {/* Optimized Thumbnail - High quality fallback */}
          <div className="absolute inset-0 bg-slate-900">
             <img 
              src={videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"} 
              alt="Video Preview" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105 opacity-80"
              onError={(e) => {
                // Fallback to Unsplash if YouTube maxresdefault is missing
                e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200";
              }}
            />
          </div>
          
          {/* UI Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40">
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">A</div>
              <span className="text-white font-bold text-sm drop-shadow-md">Learn AI with Amazing AI</span>
            </div>

            {/* Centered Large Amazing AI Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/10 text-6xl md:text-9xl font-black uppercase tracking-tighter select-none">Amazing AI</span>
            </div>

            {/* Animated Play Button */}
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

            {/* Bottom UI Status Emulation */}
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
        
        {/* Editor Badge */}
        {isEditMode && (
          <button 
            onClick={handleVideoEdit}
            className="absolute top-6 right-6 z-50 bg-blue-600 text-white px-6 py-3 rounded-2xl font-black shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2 border border-blue-400"
          >
            <span>🎥</span>
            Update Link
          </button>
        )}
      </div>

      {/* Certification Badge Overlay */}
      <div className="absolute -bottom-4 right-8 z-20 hidden md:flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-xl border border-slate-100 transform group-hover:scale-105 transition-transform">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
        <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Verified Curriculum</span>
      </div>
    </div>
  );
};

export default PromoVideo;
