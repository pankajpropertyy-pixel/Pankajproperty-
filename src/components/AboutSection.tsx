import React from 'react';
import { ShieldCheck, Compass, Award, Building, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="about-heading"
      className="py-24 sm:py-32 bg-[#0e1014] text-neutral-100 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c5a880]">
            <span>Architectural Pedigree</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2011</span>
          </div>
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-white">
            Crafting Residences of Distinction & Enduring Value
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            At <strong className="text-white font-medium">Pankaj Property</strong>, we bridge the boundary between visionary architecture and master construction. Every villa we develop is conceived as a livable work of art.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-[#14161a] border border-white/10">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#e6d8c3]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#121418] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-luxury text-white">
              Bespoke Modern Architecture
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              From cantilevered terraces to double-height glass pavilions, our designs maximize natural cross-breeze, organic sunlight, and panoramic vistas.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#121418] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-luxury text-white">
              Turnkey Construction Mastery
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              We execute our own structural engineering and interior joinery. Using bookmatched Italian marbles, seismic-tested structural frames, and German fittings.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#121418] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-luxury text-white">
              100% Title Transparency & Discretion
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Every property title undergoes multi-tiered legal vetting. We cater to high-net-worth buyers with strict client privacy and white-glove advisory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
