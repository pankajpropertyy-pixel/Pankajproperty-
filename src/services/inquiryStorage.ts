import { ClientInquiry, InquiryFormData } from '../types/inquiry';

const STORAGE_KEY = 'webdev_client_inquiries';

// Initial starter sample inquiries if empty, to show the inquiry management screen with realistic data
const SAMPLE_INQUIRIES: ClientInquiry[] = [
  {
    id: 'inq-sample-1',
    fullName: 'Rajesh Sharma',
    mobileNumber: '+91 98271 23456',
    email: 'rajesh.sharma@gmail.com',
    address: 'Shop #14, Civic Centre, Bhilai, Chhattisgarh',
    occupation: 'Shop Owner',
    budget: '₹10,000–₹25,000',
    websiteType: 'E-commerce Website',
    projectDescription: 'Need an online shopping catalog with WhatsApp ordering for our garment store in Bhilai.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    status: 'new'
  },
  {
    id: 'inq-sample-2',
    fullName: 'Pooja Verma',
    mobileNumber: '+91 70001 89765',
    email: 'pooja.verma.arch@gmail.com',
    address: 'Plot 42, Smriti Nagar, Bhilai, Chhattisgarh',
    occupation: 'Professional',
    budget: '₹25,000–₹50,000',
    websiteType: 'Portfolio Website',
    projectDescription: 'Modern, minimalistic architectural portfolio with high-resolution gallery and client consultation booking.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    status: 'contacted'
  }
];

export function getStoredInquiries(): ClientInquiry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_INQUIRIES));
      return SAMPLE_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading inquiries from localStorage:', err);
    return [];
  }
}

export async function saveClientInquiry(data: InquiryFormData): Promise<ClientInquiry> {
  const newInquiry: ClientInquiry = {
    id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    fullName: data.fullName.trim(),
    mobileNumber: data.mobileNumber.trim(),
    email: data.email.trim(),
    address: data.address.trim(),
    occupation: data.occupation ? data.occupation.trim() : undefined,
    budget: data.budget ? data.budget.trim() : undefined,
    websiteType: data.websiteType ? data.websiteType.trim() : undefined,
    projectDescription: data.projectDescription ? data.projectDescription.trim() : undefined,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  // Try submitting to optional server proxy or webhook endpoint if configured
  try {
    const endpoint = (import.meta as any).env?.VITE_FORM_BACKEND_URL;
    if (endpoint) {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInquiry)
      }).catch((e) => console.warn('External backend push failed, saved locally:', e));
    }
  } catch {
    // Non-blocking
  }

  // Always persist locally in browser storage so the business owner never loses inquiry data
  const existing = getStoredInquiries();
  const updated = [newInquiry, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Dispatch a custom event so any listener or admin dashboard updates reactively in real time
    window.dispatchEvent(new CustomEvent('inquiry-stored', { detail: newInquiry }));
  } catch (err) {
    console.error('Error saving inquiry to localStorage:', err);
  }

  return newInquiry;
}

export function updateInquiryStatus(id: string, status: ClientInquiry['status']): void {
  const existing = getStoredInquiries();
  const updated = existing.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('inquiry-stored'));
}

export function deleteInquiry(id: string): void {
  const existing = getStoredInquiries();
  const updated = existing.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('inquiry-stored'));
}

export function exportInquiriesAsCSV(): void {
  const inquiries = getStoredInquiries();
  if (!inquiries.length) return;

  const headers = ['ID', 'Date & Time', 'Full Name', 'Mobile Number', 'Email', 'Address', 'Occupation', 'Budget', 'Website Type', 'Project Description', 'Status'];
  const rows = inquiries.map((inq) => [
    inq.id,
    new Date(inq.createdAt).toLocaleString(),
    `"${(inq.fullName || '').replace(/"/g, '""')}"`,
    `"${(inq.mobileNumber || '').replace(/"/g, '""')}"`,
    `"${(inq.email || '').replace(/"/g, '""')}"`,
    `"${(inq.address || '').replace(/"/g, '""')}"`,
    `"${(inq.occupation || '').replace(/"/g, '""')}"`,
    `"${(inq.budget || '').replace(/"/g, '""')}"`,
    `"${(inq.websiteType || '').replace(/"/g, '""')}"`,
    `"${(inq.projectDescription || '').replace(/"/g, '""')}"`,
    inq.status
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `client_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
