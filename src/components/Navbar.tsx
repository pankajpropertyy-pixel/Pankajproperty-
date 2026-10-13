import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  currentSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  currentSection = 'home'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Projects', target: 'projects' },
    { label: 'Featured Villa', target: 'featured-villa' },
    { label: 'About Us', target: 'about' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Pankaj Property, I am interested in exploring your luxury villa projects.'
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0b0c0e]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] rounded-lg"
            aria-label="Pankaj Property Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c5a880] to-[#8f7551] flex items-center justify-center text-black shadow-lg shadow-black/40 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-serif-luxury font-bold tracking-tight text-white group-hover:text-[#c5a880] transition-colors">
                PANKAJ PROPERTY
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880]/90 font-medium">
                Real Estate & Construction
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className={`text-sm tracking-wide font-medium transition-colors hover:text-[#c5a880] ${
                  currentSection === link.target
                    ? 'text-[#c5a880] underline underline-offset-8 decoration-1 decoration-[#c5a880]'
                    : 'text-neutral-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons - 100% Client Facing */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Direct CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20ba59] text-black shadow-md shadow-[#25D366]/20 transition-all hover:scale-102"
              aria-label="WhatsApp Pankaj Property at 7898343081"
            >
              <WhatsAppIcon className="w-4 h-4 fill-black text-black" />
              <span>WhatsApp</span>
            </a>

            {/* Inquire CTA with phone */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              title="Call 7898343081"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="font-mono">7898343081</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#c5a880] rounded-lg bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-left text-xl font-serif-luxury text-white hover:text-[#c5a880] transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366] text-black text-sm font-semibold shadow-lg shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-4 h-4 fill-black text-black" />
              <span>WhatsApp: 7898343081</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/10 text-white text-sm font-semibold border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#c5a880]" />
              <span>Call: 7898343081</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
