export interface PropertyProject {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  propertyType: 'Ultra-Luxury Villa' | 'Architectural Estate' | 'Modern Penthouse' | 'Bespoke Haven';
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched';
  location: string;
  city: string;
  priceFormatted: string;
  priceNote?: string;
  builtUpAreaSqFt: number;
  plotAreaSqFt?: number;
  bedrooms: number;
  bathrooms: number;
  carParks: number;
  featuredInHeroVideo?: boolean;
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
    category: 'Exterior' | 'Living' | 'Kitchen' | 'Master Suite' | 'Pool & Garden' | 'Terrace';
  }[];
  shortDescription: string;
  fullDescription: string[];
  keyHighlights: string[];
  amenities: {
    category: string;
    items: string[];
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  nearbyLandmarks: {
    name: string;
    distance: string;
    travelTime: string;
    type: 'Transport' | 'Lifestyle' | 'Golf & Country' | 'Healthcare' | 'Education';
  }[];
  whatsappMessage: string;
}
