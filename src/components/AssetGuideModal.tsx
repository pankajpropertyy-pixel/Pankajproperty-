import React, { useRef, useState } from 'react';
import { X, Upload, Video, CheckCircle2, Copy, AlertCircle, FileVideo, Play, Sparkles } from 'lucide-react';

interface AssetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFileSelected: (file: File) => void;
  activeVideoSource: string;
  isCustomFileLoaded: boolean;
  customFileName: string | null;
}

export const AssetGuideModal: React.FC<AssetGuideModalProps> = ({
  isOpen,
  onClose,
  onFileSelected,
  activeVideoSource,
  isCustomFileLoaded,
  customFileName
}) => {
  const [copied, setCopied] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const targetPath = 'public/assets/hero-video.mp4';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(targetPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/') || file.name.endsWith('.mp4')) {
        onFileSelected(file);
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelected(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#121418] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/20">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif-luxury font-medium text-white">Hero Video Management & Setup</h3>
              <p className="text-xs text-neutral-400">Pankaj Property Cinematic Background</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Status Alert */}
          <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
            isCustomFileLoaded 
              ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' 
              : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
          }`}>
            {isCustomFileLoaded ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div className="text-sm">
              <div className="font-medium text-white">
                {isCustomFileLoaded 
                  ? `Active: ${customFileName} (Playing Live)`
                  : 'Hero Background: Apni MP4 Video Chunein'}
              </div>
              <p className="mt-1 text-xs opacity-90 leading-relaxed">
                {isCustomFileLoaded
                  ? 'Aapki MP4 video background me edge-to-edge loop me chal rahi hai aur browser me save ho chuki hai.'
                  : 'AI Studio chat me upload ki gayi video platform ke anusar seedha code folder me copy nahi hoti. Neeche diye gaye button se apni video chunein ya drag & drop karein, yeh turant live chalne lagegi!'}
              </p>
            </div>
          </div>

          {/* Option 1: Instant Local Playback (1-Click) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Method 1 · Instant 1-Click Video Connect (Immediate)</span>
              </span>
              <span className="text-xs text-neutral-400">Zero-Wait</span>
            </div>
            
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                dragActive 
                  ? 'border-[#c5a880] bg-[#c5a880]/10 scale-[1.01]' 
                  : 'border-white/15 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/quicktime,.mp4"
                className="hidden"
                onChange={handleFileInputChange}
              />
              <div className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#c5a880] mb-3">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-white">
                Apni uploaded <span className="text-[#c5a880]">MP4 Video file</span> yahan drag & drop karein
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                ya click karke file chunein. Yeh turant hero background me autoplay aur loop hone lagegi!
              </p>
              {isCustomFileLoaded && (
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                  <Play className="w-3 h-3 fill-emerald-300" />
                  Currently playing: {customFileName}
                </div>
              )}
            </div>
          </div>

          {/* Option 2: Permanent Deployment */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a880]">
                Method 2 · Permanent Deployment for All Visitors
              </span>
              <span className="text-xs text-neutral-400">Server File</span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Sabhi visitors ke liye video permanent karne ke liye apni video file ko project me is path par rakhein:
            </p>

            <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-neutral-200">
              <div className="flex items-center gap-2 truncate">
                <FileVideo className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-amber-200 font-semibold">{targetPath}</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors ml-2 shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Path</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            <Upload className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Select MP4 Now</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-xs transition-colors"
          >
            Done & View Website
          </button>
        </div>
      </div>
    </div>
  );
};
