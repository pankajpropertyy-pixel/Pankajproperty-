import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, CheckCircle2, Phone, ArrowRight, ShieldCheck, 
  Sparkles, Trees, Maximize2, Droplets, Lightbulb, 
  Layers, DoorOpen, Award, Calendar, Upload, Image as ImageIcon
} from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';
import { saveShreeShyamPoster, loadSavedShreeShyamPoster } from '../utils/posterStorage';

export const ShreeShyamViharSection: React.FC = () => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [posterImage, setPosterImage] = useState<string>('/assets/shree_shyam_vihar_new.jpg');
  const [customFileName, setCustomFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom saved poster if previously uploaded
  useEffect(() => {
    loadSavedShreeShyamPoster().then((saved) => {
      if (saved) {
        setPosterImage(saved.url);
        setCustomFileName(saved.fileName);
      }
    });
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await saveShreeShyamPoster(file);
      setPosterImage(url);
      setCustomFileName(file.name);
    } catch (err) {
      console.error('Failed to save custom poster to IndexedDB:', err);
      const tempUrl = URL.createObjectURL(file);
      setPosterImage(tempUrl);
      setCustomFileName(file.name);
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Pankaj Property, I am interested in Shree Shyam Vihar Residential Plots located in front of Milestone School, Arya Nagar / Kokha, Near IIT Bhilai, Durg. Please share plot sizes, rate per sq.ft, and site visit schedule.'
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`;

  const keyFeatures = [
    {
      icon: Layers,
      title: '🛣️ C.C. रोड',
      sub: 'Concrete Cement Roads',
      desc: 'व्यवस्थित आवागमन के लिए मजबूत व टिकाऊ सीमेंट कंक्रीट सड़कें (12M, 9M, 7.5M चौड़ी सड़कें)।'
    },
    {
      icon: Droplets,
      title: '💧 ड्रेनेज सिस्टम',
      sub: 'Planned Drainage System',
      desc: 'बारिश और घरेलू पानी के उचित निकास के लिए नियोजित अंडरग्राउंड जल निकासी व्यवस्था।'
    },
    {
      icon: ShieldCheck,
      title: '⚙️ STP एवं सीवरेज सिस्टम',
      sub: 'Eco-Friendly Sewerage Treatment',
      desc: 'पर्यावरण अनुकूल सीवरेज ट्रीटमेंट प्लांट और स्वच्छता का आधुनिक प्रबंध।'
    },
    {
      icon: DoorOpen,
      title: '🚪 ग्रैंड एंट्रेंस गेट',
      sub: 'Grand Designer Entrance Gate',
      desc: 'भव्य और आकर्षक मुख्य प्रवेश द्वार, सुरक्षा केबिन और वाटर फाउंटेन के साथ।'
    },
    {
      icon: Lightbulb,
      title: '💡 स्ट्रीट लाइट एवं इलेक्ट्रिफिकेशन',
      sub: 'Street Lighting & Full Electrification',
      desc: 'पूरी टाउनशिप में रोशनी के लिए आधुनिक स्ट्रीट लाइट्स एवं पूर्ण विद्युतीकरण।'
    },
    {
      icon: Trees,
      title: '🌳 लैंडस्केपिंग एवं गार्डन',
      sub: 'Landscaping & Central Green Park',
      desc: 'हरे-भरे उद्यान, बच्चों के लिए प्ले एरिया, गजीबो (Gazebo) और वॉकिंग ट्रैक।'
    },
    {
      icon: ShieldCheck,
      title: '🧱 बाउंड्री वॉल',
      sub: 'Secure Perimeter Boundary Wall',
      desc: 'पूरी टाउनशिप को सुरक्षित रखने के लिए कंक्रीट बाउंड्री वॉल और 24x7 निगरानी।'
    },
    {
      icon: Award,
      title: '🗺️ T&C / RERA अप्रूव्ड लेआउट',
      sub: 'RERA Approved Layout & Planning',
      desc: 'नियमों के अनुसार पूर्णतः अप्रूव्ड व विभिन्न आकारों (Custom Sizes) में उपलब्ध प्लॉट्स (1 से 50)।'
    }
  ];

  const plotHighlights = [
    { label: 'प्रोजेक्ट का नाम', value: 'Shree Shyam Vihar (श्री श्याम विहार)' },
    { label: 'प्रोजेक्ट पता (Address)', value: 'माइलस्टोन स्कूल के सामने (In front of Milestone School), Arya Nagar / Kokha, Near IIT Bhilai, Durg (C.G.)' },
    { label: 'प्रॉपर्टी प्रकार', value: 'रेसिडेंशियल प्लॉट्स (Custom Sizes Available)' },
    { label: 'स्वीकृति', value: 'T&C एवं RERA अप्रूव्ड लेआउट' },
    { label: 'सड़कें', value: '12.00M, 9.00M एवं 7.50M चौड़ी C.C. सड़कें' },
    { label: 'डेवलपर / कंसल्टेंट', value: 'Pankaj Property & Construction' },
    { label: 'संपर्क नंबर', value: '+91 78983 43081' }
  ];

  const galleryAmenities = [
    { title: 'Grand Entrance Gate', desc: 'ग्रैंड आर्किटेक्चरल प्रवेश द्वार व 24x7 सुरक्षा' },
    { title: 'Wide Roads', desc: '12M, 9M एवं 7.5M चौड़ी C.C. सड़कें' },
    { title: 'Green Park', desc: 'सेंट्रल गार्डन, गजीबो व वॉकिंग ट्रैक' },
    { title: 'Your Dream Home', desc: 'वास्तु अनुकूल प्रीमियम रेसिडेंशियल प्लॉट्स' },
    { title: 'Kids Play Area', desc: 'बच्चों के लिए सुरक्षित झूले एवं खेलकूद एरिया' }
  ];

  return (
    <section 
      id="shree-shyam-vihar"
      aria-label="Shree Shyam Vihar Residential Plots in Durg"
      className="py-24 sm:py-32 bg-[#0b0c0e] text-neutral-100 relative overflow-hidden border-t border-white/5 font-sans"
    >
      {/* Ambient twilight glow */}
      <div className="absolute top-1/4 right-1/3 w-[650px] h-[650px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>T&C · RERA Approved Residential Township</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight leading-tight">
            🏡 Shree Shyam Vihar – Residential Plots in Durg
          </h2>

          <p className="text-lg sm:text-xl text-[#e6d8c3] font-medium font-serif-luxury">
            सुकून भरा जीवन, सुरक्षित भविष्य! 🌿
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-200">
            <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
            <span>
              <strong>प्रोजेक्ट लोकेशन:</strong> माइलस्टोन स्कूल के सामने (In front of Milestone School), Arya Nagar / Kokha, Near IIT Bhilai, जिला दुर्ग, छत्तीसगढ़।
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Shree Shyam Vihar में अपने सपनों के घर की शुरुआत करें। अपने परिवार के लिए एक बेहतर जगह चुनें और अपने भविष्य के लिए प्लॉट खरीदने के विकल्पों की जानकारी प्राप्त करें।
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
                <span>RERA Approved · A Perfect Place</span>
              </div>

              {/* Poster Image */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setImageModalOpen(true)}>
                <img
                  src={posterImage}
                  alt="Shree Shyam Vihar Residential Plots Durg Master Layout Poster"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs tracking-wide backdrop-blur-xs">
                  <Maximize2 className="w-5 h-5 text-[#c5a880]" />
                  <span>Click to View Full Layout Poster</span>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="p-4 bg-[#181b22] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>In front of Milestone School · Daily Site Visits</span>
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setImageModalOpen(true)}
                    className="inline-flex items-center gap-1 text-[#c5a880] hover:text-white font-semibold transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#c5a880] hover:text-white transition-all cursor-pointer text-[11px]"
                    title="Upload / Change Image from your phone"
                  >
                    <Upload className="w-3 h-3" />
                    <span>{customFileName ? 'Change Image' : 'Upload File'}</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
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
                <span>Shree Shyam Vihar - प्रोजेक्ट विवरण (Project Overview)</span>
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

            {/* Key Highlights as requested by user */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a880]">
                  ✨ प्रोजेक्ट की प्रमुख विशेषताएँ (Key Highlights)
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

            {/* 5 Photo Gallery Amenities Showcase from Poster */}
            <div className="p-5 rounded-2xl bg-[#14161a] border border-white/10 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                <span>टाउनशिप सुविधाएं (Township Amenities)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {galleryAmenities.map((amenity, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center space-y-1">
                    <span className="block text-xs font-semibold text-white">{amenity.title}</span>
                    <span className="block text-[10px] text-neutral-400 font-light">{amenity.desc}</span>
                  </div>
                ))}
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
                  Shree Shyam Vihar में मनचाहा प्लॉट साइज चुनने, साइट विजिट बुक करने और टोकन बुकिंग के लिए नीचे दिए गए बटनों से संपर्क करें:
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
                <span>Shree Shyam Vihar - In front of Milestone School, Arya Nagar / Kokha, Near IIT Bhilai, Durg</span>
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
                alt="Shree Shyam Vihar Full Resolution Layout Poster"
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
