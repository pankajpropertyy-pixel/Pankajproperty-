import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, ArrowRight, Phone, ChevronDown } from 'lucide-react';

interface HeroVideoProps {
  videoSource: string;
  onExploreProjects: () => void;
  onContactUs: () => void;
  isAdminMode?: boolean;
  onOpenVideoGuide?: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  videoSource,
  onExploreProjects,
  onContactUs,
  isAdminMode = false,
  onOpenVideoGuide
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Cinematic slideshow slides (mirroring the video scenes: dusk villa, lawn, living salon, kitchen, pool)
  const [slideIndex, setSlideIndex] = useState(0);
  const fallbackSlides = [
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
      label: 'Villa Dusk Panorama & Pool'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
      label: 'Manicured Lawn & Outdoor Terrace'
    },
    {
      url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85',
      label: 'Double-Height Marble Living Salon'
    },
    {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=85',
      label: 'Private Waterfall Infinity Pool'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
      label: 'Master Suite Sunset Balcony'
    }
  ];

  // Rotate fallback slides smoothly if video is not actively streaming
  useEffect(() => {
    if (videoLoaded && !videoError) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % fallbackSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [videoLoaded, videoError, fallbackSlides.length]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Autoplay attempt whenever videoSource changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoError(false);
    setVideoLoaded(false);

    // Explicitly set DOM muted properties to pass strict browser autoplay policies
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    if (prefersReducedMotion) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setVideoLoaded(true);
        })
        .catch((error) => {
          console.warn('Autoplay waiting for user gesture or source load:', error);
          setIsPlaying(false);
        });
    }
  }, [videoSource, prefersReducedMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section 
      id="home"
      aria-label="Cinematic Showcase"
      className="relative w-full h-screen min-h-[640px] max-h-[1200px] overflow-hidden flex items-end pb-16 sm:pb-20 md:pb-24 bg-[#0a0a0c]"
    >
      {/* Background Video Element - Completely Pure & Seamless */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
        <video
          ref={videoRef}
          src={videoSource}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          onLoadedData={() => {
            setVideoLoaded(true);
            setVideoError(false);
          }}
          onCanPlay={() => {
            setVideoLoaded(true);
            setVideoError(false);
          }}
          onError={() => {
            setVideoError(true);
          }}
          className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={videoSource} type="video/mp4" />
          <source src="/assets/hero-video.mp4.mp4" type="video/mp4" />
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Animated Slideshow Backdrop when video is pending or loading */}
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 w-full h-full bg-[#0d0f14] overflow-hidden">
            {fallbackSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  slideIndex === idx ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.url}
                  alt={slide.label}
                  className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
                />
              </div>
            ))}
          </div>
        )}

        {/* Sophisticated Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/35 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container - Pure Client-Facing Luxury Presentation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 animate-fadeIn">
          {/* Brand Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#c5a880]/30 text-white text-xs">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-ping" />
            <span className="font-medium tracking-wider uppercase text-[#c5a880]">
              Cinematic Architectural Showcase
            </span>
            <span className="text-white/40">·</span>
            <span className="text-neutral-300">Modern Living · Better Future</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-medium text-white tracking-tight leading-[1.08] drop-shadow-md">
              Your Dream Home <br />
              <span className="italic font-normal text-[#e6d8c3]">Awaits.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-200/90 font-light leading-relaxed max-w-xl drop-shadow">
              Architectural luxury residences, private waterfall swimming pools, and bespoke sanctuaries crafted by <strong className="font-semibold text-white">Pankaj Property</strong>.
            </p>
          </div>

          {/* Clean Client Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary: Explore Projects */}
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#c5a880] hover:bg-[#b8986d] text-black font-semibold text-sm tracking-wide shadow-xl shadow-[#c5a880]/20 hover:shadow-[#c5a880]/30 transition-all hover:scale-102 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary: Contact Us */}
            <button
              onClick={onContactUs}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm tracking-wide backdrop-blur-md border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone className="w-4 h-4 text-[#c5a880]" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Only shown if explicitly in admin preview mode */}
          {isAdminMode && onOpenVideoGuide && (
            <div className="pt-2">
              <button
                onClick={onOpenVideoGuide}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs text-[#c5a880] hover:text-white"
              >
                <span>Owner Video Tool (Hidden from Clients)</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Luxury Minimalist Controls Dock in Bottom-Right Corner (Audio & Playback Only) */}
      <div className="absolute right-4 sm:right-8 bottom-6 sm:bottom-8 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-1.5 rounded-full shadow-2xl">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="p-2 text-white hover:text-[#c5a880] transition-colors rounded-full hover:bg-white/10"
          title={isPlaying ? 'Pause Video' : 'Play Video'}
          aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
        </button>

        {/* Audio Mute/Unmute */}
        <button
          onClick={toggleMute}
          className="p-2 text-white hover:text-[#c5a880] transition-colors rounded-full hover:bg-white/10"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div 
        onClick={onExploreProjects}
        className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 z-10 flex flex-col items-center gap-1 cursor-pointer text-white/50 hover:text-white transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
