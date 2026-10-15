import React, { useState } from 'react';
import { 
  MapPin, CheckCircle2, Phone, ArrowRight, ShieldCheck, 
  Sparkles, Trees, Maximize2, Download, ExternalLink, Calendar,
  Ruler, Zap, Droplets, Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

export const SunCityPlotsSection: React.FC = () => {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const posterImage = '/assets/suncity_plots.jpg';

  const whatsappMessage = encodeURIComponent(
    'Hello Pankaj Property, I am interested in Sun City Residential Plots at Arya Nagar / Kokha, Near IIT Bhilai, Durg. Please share plot sizes, rate per sq.ft, and site visit schedule.'
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`;

  const keyFeatures = [
    {
      icon: Compass,
      title: 'प्लान्ड रेसिडेंशियल प्लॉट्स',
      sub: 'Planned Residential Plots',
      desc: 'वास्तु अनुकूल, सटीक सीमांकन और सुव्यवस्थित प्लॉट कटिंग के साथ।'
    },
    {
      icon: Ruler,
      title: 'चौड़ी इंटरनल रोड (30 से 40 फीट)',
      sub: '30 Ft to 40 Ft Wide Roads',
      desc: '30 फीट एवं 40 फीट चौड़ी आरसीसी/डामर सुव्यवस्थित आंतरिक सड़कें और आधुनिक स्ट्रीट लाइट्स।'
    },
    {
      icon: Trees,
      title: 'हरियाली से भरपूर वातावरण',
      sub: 'Green & Serene Surroundings',
      desc: 'खुला, शांत और प्रदूषण मुक्त पर्यावरण जो आपके परिवार के स्वास्थ्य के लिए सर्वोत्तम है।'
    },
    {
      icon: ShieldCheck,
      title: 'व्यवस्थित टाउनशिप',
      sub: 'Secured Gated Township',
      desc: 'कवर्ड बाउंड्री वॉल, भव्य मुख्य प्रवेश द्वार और 24x7 सुरक्षा व्यवस्था।'
    },
    {
      icon: MapPin,
      title: 'दुर्ग में सुविधाजनक लोकेशन',
      sub: 'Prime Durg Location',
      desc: 'Arya Nagar / Kokha, IIT Bhilai और प्रमुख शैक्षणिक व व्यावसायिक केंद्रों के समीप।'
    },
    {
      icon: Droplets,
      title: 'पानी एवं बिजली की सुविधा',
      sub: 'Water & Electricity Ready',
      desc: 'तुरंत मकान निर्माण हेतु निर्बाध जलापूर्ति एवं विद्युत लाइन कनेक्टिविटी।'
    }
  ];

  const plotHighlights = [
    { label: 'लोकेशन', value: 'Arya Nagar / Kokha, IIT Bhilai के पास, दुर्ग' },
    { label: 'प्रॉपर्टी प्रकार', value: 'रेसिडेंशियल प्लॉट्स (Residential Plots)' },
    { label: 'रोड साइज', value: '30 फीट से 40 फीट चौड़ी आंतरिक सड़कें (30 Ft & 40 Ft Roads)' },
    { label: 'अमेनिटीज', value: 'चिल्ड्रन पार्क, गेटेड एंट्री, स्ट्रीट लाइट, 24x7 सिक्योरिटी' },
    { label: 'डेवलपर', value: 'Pankaj Property & Construction' },
    { label: 'संपर्क कार्यालय', value: 'Junwani Road, Bhilai (छ.ग.)' }
  ];

  return (
    <section 
      id="suncity-plots"
      aria-label="Sun City Residential Plots in Durg"
      className="py-24 sm:py-32 bg-[#0b0c0e] text-neutral-100 relative overflow-hidden border-t border-white/5 font-sans"
    >
      {/* Ambient twilight & warm golden glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Residential Project</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight leading-tight">
            🏡 Sun City – Residential Plots in Durg
          </h2>

          <p className="text-lg sm:text-xl text-[#e6d8c3] font-medium font-serif-luxury">
            अपने सपनों के घर की शुरुआत करें Sun City के साथ!
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300">
            <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
            <span>
              <strong>लोकेशन:</strong> Arya Nagar / Kokha, IIT Bhilai के पास, दुर्ग, छत्तीसगढ़।
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Sun City में अपने सपनों का घर बनाने के लिए रेसिडेंशियल प्लॉट्स के बारे में जानकारी प्राप्त करें। अपने परिवार के भविष्य और प्रॉपर्टी निवेश के लिए उपलब्ध सर्वोत्तम विकल्पों को जानें।
          </p>
        </div>

        {/* Master Showcase Layout: 2 Columns (Poster Card & Project Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Project Master Layout Poster */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4">
            <div className="relative group rounded-3xl overflow-hidden border border-white/15 bg-[#14161a] shadow-2xl shadow-black/80">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a880]/40 text-[#c5a880] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Planned Living · Better Location</span>
              </div>

              {/* Poster Image */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setImageModalOpen(true)}>
                <img
                  src={posterImage}
                  alt="Sun City Residential Plots Durg - Master Layout Poster"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs tracking-wide backdrop-blur-xs">
                  <Maximize2 className="w-5 h-5 text-[#c5a880]" />
                  <span>Click to View Full Master Plan</span>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="p-4 bg-[#181b22] border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Direct Site Visits Available Daily</span>
                </span>
                <button
                  type="button"
                  onClick={() => setImageModalOpen(true)}
                  className="inline-flex items-center gap-1 text-[#c5a880] hover:text-white font-semibold transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Zoom Poster</span>
                </button>
              </div>
            </div>

            {/* Direct Contact Calling Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#181b22] to-[#14161a] border border-[#c5a880]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-black/50">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Contact For Booking & Inquiry</span>
                <div className="text-xl font-bold text-white font-mono flex items-center justify-center sm:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#c5a880]" />
                  <span>7898343081</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:+917898343081"
                  className="px-4 py-2.5 rounded-xl bg-[#c5a880] hover:bg-[#b8986d] text-black font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black transition-all"
                  title="WhatsApp 7898343081"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Highlights, Specs & WhatsApp Lead Action */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8">
            {/* Quick Specs Table */}
            <div className="p-6 rounded-3xl bg-[#14161a] border border-white/10 shadow-xl space-y-4">
              <h3 className="text-xl font-serif-luxury text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c5a880]"></span>
                <span>Sun City - प्रोजेक्ट विवरण (Project Overview)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {plotHighlights.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-neutral-400 font-medium block">{item.label}</span>
                    <span className="text-white font-semibold block">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Key Highlights as requested by user */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880]">
                  ✨ प्रोजेक्ट की प्रमुख विशेषताएँ
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#14161a] border border-white/10 hover:border-[#c5a880]/40 transition-all space-y-2 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#c5a880] transition-colors">
                            {feat.title}
                          </h4>
                          <span className="text-[11px] text-[#c5a880]/80 font-medium block">
                            {feat.sub}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed pl-1">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Consultation / Site Visit Action Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#181b22] via-[#14161a] to-[#121418] border border-[#c5a880]/40 space-y-5 shadow-2xl">
              <div className="space-y-1">
                <h4 className="text-lg font-serif-luxury font-medium text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#c5a880]" />
                  <span>साइट विजिट व प्लॉट चयन के लिए संपर्क करें</span>
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  हमारे Junwani Road, Bhilai कार्यालय से फ्री साइट विजिट की सुविधा उपलब्ध है। अपनी पसंद का प्लॉट बुक करने के लिए आज ही संपर्क करें।
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* WhatsApp Action */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20 hover:scale-102"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>WhatsApp पर जानकारी प्राप्त करें</span>
                </a>

                {/* Direct Call Action */}
                <a
                  href="tel:+917898343081"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c5a880] hover:bg-[#b8986d] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#c5a880]/20 hover:scale-102"
                >
                  <Phone className="w-4 h-4" />
                  <span>कॉल करें: 7898343081</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Poster View */}
      {imageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setImageModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[95vh] bg-[#14161a] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3.5 bg-[#181b22] border-b border-white/10 flex items-center justify-between text-xs text-white">
              <span className="font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Sun City Residential Plots - Arya Nagar / Kokha, Near IIT Bhilai</span>
              </span>
              <button
                onClick={() => setImageModalOpen(false)}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white"
              >
                ✕ Close
              </button>
            </div>
            <div className="overflow-auto p-2 flex items-center justify-center max-h-[85vh]">
              <img
                src={posterImage}
                alt="Sun City Full Resolution Master Layout Poster"
                className="max-h-[82vh] w-auto object-contain rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
