import React from 'react';
import { Building2, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenOwnerGuide?: () => void;
  isAdminMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onOpenOwnerGuide,
  isAdminMode = false 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] text-neutral-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#c5a880] flex items-center justify-center text-black">
                <Building2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="block text-base font-serif-luxury font-bold text-white tracking-tight">
                  PANKAJ PROPERTY
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-[#c5a880]">
                  Real Estate & Construction
                </span>
              </div>
            </div>
            <p className="text-neutral-400 font-light leading-relaxed text-xs">
              Bespoke luxury residences, private swimming pool villas, and architectural landmarks built with meticulous attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-white font-serif-luxury text-sm font-medium">Navigation</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Cinematic Hero Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
                  Featured Residences
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('website-development')} className="hover:text-white transition-colors text-blue-400">
                  Build Your Website (Inquiry)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Pankaj Property
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Confidential Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Search & Sitemap */}
          <div className="space-y-3">
            <div className="text-white font-serif-luxury text-sm font-medium">Search & Transparency</div>
            <ul className="space-y-2">
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  XML Sitemap
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Search Engine Robots.txt
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('inquiries')} className="text-blue-400 hover:underline">
                  Client Inquiries Dashboard (Owner)
                </button>
              </li>
              {isAdminMode && onOpenOwnerGuide && (
                <li>
                  <button onClick={onOpenOwnerGuide} className="text-[#c5a880] hover:underline">
                    Owner Media Settings
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <div className="text-white font-serif-luxury text-sm font-medium">Direct Inquiries</div>
            <p className="text-neutral-300 font-mono text-xs">
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#c5a880] transition-colors">
                Call: {COMPANY_INFO.phoneFormatted}
              </a>
            </p>
            <p className="text-[#25D366] text-xs">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Pankaj Property, I want to inquire about your luxury properties.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline font-mono"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>WhatsApp: 7898343081</span>
              </a>
            </p>
            <p className="text-neutral-300 text-xs">{COMPANY_INFO.email}</p>
            <p className="text-neutral-400 text-[11px] leading-relaxed flex items-start gap-1">
              <span className="text-[#c5a880]">Office:</span>
              <span>{COMPANY_INFO.address}</span>
            </p>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              {COMPANY_INFO.hours}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName} All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Modern Living · Better Future</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors flex items-center gap-1"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
