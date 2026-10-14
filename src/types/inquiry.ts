export interface ClientInquiry {
  id: string;
  fullName: string;
  mobileNumber: string;
  email: string;
  address: string;
  occupation?: string;
  budget?: string;
  websiteType?: string;
  projectDescription?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'in-progress' | 'completed';
}

export interface InquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  address: string;
  occupation: string;
  budget: string;
  websiteType: string;
  projectDescription: string;
}
