import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Bed, Bath, Maximize2, MapPin, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PropertyProject } from '../types/property';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProjectsSectionProps {
  projects: PropertyProject[];
  onSelectProject: (project: PropertyProject) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const propertyTypes = ['All', 'Ultra-Luxury Villa', 'Architectural Estate', 'Modern Penthouse', 'Bespoke Haven'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesType = selectedType === 'All' || project.propertyType === selectedType;
      const matchesQuery =
        searchQuery.trim() === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.propertyType.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [projects, selectedType, searchQuery]);

  const handleWhatsAppEnquiry = (e: React.MouseEvent, project: PropertyProject) => {
    e.stopPropagation();
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
      project.whatsappMessage || `Hello Pankaj Property, I would like to inquire about ${project.name}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="projects" 
      aria-labelledby="projects-heading"
      className="py-24 sm:py-32 bg-[#0b0c0e] relative text-neutral-100 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c5a880]">
              <span>Curated Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Pankaj Property</span>
            </div>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-white">
              Architectural Residences & Estates
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Explore our collection of private villas and custom residences. Designed with natural stone, floor-to-ceiling glass, and tranquil waterscapes.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-mono self-start md:self-end">
            Showing {filteredProjects.length} of {projects.length} curated residences
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#14161a] rounded-xl border border-white/10 w-fit">
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedType === type
                    ? 'bg-[#c5a880] text-black shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full pl-9 pr-4 py-2 bg-[#14161a] border border-white/10 rounded-xl text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880]/70 transition-colors"
            />
          </div>
        </div>

        {/* Notice for Configurable Data */}
        <div className="mb-8 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>
              Sample placeholder portfolio. Easily customize or add real properties in <code className="text-neutral-200 font-mono">src/data/properties.ts</code>.
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#121418] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.heroImage}
                  alt={`${project.name} - ${project.propertyType} by Pankaj Property`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Hero Video Match Tag */}
                {project.featuredInHeroVideo && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#c5a880]/40 text-[#c5a880] text-[11px] font-semibold tracking-wide">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured in Hero Video</span>
                  </div>
                )}

                {/* Price Label (Floating Elegant Display) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                      Starting From
                    </div>
                    <div className="text-xl sm:text-2xl font-serif-luxury font-medium text-white drop-shadow">
                      {project.priceFormatted}
                    </div>
                  </div>

                  <span className="text-xs text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-[#c5a880] font-medium tracking-wide">
                    <span>{project.propertyType}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <MapPin className="w-3 h-3 text-[#c5a880]" />
                      {project.location}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-serif-luxury font-medium text-white group-hover:text-[#c5a880] transition-colors mt-2">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-sm text-neutral-400 line-clamp-2 font-light leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Property Key Specs Row */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-300">
                  <div className="flex items-center gap-1.5" title="Bedrooms">
                    <Bed className="w-4 h-4 text-[#c5a880]" />
                    <span>{project.bedrooms} Suites</span>
                  </div>

                  <div className="flex items-center gap-1.5" title="Bathrooms">
                    <Bath className="w-4 h-4 text-[#c5a880]" />
                    <span>{project.bathrooms} Baths</span>
                  </div>

                  <div className="flex items-center gap-1.5" title="Built-up Area">
                    <Maximize2 className="w-4 h-4 text-[#c5a880]" />
                    <span>{project.builtUpAreaSqFt.toLocaleString()} sq.ft</span>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-2 flex items-center gap-3">
                  {/* View Details Primary Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#c5a880] text-white hover:text-black text-xs font-semibold tracking-wide transition-all group/btn"
                  >
                    <span>View Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  {/* WhatsApp Enquiry Button */}
                  <button
                    onClick={(e) => handleWhatsAppEnquiry(e, project)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 text-xs font-semibold transition-all"
                    title={`Send WhatsApp inquiry for ${project.name} to 7898343081`}
                    aria-label={`WhatsApp enquiry for ${project.name}`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search Result Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#121418] rounded-2xl border border-white/10 p-8 space-y-3">
            <p className="text-lg font-serif-luxury text-white">No properties match your current filter.</p>
            <p className="text-xs text-neutral-400">Try searching for a different keyword or reset the category filter.</p>
            <button
              onClick={() => {
                setSelectedType('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-xs text-white rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
