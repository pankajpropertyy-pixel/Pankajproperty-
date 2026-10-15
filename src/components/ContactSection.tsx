import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Property & Construction Inquiry',
    budget: 'Flexible',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Pankaj Property, my name is ${formData.name || 'a client'}. I would like to inquire about ${formData.inquiryType}.`
  )}`;

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32 bg-[#0b0c0e] text-neutral-100 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Concierge */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c5a880]">
                <span>Private Advisory</span>
                <span aria-hidden="true">·</span>
                <span>Direct Access</span>
              </div>
              <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-white">
                Initiate a Confidential Conversation
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Whether you wish to visit our Junwani Road office in Bhilai or discuss your property, construction, and development requirements, our senior directors are at your service.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#14161a] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#c5a880] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">Direct Inquiries</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="block text-sm sm:text-base font-medium text-white hover:text-[#c5a880] transition-colors mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#14161a] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#c5a880] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">Direct Contact & Call</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="block text-base sm:text-lg font-semibold text-white hover:text-[#c5a880] transition-colors mt-0.5 font-mono"
                  >
                    +91 78983 43081
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#14161a] border border-[#25D366]/30 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#25D366]/20 text-[#25D366] shrink-0">
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400">Official WhatsApp</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base sm:text-lg font-semibold text-white hover:text-[#25D366] transition-colors mt-0.5 font-mono"
                  >
                    +91 78983 43081
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#14161a] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#c5a880] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">Private Gallery Hours</span>
                  <p className="text-sm text-white mt-0.5">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#14161a] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#c5a880] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">Corporate Office & Experience Lounge</span>
                  <p className="text-base text-white font-medium mt-0.5 leading-relaxed">
                    Junwani Road, Bhilai, Chhattisgarh
                  </p>
                  <a
                    href="https://maps.google.com/?q=Junwani+Road+Bhilai+Chhattisgarh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#c5a880] hover:text-white transition-colors mt-1.5 font-medium underline underline-offset-4 decoration-[#c5a880]/50"
                  >
                    <span>View Location on Google Maps</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/15 to-transparent border border-[#25D366]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-[#25D366]/10">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-2">
                  <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                  <span>Instant WhatsApp Response (7898343081)</span>
                </h4>
                <p className="text-xs text-neutral-400">Speak directly with Pankaj Property concierge on WhatsApp.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs tracking-wide transition-all shadow-md shadow-[#25D366]/30 hover:scale-102 shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121418] border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif-luxury text-white">Thank You, {formData.name}</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="text-white">{formData.inquiryType}</strong> has been received. Our senior team will contact you via email or phone within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-serif-luxury text-white">Request a Private Consultation</h3>
                  <p className="text-xs text-neutral-400 mt-1">Please provide your details below.</p>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-300">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Singhania"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1c22] border border-white/10 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-neutral-300">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1c22] border border-white/10 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-neutral-300">Phone Number (with Country Code)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 00000"
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1c22] border border-white/10 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-neutral-300">Service of Interest</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1c22] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    >
                      <option value="Property & Construction Inquiry" className="bg-[#1a1c22]">Property & Construction Consultation</option>
                      <option value="Website Development Services" className="bg-[#1a1c22]">Website Development Services</option>
                      <option value="Office Visit - Junwani Road, Bhilai" className="bg-[#1a1c22]">Office Visit (Junwani Road, Bhilai)</option>
                      <option value="Architectural Design Consultation" className="bg-[#1a1c22]">Architectural Design Consultation</option>
                      <option value="Other Business Inquiry" className="bg-[#1a1c22]">Other Business Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-neutral-300">Timeline / Preference</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1c22] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    >
                      <option value="Immediate" className="bg-[#1a1c22]">Immediate (Within 1-2 weeks)</option>
                      <option value="1-3 Months" className="bg-[#1a1c22]">1–3 Months</option>
                      <option value="Exploring Options" className="bg-[#1a1c22]">Exploring Options</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-300">Message / Specific Requests</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please indicate your preferred timeline, bespoke requirements, or preferred tour dates..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1c22] border border-white/10 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#c5a880]/10 hover:shadow-[#c5a880]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Confidential Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
