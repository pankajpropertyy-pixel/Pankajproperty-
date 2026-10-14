import React from 'react';
import { 
  Code2, Smartphone, Zap, Shield, Award
} from 'lucide-react';
import { WebsiteInquiryForm } from './WebsiteInquiryForm';

interface WebDevInquirySectionProps {
  onOpenDashboard?: () => void;
}

export const WebDevInquirySection: React.FC<WebDevInquirySectionProps> = ({
  onOpenDashboard
}) => {
  return (
    <section 
      id="website-development"
      aria-label="Website Development Inquiry"
      className="py-24 sm:py-32 bg-[#0b0c0e] text-neutral-100 border-t border-white/5 relative overflow-hidden font-sans"
    >
      {/* Subtle luxury ambient gold and twilight glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold tracking-widest uppercase shadow-xs">
            <Code2 className="w-3.5 h-3.5" />
            <span>Website Development Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Transform Your Vision into a High-Converting Website
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Whether you need a modern business landing page, an e-commerce catalog, a real estate showcase, or a personal brand portfolio — we craft responsive, lightning-fast websites engineered to accelerate your growth.
          </p>
        </div>

        {/* Feature Badges Grid - Luxury Dark Card Aesthetic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 shadow-lg flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 text-[#c5a880] shrink-0 border border-white/5">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-white">100% Mobile Ready</span>
              <span className="block text-[11px] text-neutral-400">iOS & Android optimized</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 shadow-lg flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 text-[#c5a880] shrink-0 border border-white/5">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-white">Ultra-Fast Speed</span>
              <span className="block text-[11px] text-neutral-400">Instant page loads</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 shadow-lg flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 text-[#c5a880] shrink-0 border border-white/5">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-white">Free SSL & Security</span>
              <span className="block text-[11px] text-neutral-400">Bank-grade encryption</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 shadow-lg flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 text-[#c5a880] shrink-0 border border-white/5">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-white">Custom Domain Setup</span>
              <span className="block text-[11px] text-neutral-400">Turnkey deployment</span>
            </div>
          </div>
        </div>

        {/* The Inquiry Form Container */}
        <div className="pt-2">
          <WebsiteInquiryForm onViewInquiries={onOpenDashboard} />
        </div>
      </div>
    </section>
  );
};
