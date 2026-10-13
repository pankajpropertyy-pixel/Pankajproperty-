import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Building } from 'lucide-react';
import { PropertyProject } from '../types/property';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: PropertyProject | null;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose, project }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [tourType, setTourType] = useState<'in-person' | 'virtual'>('in-person');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Pankaj Property, I would like to schedule a ${tourType} tour for ${project?.name || 'your villa'} on ${preferredDate || 'an upcoming date'}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#121418] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#c5a880]/15 text-[#c5a880]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif-luxury text-white">Private Residence Tour</h3>
              <p className="text-xs text-neutral-400">
                {project ? project.name : 'Pankaj Property Luxury Showcase'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif-luxury text-white">Tour Request Confirmed</h4>
              <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-white">{name}</strong>. A dedicated Pankaj Property concierge will contact you at <strong className="text-white">{phone}</strong> to confirm your viewing schedule for {project?.name}.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-xl bg-[#c5a880] text-black font-semibold text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-neutral-300">Tour Format</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTourType('in-person')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors ${
                      tourType === 'in-person'
                        ? 'bg-[#c5a880] text-black border-[#c5a880] font-semibold'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    Private On-Site Visit
                  </button>
                  <button
                    type="button"
                    onClick={() => setTourType('virtual')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors ${
                      tourType === 'virtual'
                        ? 'bg-[#c5a880] text-black border-[#c5a880] font-semibold'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    Live 4K Virtual Walkthrough
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-neutral-300">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c22] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-300">Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c22] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-300">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c22] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-neutral-300">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c22] border border-white/10 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Confirm Tour Booking
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs transition-all shadow-md shadow-[#25D366]/20 hover:bg-[#20ba59]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>Book via WhatsApp: 7898343081</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
