import React, { useState, useEffect } from 'react';
import { 
  X, Download, Trash2, Phone, Mail, 
  MapPin, Globe, Search, UserCheck
} from 'lucide-react';
import { ClientInquiry } from '../types/inquiry';
import { 
  getStoredInquiries, 
  updateInquiryStatus, 
  deleteInquiry, 
  exportInquiriesAsCSV 
} from '../services/inquiryStorage';

interface InquiriesDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesDashboardModal: React.FC<InquiriesDashboardModalProps> = ({
  isOpen,
  onClose
}) => {
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<ClientInquiry | null>(null);

  const loadData = () => {
    setInquiries(getStoredInquiries());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => loadData();
    window.addEventListener('inquiry-stored', handleUpdate);
    return () => window.removeEventListener('inquiry-stored', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const filtered = inquiries.filter((item) => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.fullName.toLowerCase().includes(q) ||
      item.mobileNumber.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.address.toLowerCase().includes(q) ||
      (item.websiteType && item.websiteType.toLowerCase().includes(q));
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id: string, newStatus: ClientInquiry['status']) => {
    updateInquiryStatus(id, newStatus);
    loadData();
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry record?')) {
      deleteInquiry(id);
      loadData();
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl h-[90vh] max-h-[850px] bg-[#121418] rounded-3xl shadow-2xl shadow-black/90 border border-white/10 overflow-hidden flex flex-col text-neutral-100 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 bg-[#14161a] flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880] animate-pulse"></span>
              <h3 className="text-xl font-serif-luxury font-medium text-white">
                Client Inquiries Dashboard
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 font-bold text-xs">
                {inquiries.length} Total
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-light">
              Securely stored inquiries with client details, phone numbers, budgets, and project specifications.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportInquiriesAsCSV}
              disabled={inquiries.length === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#c5a880] border border-white/15 text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer"
              title="Download inquiries as Excel/CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close dashboard"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-[#14161a]/70 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client name, mobile, email, or city..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-white/15 text-xs sm:text-sm text-white bg-[#181b22] placeholder-neutral-500 focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400 font-medium">Status:</span>
            {['all', 'new', 'contacted', 'in-progress', 'completed'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-colors cursor-pointer ${
                  filterStatus === st
                    ? 'bg-[#c5a880] text-black shadow-sm font-semibold'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Content: Split List and Detail */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Left Table / List */}
          <div className="md:col-span-6 lg:col-span-5 overflow-y-auto divide-y divide-white/5 h-full bg-[#121418]">
            {filtered.length === 0 ? (
              <div className="p-8 text-center text-neutral-400 text-sm font-light">
                No inquiries match your current search or filter.
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedInquiry(item)}
                  className={`p-4 transition-all cursor-pointer hover:bg-white/[0.03] ${
                    selectedInquiry?.id === item.id ? 'bg-[#c5a880]/10 border-l-4 border-[#c5a880]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-sm text-white">{item.fullName}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        item.status === 'new'
                          ? 'bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880]/30'
                          : item.status === 'contacted'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : item.status === 'in-progress'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-neutral-300 space-y-0.5">
                    <div className="flex items-center gap-1 font-mono text-neutral-300">
                      <Phone className="w-3 h-3 text-[#c5a880] shrink-0" />
                      <span>{item.mobileNumber}</span>
                    </div>
                    {item.websiteType && (
                      <div className="flex items-center gap-1 text-[#c5a880] font-medium">
                        <Globe className="w-3 h-3 shrink-0" />
                        <span>{item.websiteType}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="truncate max-w-[180px]">{item.address}</span>
                    <span className="font-mono">{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Detail Pane */}
          <div className="md:col-span-6 lg:col-span-7 overflow-y-auto p-6 bg-[#0e1014]/50">
            {selectedInquiry ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-start justify-between pb-4 border-b border-white/10">
                  <div>
                    <h4 className="text-xl font-serif-luxury font-medium text-white">
                      {selectedInquiry.fullName}
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5">
                      Submitted on: {new Date(selectedInquiry.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={selectedInquiry.status}
                      onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value as any)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/15 bg-[#181b22] text-white focus:outline-none focus:border-[#c5a880] cursor-pointer"
                    >
                      <option value="new" className="bg-[#14161a]">Status: New</option>
                      <option value="contacted" className="bg-[#14161a]">Status: Contacted</option>
                      <option value="in-progress" className="bg-[#14161a]">Status: In Progress</option>
                      <option value="completed" className="bg-[#14161a]">Status: Completed</option>
                    </select>

                    <button
                      onClick={() => handleDelete(selectedInquiry.id)}
                      className="p-1.5 text-neutral-400 hover:text-red-400 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Direct Action Chips */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${selectedInquiry.mobileNumber}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-xs transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Client</span>
                  </a>

                  <a
                    href={`https://wa.me/${selectedInquiry.mobileNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
                      `Hello ${selectedInquiry.fullName}, thank you for contacting Pankaj Property regarding your ${selectedInquiry.websiteType || 'website'} project. How can we assist you?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs shadow-md transition-all"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(
                      `Regarding Your Website Development Inquiry - ${selectedInquiry.websiteType || 'Custom Project'}`
                    )}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-all border border-white/10"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Mobile Number</span>
                    <p className="text-sm font-semibold text-white font-mono">{selectedInquiry.mobileNumber}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Email Address</span>
                    <p className="text-sm font-semibold text-white break-all">{selectedInquiry.email}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Occupation</span>
                    <p className="text-sm font-semibold text-white">
                      {selectedInquiry.occupation || <span className="text-neutral-500 italic font-normal">Not Provided</span>}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Budget Range</span>
                    <p className="text-sm font-semibold text-[#c5a880]">
                      {selectedInquiry.budget || <span className="text-neutral-500 italic font-normal">Not Decided / Skipped</span>}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 space-y-1 sm:col-span-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Website Type Required</span>
                    <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-[#c5a880]" />
                      <span>{selectedInquiry.websiteType || <span className="text-neutral-500 italic font-normal">Not Specified</span>}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 space-y-1 sm:col-span-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Complete Address</span>
                    <p className="text-sm text-neutral-300 leading-relaxed font-light">{selectedInquiry.address}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14161a] border border-white/10 space-y-1 sm:col-span-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Project Description & Special Features</span>
                    <p className="text-sm text-neutral-200 whitespace-pre-wrap leading-relaxed font-light">
                      {selectedInquiry.projectDescription || <span className="text-neutral-500 italic">No additional project description provided.</span>}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-neutral-400 space-y-3">
                <UserCheck className="w-12 h-12 stroke-[1.5] text-neutral-500" />
                <div>
                  <p className="text-sm font-semibold text-white">Select an inquiry from the list</p>
                  <p className="text-xs text-neutral-400 mt-1 font-light">
                    Click any client entry on the left to view their complete contact details, budget, and project description.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
