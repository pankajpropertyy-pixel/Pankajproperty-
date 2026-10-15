import React, { useState } from 'react';
import { 
  MapPin, CheckCircle2, Phone, ArrowRight, ShieldCheck, 
  Sparkles, Trees, Maximize2, Shield, Award, Dumbbell, 
  Compass, Droplets, Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WallfortMangalamSection: React.FC = () => {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const posterImage = '/assets/wallfort_mangalam_city.jpg';

  const whatsappMessage = encodeURIComponent(
    'Hello Pankaj Property, I am interested in Wallfort Mangalam City Premium Residential Plots at Pulgaon Road, near CSIT, Durg. Please share plot sizes, rate per sq.ft, and site visit schedule.'
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`;

  const keyFeatures = [
    {
      icon: Compass,
      title: 'रेसिडेंशियल प्लॉट्स',
      sub: 'Premium Residential Plots',
      desc: 'वास्तु अनुरूप, तुरंत रजिस्ट्री व निर्माण हेतु पूर्णतः वैध एवं क्लीयर टाइटल प्लॉट्स।'
    },
    {
      icon: ShieldCheck,
      title: 'गेटेड टाउनशिप',
      sub: 'Secured Gated Community',
      desc: 'ग्रैंड आर्किटेक्चरल प्रवेश द्वार, बूम बैरियर, चारदीवारी और 24x7 सुरक्षा व्यवस्था।'
    },
    {
      icon: Trees,
      title: 'हरियाली से भरपूर वातावरण',
      sub: 'Lush Green Surroundings',
      desc: 'सुंदर लैंडस्केप्ड गार्डेन, वृक्षारोपण और शांत प्राकृतिक वातावरण।'
    },
    {
      icon: Award,
      title: '80+ सुविधाओं का दावा',
      sub: '80+ World-Class Amenities',
      desc: 'क्लब हाउस, स्पोर्ट्स एरिया, जॉगिंग ट्रैक, किड्स प्ले जोन एवं आधुनिक जीवनशैली की 80+ सुविधाएं।'
    },
    {
      icon: MapPin,
      title: 'Pulgaon Road, Durg में लोकेशन',
      sub: 'Near CSIT, Pulgaon Road',
      desc: 'दुर्ग शहर व सीएसआईटी कॉलेज के निकट, सुगम आवागमन व भविष्य में तेज प्रॉपर्टी ग्रोथ।'
    },
    {
      icon: Droplets,
      title: 'चौड़ी सड़कें, पानी व बिजली',
      sub: 'Wide Roads & Utilities Ready',
      desc: 'चौड़े इंटरनल रोड्स, स्ट्रीट लाइट्स, अंडरग्राउंड ड्रेनेज व सतत बिजली-पानी की व्यवस्था।'
    }
  ];

  const plotHighlights = [
    { label: 'प्रोजेक्ट का नाम', value: 'Wallfort Mangalam City' },
    { label: 'लोकेशन', value: 'Pulgaon Road, CSIT के पास, दुर्ग (छ.ग.)' },
    { label: 'प्लॉट प्रकार', value: 'प्रीमियम रेसिडेंशियल प्लॉट्स (Residential Plots)' },
    { label: 'विशेषता', value: 'गेटेड टाउनशिप · 80+ आधुनिक सुविधाएं' },
    { label: 'डेवलपर / कंसल्टेंट', value: 'Pankaj Property (7898343081)' },
    { label: 'कार्यालय', value: 'Junwani Road, Bhilai, Chhattisgarh' }
  ];

  return (
    <section 
      id="wallfort-mangalam"
      aria-label="Wallfort Mangalam City Residential Plots in Durg"
      className="py-24 sm:py-32 bg-[#0e1014] text-neutral-100 relative overflow-hidden border-t border-white/5 font-sans"
    >
      {/* Ambient twilight glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Gated Township</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight leading-tight">
            🏡 Wallfort Mangalam City – Premium Residential Plots
          </h2>

          <p className="text-lg sm:text-xl text-[#e6d8c3] font-medium font-serif-luxury">
            एक बेहतर लोकेशन, आपके सपनों के घर के लिए! ✨
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300">
            <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
            <span>
              <strong>लोकेशन:</strong> Pulgaon Road, CSIT के पास, दुर्ग, छत्तीसगढ़।
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Wallfort Mangalam City में अपने सपनों का घर बनाने के लिए रेसिडेंशियल प्लॉट्स के बारे में जानकारी प्राप्त करें। यह प्रोजेक्ट उन लोगों के लिए एक बेहतरीन विकल्प है जो अपने परिवार के लिए प्लॉट खरीदना या भविष्य के लिए प्रॉपर्टी में निवेश करना चाहते हैं।
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
                <span>Gated Township · 80+ Amenities</span>
              </div>

              {/* Poster Image */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setImageModalOpen(true)}>
                <img
                  src={posterImage}
                  alt="Wallfort Mangalam City Premium Residential Plots Durg"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs tracking-wide backdrop-blur-xs">
                  <Maximize2 className="w-5 h-5 text-[#c5a880]" />
                  <span>Click to View Full Poster</span>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="p-4 bg-[#181b22] border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Trusted Guidance · Immediate Site Visit</span>
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
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Pankaj Property Contact</span>
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
                <span>Wallfort Mangalam City - प्रोजेक्ट विवरण (Project Overview)</span>
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
                  🌟 प्रोजेक्ट की प्रमुख विशेषताएँ
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

            {/* Direct Consultation / Booking Action Box with EXACT buttons requested by user */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#181b22] via-[#14161a] to-[#121418] border border-[#c5a880]/40 space-y-5 shadow-2xl">
              <div className="space-y-1">
                <h4 className="text-lg font-serif-luxury font-medium text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#c5a880]" />
                  <span>📞 प्लॉट की जानकारी के लिए संपर्क करें (Pankaj Property)</span>
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Wallfort Mangalam City में अपनी पसंद का प्लॉट बुक करने और विशेष ऑफर्स जानने के लिए नीचे दिए गए बटनों से तुरंत संपर्क करें:
                </p>
              </div>

              {/* Exact Requested Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* 🟢 WhatsApp पर पूछताछ करें */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20 hover:scale-102"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>🟢 WhatsApp पर पूछताछ करें</span>
                </a>

                {/* 📞 अभी कॉल करें */}
                <a
                  href="tel:+917898343081"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#c5a880] hover:bg-[#b8986d] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#c5a880]/20 hover:scale-102"
                >
                  <Phone className="w-4 h-4" />
                  <span>📞 अभी कॉल करें (7898343081)</span>
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
                <span>Wallfort Mangalam City - Pulgaon Road, Near CSIT, Durg</span>
              </span>
              <button
                onClick={() => setImageModalOpen(false)}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <div className="overflow-auto p-2 flex items-center justify-center max-h-[85vh]">
              <img
                src={posterImage}
                alt="Wallfort Mangalam City Full Resolution Poster"
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
