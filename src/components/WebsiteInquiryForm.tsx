import React, { useState } from 'react';
import { 
  User, Phone, Mail, MapPin, Briefcase, Wallet, Globe, MessageSquare, 
  CheckCircle2, AlertCircle, Loader2, ArrowRight, Sparkles, Lock
} from 'lucide-react';
import { InquiryFormData } from '../types/inquiry';
import { saveClientInquiry } from '../services/inquiryStorage';
import { COMPANY_INFO } from '../data/properties';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WebsiteInquiryFormProps {
  onSuccess?: () => void;
  onViewInquiries?: () => void;
  showAdminLink?: boolean;
}

export const WebsiteInquiryForm: React.FC<WebsiteInquiryFormProps> = ({
  onSuccess,
  onViewInquiries,
  showAdminLink = true
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    address: '',
    occupation: '',
    budget: '',
    websiteType: '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [lastSubmittedPayload, setLastSubmittedPayload] = useState<InquiryFormData | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Occupation options
  const occupationOptions = [
    'Business Owner',
    'Shop Owner',
    'Restaurant/Cafe Owner',
    'Real Estate Agent',
    'Freelancer',
    'Student',
    'Professional',
    'Other'
  ];

  // Budget options
  const budgetOptions = [
    'Under ₹5,000',
    '₹5,000–₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000+',
    'Not Decided Yet'
  ];

  // Website Type options
  const websiteTypeOptions = [
    'Business Website',
    'Restaurant/Cafe Website',
    'Real Estate Website',
    'E-commerce Website',
    'Portfolio Website',
    'Personal Website',
    'Other'
  ];

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    // 1. Full Name (Required)
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // 2. Mobile Number (Required, with Indian phone validation)
    const phoneDigits = formData.mobileNumber.replace(/\D/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your mobile number.';
    } else if (phoneDigits.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    // 3. Email Address (Required & format validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    // 4. Address (Required)
    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your complete address, city, and state.';
    } else if (formData.address.trim().length < 5) {
      newErrors.address = 'Please provide a more complete address.';
    }

    // 5. Occupation & Budget are strictly optional!

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) setSubmitError(null);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    val = val.replace(/[^\d\s+-]/g, '');
    setFormData((prev) => ({ ...prev, mobileNumber: val }));
    if (errors.mobileNumber) {
      setErrors((prev) => ({ ...prev, mobileNumber: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      let formattedPhone = formData.mobileNumber.trim();
      const pureDigits = formattedPhone.replace(/\D/g, '');
      if (pureDigits.length === 10 && !formattedPhone.startsWith('+')) {
        formattedPhone = `+91 ${formattedPhone}`;
      } else if (!formattedPhone.startsWith('+') && pureDigits.length > 10 && pureDigits.startsWith('91')) {
        formattedPhone = `+${pureDigits.slice(0, 2)} ${pureDigits.slice(2)}`;
      }

      const submissionPayload: InquiryFormData = {
        ...formData,
        mobileNumber: formattedPhone
      };

      await saveClientInquiry(submissionPayload);

      setSubmittedName(formData.fullName.trim());
      setIsSubmitted(true);
      if (onSuccess) onSuccess();

      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        address: '',
        occupation: '',
        budget: '',
        websiteType: '',
        projectDescription: ''
      });
    } catch (err: any) {
      console.error('Submission failed:', err);
      setSubmitError('Something went wrong while submitting. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setErrors({});
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#14161a] rounded-3xl shadow-2xl shadow-black/80 border border-white/10 overflow-hidden text-neutral-100 transition-all font-sans">
      {/* Header Banner - Matching Website Luxury Theme */}
      <div className="relative px-6 py-8 sm:px-10 sm:py-10 bg-gradient-to-b from-[#181b22] via-[#14161a] to-[#14161a] border-b border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Website Development Inquiry</span>
          </div>

          {showAdminLink && onViewInquiries && (
            <button
              type="button"
              onClick={onViewInquiries}
              className="text-xs text-[#c5a880] hover:text-[#e6d8c3] font-semibold hover:underline flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>View Submitted Inquiries</span>
            </button>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury font-medium tracking-tight text-white">
          Let's Build Your Website
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-400 font-light max-w-2xl leading-relaxed">
          Tell us a little about yourself and your requirements. We'll get in touch with you soon.
        </p>
      </div>

      {/* Main Form Body */}
      <div className="p-6 sm:p-10">
        {isSubmitted ? (
          /* Luxury Success Screen */
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 flex items-center justify-center mx-auto shadow-lg shadow-black/40">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-white">
                Inquiry Received Successfully!
              </h3>
              <p className="text-base text-neutral-300 max-w-lg mx-auto leading-relaxed font-light">
                Thank you for your inquiry, <strong className="text-[#c5a880] font-medium">{submittedName}</strong>! We have received your details and will contact you soon.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left max-w-lg mx-auto space-y-3 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2 text-[#c5a880] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>What happens next?</span>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed">
                1. Our lead technical developer will review your website type, features, and budget.
                <br />
                2. We will contact you via phone or email to discuss wireframes, cost breakdown, and launch schedule.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#c5a880]/20 cursor-pointer"
              >
                Submit Another Inquiry
              </button>

              {onViewInquiries && (
                <button
                  type="button"
                  onClick={onViewInquiries}
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/15 font-semibold text-xs tracking-wider transition-all cursor-pointer"
                >
                  Manage Inquiries Dashboard
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Form Inputs Styled in Dark Luxury Palette */
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {submitError && (
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Section 1: Contact & Personal Details */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] flex items-center gap-2 pb-1.5 border-b border-white/10">
                <User className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>1. Personal & Contact Information</span>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="field-fullName" className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Full Name <span className="text-[#c5a880]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a880]/70">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="field-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-white bg-[#1a1d24] placeholder-neutral-500 focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-500/60 focus:border-red-500 bg-red-950/10'
                        : 'border-white/15 focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 hover:border-white/25'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mobile Number with India (+91) Badge */}
                <div>
                  <label htmlFor="field-mobileNumber" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Mobile Number <span className="text-[#c5a880]">*</span>
                  </label>
                  <div className={`relative flex rounded-xl border overflow-hidden transition-all ${
                    errors.mobileNumber
                      ? 'border-red-500/60 focus-within:border-red-500 bg-red-950/10'
                      : 'border-white/15 focus-within:border-[#c5a880] focus-within:ring-2 focus-within:ring-[#c5a880]/20 hover:border-white/25'
                  }`}>
                    {/* Default Country Code Badge */}
                    <span className="inline-flex items-center px-3.5 bg-white/5 border-r border-white/10 text-xs font-semibold text-[#c5a880] select-none font-mono">
                      🇮🇳 +91
                    </span>
                    <input
                      id="field-mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={handlePhoneChange}
                      placeholder="Enter your mobile number"
                      className="w-full px-3.5 py-3 text-sm text-white bg-[#1a1d24] placeholder-neutral-500 focus:outline-none font-mono"
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="field-email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Email Address <span className="text-[#c5a880]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a880]/70">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-white bg-[#1a1d24] placeholder-neutral-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500 bg-red-950/10'
                          : 'border-white/15 focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 hover:border-white/25'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Complete Address */}
              <div>
                <label htmlFor="field-address" className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Complete Address <span className="text-[#c5a880]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#c5a880]/70">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <textarea
                    id="field-address"
                    name="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your complete address, city, and state"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-white bg-[#1a1d24] placeholder-neutral-500 focus:outline-none transition-all resize-y ${
                      errors.address
                        ? 'border-red-500/60 focus:border-red-500 bg-red-950/10'
                        : 'border-white/15 focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 hover:border-white/25'
                    }`}
                  />
                </div>
                {errors.address && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Section 2: Profile & Project Specifications (Optional) */}
            <div className="space-y-4 pt-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c5a880] flex items-center gap-2 pb-1.5 border-b border-white/10">
                <Briefcase className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>2. Profile & Budget (Optional)</span>
              </div>

              {/* Occupation & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Occupation (Optional) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="field-occupation" className="text-xs font-medium text-neutral-300">
                      Occupation
                    </label>
                    <span className="text-[11px] text-neutral-500 font-normal">Optional</span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a880]/70">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <select
                      id="field-occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-3 rounded-xl border border-white/15 text-sm text-white bg-[#1a1d24] hover:border-white/25 focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#14161a] text-neutral-400">Select your occupation (Optional)</option>
                      {occupationOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#14161a] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Budget (Optional) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="field-budget" className="text-xs font-medium text-neutral-300">
                      Budget
                    </label>
                    <span className="text-[11px] text-neutral-500 font-normal">Optional</span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a880]/70">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <select
                      id="field-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-3 rounded-xl border border-white/15 text-sm text-white bg-[#1a1d24] hover:border-white/25 focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#14161a] text-neutral-400">Select budget range (Optional)</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#14161a] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* What type of website do you need? (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="field-websiteType" className="text-xs font-medium text-neutral-300">
                    What type of website do you need?
                  </label>
                  <span className="text-[11px] text-neutral-500 font-normal">Optional</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a880]/70">
                    <Globe className="w-4 h-4" />
                  </div>
                  <select
                    id="field-websiteType"
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 py-3 rounded-xl border border-white/15 text-sm text-white bg-[#1a1d24] hover:border-white/25 focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#14161a] text-neutral-400">Choose website category (Optional)</option>
                    {websiteTypeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#14161a] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Tell us about your project (Optional Textarea) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="field-projectDescription" className="text-xs font-medium text-neutral-300">
                    Tell us about your project
                  </label>
                  <span className="text-[11px] text-neutral-500 font-normal">Optional</span>
                </div>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#c5a880]/70">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="field-projectDescription"
                    name="projectDescription"
                    rows={3}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Describe your website requirements, preferred design, or any special features you need."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/15 text-sm text-white bg-[#1a1d24] placeholder-neutral-500 focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 hover:border-white/25 transition-all resize-y"
                  />
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-1">
              <Lock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Your contact details are kept strictly private and used only for your website quotation.</span>
            </div>

            {/* Submit Button - Luxury Gold Theme */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-lg ${
                  isSubmitting
                    ? 'bg-[#c5a880]/50 text-black cursor-not-allowed shadow-none'
                    : 'bg-[#c5a880] hover:bg-[#b59870] active:scale-[0.99] text-black shadow-[#c5a880]/20 hover:shadow-[#c5a880]/30 cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-black" />
                    <span>Submitting Your Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Footer Branding Bar */}
      <div className="px-6 py-4 bg-white/[0.02] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Fast Turnaround · Custom Web Design · Fully Mobile Responsive</span>
        </span>
        <span className="font-medium text-[#c5a880]">Pankaj Web Studio</span>
      </div>
    </div>
  );
};
