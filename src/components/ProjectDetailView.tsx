import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Phone, MapPin, Bed, Bath, Maximize2, 
  Car, CheckCircle2, ChevronRight, Share2, Sparkles, Calendar,
  ShieldCheck, X, Image as ImageIcon
} from 'lucide-react';
import { PropertyProject } from '../types/property';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProjectDetailViewProps {
  project: PropertyProject;
  onBack: () => void;
  onBookTour: (project: PropertyProject) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onBookTour
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Dynamic SEO Title & Meta update for project detail view
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${project.name} | Pankaj Property`;

    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, [project]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    project.whatsappMessage || `Hello Pankaj Property, I would like to inquire about ${project.name}.`
  )}`;

  const currentImage = project.gallery[activeImageIndex] || {
    url: project.heroImage,
    caption: project.name,
    category: 'Exterior'
  };

  return (
    <article className="min-h-screen bg-[#0b0c0e] text-neutral-100 pt-24 pb-32 animate-fadeIn">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-white/10 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#c5a880] transition-colors font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Residences</span>
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-neutral-500">{project.propertyType}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#c5a880] font-medium">{project.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
              title="Share property link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{shareCopied ? 'Link Copied' : 'Share'}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-black font-semibold hover:bg-[#20ba59] transition-all shadow-sm shadow-[#25D366]/20"
              title="Chat on WhatsApp at 7898343081"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-black" />
              <span>WhatsApp: 7898343081</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title & Quick Pricing Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {project.featuredInHeroVideo && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured In Opening Hero Video</span>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-medium text-white tracking-tight">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <MapPin className="w-4 h-4 text-[#c5a880]" />
              <span>{project.location}, {project.city}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#c5a880]">{project.propertyType}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">{project.status}</span>
            </div>
            <p className="text-base text-neutral-300 font-light italic">
              "{project.tagline}"
            </p>
          </div>

          {/* Pricing & CTA Card */}
          <div className="p-6 rounded-2xl bg-[#14161a] border border-white/10 lg:w-96 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Offering Price
              </span>
              <div className="text-2xl sm:text-3xl font-serif-luxury font-medium text-white text-[#e6d8c3]">
                {project.priceFormatted}
              </div>
              {project.priceNote && (
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {project.priceNote}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => onBookTour(project)}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-xs tracking-wide transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Visit</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs tracking-wide hover:bg-[#20ba59] transition-all shadow-md shadow-[#25D366]/20"
                title="WhatsApp 7898343081"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* High-Resolution Gallery Viewer */}
        <section aria-label="Photo Gallery" className="space-y-4">
          <div 
            onClick={() => setLightboxOpen(true)}
            className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-zoom-in bg-black group border border-white/10 shadow-2xl"
          >
            <img
              src={currentImage.url}
              alt={currentImage.caption}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption & Counter */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-wider text-[#c5a880] font-medium">
                  {currentImage.category} View
                </span>
                <p className="text-sm sm:text-base text-white font-serif-luxury font-medium drop-shadow">
                  {currentImage.caption}
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs text-neutral-300 border border-white/15 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{activeImageIndex + 1} / {project.gallery.length}</span>
              </div>
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                  activeImageIndex === idx
                    ? 'border-[#c5a880] ring-2 ring-[#c5a880]/30 scale-[1.02]'
                    : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Specifications & Key Dimension Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#14161a] border border-white/10">
          <div className="flex items-center gap-3.5 p-3">
            <div className="p-3 rounded-xl bg-white/5 text-[#c5a880]">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Built-Up Area</span>
              <div className="text-base sm:text-lg font-serif-luxury font-semibold text-white">
                {project.builtUpAreaSqFt.toLocaleString()} sq.ft
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3">
            <div className="p-3 rounded-xl bg-white/5 text-[#c5a880]">
              <Bed className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Bedrooms</span>
              <div className="text-base sm:text-lg font-serif-luxury font-semibold text-white">
                {project.bedrooms} Master Suites
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3">
            <div className="p-3 rounded-xl bg-white/5 text-[#c5a880]">
              <Bath className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Bathrooms</span>
              <div className="text-base sm:text-lg font-serif-luxury font-semibold text-white">
                {project.bathrooms} Luxury Baths
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3">
            <div className="p-3 rounded-xl bg-white/5 text-[#c5a880]">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Covered Parking</span>
              <div className="text-base sm:text-lg font-serif-luxury font-semibold text-white">
                {project.carParks} Vehicles
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Description & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
              Architectural Narrative & Vision
            </h2>
            <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-base">
              {project.fullDescription.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-serif-luxury text-white">
                Signature Features & Living Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14161a] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Inquiry Box */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#14161a] border border-[#c5a880]/30 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Private Concierge</h4>
                  <p className="text-xs text-neutral-400">Direct consultation for {project.name}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Representative:</span>
                  <span className="font-medium text-white">{COMPANY_INFO.brandName} Desk</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Direct Line:</span>
                  <span className="font-mono text-white">{COMPANY_INFO.phoneFormatted}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Email:</span>
                  <span className="font-mono text-white">{COMPANY_INFO.email}</span>
                </div>
              </div>

              <button
                onClick={() => onBookTour(project)}
                className="w-full py-3 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-xs tracking-wide transition-colors"
              >
                Request Floor Plan & Private Viewing
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs hover:bg-[#20ba59] transition-all shadow-md shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black" />
                <span>Chat Instantly on WhatsApp: 7898343081</span>
              </a>
            </div>
          </div>
        </div>

        {/* Amenities & Specifications Detailed Grid */}
        <div className="pt-10 border-t border-white/10 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white mb-6">
              Curated Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.amenities.map((cat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#14161a] border border-white/10 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c5a880]">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Construction & Material Specifications */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white mb-6">
              Engineering & Material Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.specifications.map((spec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#14161a] border border-white/5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <span className="text-xs font-semibold text-[#c5a880] uppercase tracking-wider sm:w-1/3">
                    {spec.label}
                  </span>
                  <span className="text-xs text-neutral-300 sm:w-2/3 leading-relaxed">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Landmarks & Distances */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white mb-6">
              Location & Strategic Proximity
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.nearbyLandmarks.map((landmark, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#14161a] border border-white/10 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold">
                      {landmark.type}
                    </span>
                    <h4 className="text-xs sm:text-sm font-medium text-white mt-0.5">
                      {landmark.name}
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-xs font-semibold text-white font-mono">{landmark.distance}</span>
                    <span className="text-[11px] text-neutral-400">{landmark.travelTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Properties</span>
          </button>

          <button
            onClick={() => onBookTour(project)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black text-xs font-semibold transition-colors"
          >
            <span>Inquire About {project.name}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
        >
          <div className="flex items-center justify-between text-white">
            <span className="text-sm font-serif-luxury">{currentImage.caption}</span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center py-4">
            <img
              src={currentImage.url}
              alt={currentImage.caption}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {project.gallery.map((g, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`w-14 h-10 rounded-md overflow-hidden border ${
                  activeImageIndex === idx ? 'border-[#c5a880] ring-2 ring-[#c5a880]' : 'border-white/20 opacity-60'
                }`}
              >
                <img src={g.url} alt={g.caption} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
