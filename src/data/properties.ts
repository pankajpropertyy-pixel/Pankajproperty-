import { PropertyProject } from '../types/property';

export const PROPERTIES: PropertyProject[] = [
  {
    id: 'grand-sunset-villa',
    slug: 'grand-sunset-villa',
    name: 'The Grand Sunset Villa',
    tagline: 'The Flagship Architectural Residence Featured in Our Cinematic Showcase',
    propertyType: 'Ultra-Luxury Villa',
    status: 'Ready to Move',
    location: 'Emerald Hills Enclave, Royal Boulevard',
    city: 'Prime City West',
    priceFormatted: '$3,850,000 / ₹18.5 Cr',
    priceNote: 'Price includes bespoke Italian cabinetry & landscaped pool terrace',
    builtUpAreaSqFt: 7850,
    plotAreaSqFt: 11200,
    bedrooms: 5,
    bathrooms: 6,
    carParks: 3,
    featuredInHeroVideo: true,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
        caption: 'Aerial Dusk View: Modern 2-Storey Villa with Cascading Pool & Manicured Lawn',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Outdoor Living Patio: Designer Sectional & Alfresco Dining Overlooking the Garden',
        category: 'Pool & Garden'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
        caption: 'Double-Height Living Salon: Backlit Marble Feature Wall & Warm Wood Louvers',
        category: 'Living'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
        caption: 'Chef Show Kitchen: Calacatta Waterfall Marble Island with Warm Concealed LEDs',
        category: 'Kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Presidential Master Suite: Floor-to-Ceiling Glazing Opening onto Sunset Balcony',
        category: 'Master Suite'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
        caption: 'Resort Swimming Pool: Waterfall Stone Backdrop & Illuminated Submerged Lounge',
        category: 'Pool & Garden'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        caption: 'Sunset Panorama Terrace: Unobstructed Horizon Views Across Championship Fairways',
        category: 'Terrace'
      }
    ],
    shortDescription: 'Our flagship modern villa featuring 7,850 sq.ft of bespoke architecture, private infinity waterfall pool, landscaped outdoor lawn, and panoramic sunset terrace.',
    fullDescription: [
      'The Grand Sunset Villa stands as the crown jewel of Pankaj Property’s bespoke luxury residential collection. Designed with cubist architectural purity, cantilevered upper terraces, and expansive floor-to-ceiling glass apertures, the residence seamlessly unites outdoor nature with serene interior comfort.',
      'From the grand teak pivot entrance to the dual-height living pavilion, every square inch has been crafted using bookmatched Italian marble, acoustic warm timber paneling, and architectural lighting fixtures.',
      'The private grounds feature a temperature-controlled swimming pool with cascading waterfall, an outdoor alfresco pavilion, and an upper master suite offering panoramic sunset vistas across rolling green golf fairways.'
    ],
    keyHighlights: [
      'Private 45-ft swimming pool with natural stone waterfall wall & LED mood illumination',
      'Double-height formal living salon with backlit Calacatta marble television feature wall',
      'Show kitchen featuring marble waterfall island, Miele integrated appliances & concealed dirty kitchen',
      'Master bedroom suite featuring private wrap-around sunset balcony and walk-in dressing lounge',
      'Fully automated smart home systems for climate, security, motorized shades & landscape lights',
      '3-car secure covered garage plus dedicated staff quarter with private side entrance'
    ],
    amenities: [
      {
        category: 'Outdoor & Wellness',
        items: ['Cascading Waterfall Pool', 'Sunbathing Deck & Cabana', 'Lush Manicured Lawn', 'Outdoor Fire Table Lounge', 'Outdoor Barbecue & Dining']
      },
      {
        category: 'Interior & Architecture',
        items: ['Double-Height Ceilings', 'Imported Italian Marble Floors', 'Acoustic Wood Paneling', 'Designer Chandelier', 'Floor-to-Ceiling Thermal Glass']
      },
      {
        category: 'Security & Automation',
        items: ['Crestron Smart Home System', 'Biometric & Facial Gate Entry', '24/7 Peripheral CCTV', 'Automated Perimeter Gates', 'Backup Solar Energy Grid']
      }
    ],
    specifications: [
      { label: 'Structure', value: 'Seismic Zone V compliant RCC frame with cantilevered reinforced slabs' },
      { label: 'Flooring', value: 'High-grade Italian Statuario & Botticino marble in living; engineered European oak in bedrooms' },
      { label: 'Joinery & Glass', value: 'Minimalist slim-profile thermal-break aluminum frames with double-glazed low-E glass' },
      { label: 'HVAC', value: 'Daikin VRV central air-conditioning with independent multi-zone digital thermostats' },
      { label: 'Sanitary & Fittings', value: 'Gessi & Kohler bespoke matte black and brushed bronze concealed thermostatic fittings' },
      { label: 'Electrical', value: 'Legrand Arteor automation touch plates with modular architectural downlights' }
    ],
    nearbyLandmarks: [
      { name: 'Championship Golf Club & Country Resort', distance: '1.2 km', travelTime: '3 mins', type: 'Golf & Country' },
      { name: 'International Airport & VIP Heliport', distance: '14.5 km', travelTime: '18 mins', type: 'Transport' },
      { name: 'Elite International Baccalaureate Academy', distance: '2.8 km', travelTime: '6 mins', type: 'Education' },
      { name: 'Super-Specialty Private Medical City', distance: '4.1 km', travelTime: '8 mins', type: 'Healthcare' },
      { name: 'Luxury Waterfront Promenade & Fine Dining', distance: '3.0 km', travelTime: '7 mins', type: 'Lifestyle' }
    ],
    whatsappMessage: 'Hello Pankaj Property, I am interested in viewing The Grand Sunset Villa (Flagship Residence). Please share floor plans and private tour availability.'
  },
  {
    id: 'palm-horizon-estate',
    slug: 'palm-horizon-estate',
    name: 'The Palm Horizon Estate',
    tagline: 'Contemporary Golf-Front Sanctuary with Dual Infinity Reflecting Pools',
    propertyType: 'Architectural Estate',
    status: 'Ready to Move',
    location: 'Horizon Ridge, Fairway Boulevard',
    city: 'Prime City West',
    priceFormatted: '$4,200,000 / ₹21.0 Cr',
    priceNote: 'Fully furnished with custom Scandinavian & Italian designer appointments',
    builtUpAreaSqFt: 8900,
    plotAreaSqFt: 13500,
    bedrooms: 6,
    bathrooms: 7,
    carParks: 4,
    featuredInHeroVideo: false,
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
        caption: 'Twilight Exterior: Cantilevered Linear Geometry with Glass Bridges',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'Poolside Veranda: Sunken Fire Pit Lounge Overlooking the Private Lagoon',
        category: 'Pool & Garden'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
        caption: 'Open-Plan Living & Dining with Seamless Pocket Glass Sliders',
        category: 'Living'
      },
      {
        url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1600&q=80',
        caption: 'Upper Master Haven with Panoramic Sunset Terrace & Private Jacuzzi',
        category: 'Master Suite'
      }
    ],
    shortDescription: 'An expansive 8,900 sq.ft golf-front architectural estate featuring 6 ensuite bedrooms, sunken firepit lounge, private cinema, and dual reflecting pools.',
    fullDescription: [
      'The Palm Horizon Estate redefines grand-scale suburban living through continuous horizontal lines, lush internal courtyards, and tranquil water features.',
      'Positioned along the 18th hole of the golf club, the estate affords complete privacy framed by towering palms and landscaped earthen berms.',
      'Features include a 12-seat private Dolby Atmos screening room, temperature-controlled wine cellar, wellness sauna, and 4-vehicle underground gallery.'
    ],
    keyHighlights: [
      'Direct fairway frontage with unobstructed sunset golf views',
      'Dual infinity pools including heated jacuzzi and sunken cocktail fire pit',
      'Bespoke 12-seat private cinema with acoustic isolation',
      'Temperature-controlled 450-bottle sommelier wine gallery',
      'Private wellness spa with Finnish dry sauna and cold plunge shower',
      'Four-bay climate-controlled car gallery'
    ],
    amenities: [
      {
        category: 'Entertainment & Wellness',
        items: ['Private Cinema (Dolby Atmos)', 'Wellness Sauna & Cold Plunge', '450-Bottle Wine Cellar', 'Sunken Fire Pit Lounge']
      },
      {
        category: 'Outdoor Features',
        items: ['Heated Jacuzzi', 'Golf Cart Charging Dock', 'Reflecting Water Canals', 'Outdoor Summer Kitchen']
      }
    ],
    specifications: [
      { label: 'Built-up Area', value: '8,900 sq.ft across 2 residential levels + basement lounge' },
      { label: 'Finishes', value: 'Natural travertine stone cladding, smoked white oak floors, brushed titanium hardware' },
      { label: 'Automation', value: 'Lutron Homeworks QSX lighting and shading ecosystem' },
      { label: 'Security', value: 'Laser boundary detection and private security station integration' }
    ],
    nearbyLandmarks: [
      { name: 'Championship Golf Club Clubhouse', distance: '0.4 km', travelTime: '2 mins', type: 'Golf & Country' },
      { name: 'Private Equestrian Center', distance: '3.5 km', travelTime: '7 mins', type: 'Lifestyle' },
      { name: 'International Airport', distance: '16.0 km', travelTime: '20 mins', type: 'Transport' }
    ],
    whatsappMessage: 'Hello Pankaj Property, I would like to inquire about The Palm Horizon Estate. Please share the brochure and arrange a private consultation.'
  },
  {
    id: 'aura-courtyard-residence',
    slug: 'aura-courtyard-residence',
    name: 'Aura Courtyard Residence',
    tagline: 'Biophilic Luxury Sanctuary Built Around an Ancient Olive Tree Atrium',
    propertyType: 'Bespoke Haven',
    status: 'Under Construction',
    location: 'Zenith Pines, North Ridge',
    city: 'Prime City West',
    priceFormatted: '$2,950,000 / ₹14.5 Cr',
    priceNote: 'Off-plan exclusive with personalized customization allowance',
    builtUpAreaSqFt: 6200,
    plotAreaSqFt: 8800,
    bedrooms: 4,
    bathrooms: 5,
    carParks: 2,
    featuredInHeroVideo: false,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Courtyard Facade: Warm Timber Slats & Textured Architectural Concrete',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
        caption: 'Central Atrium: Glass-Enclosed Courtyard Bringing Natural Sunlight to Every Room',
        category: 'Living'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
        caption: 'Minimalist Dining & Open Kitchen with Custom Natural Ash Wood Millwork',
        category: 'Kitchen'
      }
    ],
    shortDescription: 'A serene 6,200 sq.ft biophilic home designed with a dramatic glass-enclosed courtyard atrium, natural travertine stone, and lap pool.',
    fullDescription: [
      'Aura Courtyard Residence represents the philosophy of quiet luxury. Centered around a sky-lit glass atrium with a preserved mature olive tree, natural light sweeps through every room from dawn until dusk.',
      'Designed for wellness and contemplation, the residence features high ceilings, non-toxic organic mineral wall finishes, and integrated cross-ventilation.'
    ],
    keyHighlights: [
      'Central glass-encased courtyard atrium with mature living tree',
      '20-meter linear lap pool with concealed overflow channel',
      'Organic lime-wash plaster walls and bespoke rift-cut white oak cabinetry',
      'Private yoga and meditation studio overlooking bamboo rock garden',
      'Solar-powered net-zero energy design with battery storage'
    ],
    amenities: [
      {
        category: 'Wellness & Nature',
        items: ['Internal Light Courtyard', '20m Lap Pool', 'Yoga & Meditation Studio', 'Japanese Zen Garden']
      },
      {
        category: 'Sustainability',
        items: ['Net-Zero Solar Array', 'Rainwater Harvesting', 'Triple-Glazed Passive Windows']
      }
    ],
    specifications: [
      { label: 'Built-up Area', value: '6,200 sq.ft across 2 levels' },
      { label: 'Architecture', value: 'Biophilic open courtyard geometry' },
      { label: 'Completion', value: 'Q4 2026 (Handover ready with turnkey certification)' }
    ],
    nearbyLandmarks: [
      { name: 'Zenith Pines Nature Reserve', distance: '0.8 km', travelTime: '3 mins', type: 'Lifestyle' },
      { name: 'Botanical Gardens', distance: '1.5 km', travelTime: '4 mins', type: 'Lifestyle' }
    ],
    whatsappMessage: 'Hello Pankaj Property, I am interested in Aura Courtyard Residence. Please send me the floor plans and handover schedule.'
  },
  {
    id: 'skyline-panorama-penthouse',
    slug: 'skyline-panorama-penthouse',
    name: 'The Skyline Panorama Penthouse',
    tagline: 'Duplex Sky Mansion with Private Rooftop Infinity Plunge Pool & Helipad Access',
    propertyType: 'Modern Penthouse',
    status: 'Newly Launched',
    location: 'Crown Towers, 48th & 49th Floor, Financial District',
    city: 'Prime City West',
    priceFormatted: '$5,100,000 / ₹25.5 Cr',
    priceNote: 'Private elevator lobby with panoramic 360-degree skyline views',
    builtUpAreaSqFt: 8400,
    plotAreaSqFt: undefined,
    bedrooms: 5,
    bathrooms: 6,
    carParks: 4,
    featuredInHeroVideo: false,
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        caption: 'Sky Terrace: Private Heated Rooftop Pool 500 Feet in the Air',
        category: 'Terrace'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
        caption: 'Duplex Living Gallery with 24-Foot Glass Curtain Wall',
        category: 'Living'
      }
    ],
    shortDescription: 'An 8,400 sq.ft duplex sky mansion perched atop Crown Towers featuring private rooftop pool, 24-ft soaring ceilings, and private high-speed elevator.',
    fullDescription: [
      'The Skyline Panorama Penthouse commands the ultimate vantage point over the metropolis. Spanning the entire top two levels of Crown Towers, it offers uninterrupted 360-degree vistas stretching from the cityscape to distant mountain horizons.',
      'Accessible via two high-speed private biometric elevators, residents enjoy an open entertaining terrace with glass-bottom infinity plunge pool, private cigar lounge, and executive boardroom.'
    ],
    keyHighlights: [
      'Glass-bottom rooftop infinity plunge pool on private sky terrace',
      '24-foot double-height entertaining salon with panoramic city vistas',
      'Direct dual high-speed biometric elevators opening directly into private gallery',
      'Primary master suite with dual boutique walk-in closets and marble steam room'
    ],
    amenities: [
      {
        category: 'Exclusive Sky Privileges',
        items: ['Private Rooftop Pool', 'Direct Private Elevator', 'Private Cigar Lounge', '24/7 White-Glove Valet & Concierge']
      }
    ],
    specifications: [
      { label: 'Total Area', value: '8,400 sq.ft duplex layout' },
      { label: 'Levels', value: '48th & 49th Floors' },
      { label: 'Elevator', value: 'Dual private dedicated biometric lifts' }
    ],
    nearbyLandmarks: [
      { name: 'City Center Financial Hub', distance: '0.2 km', travelTime: '1 min', type: 'Lifestyle' },
      { name: 'Rooftop Helipad', distance: 'On-site', travelTime: 'Immediate', type: 'Transport' }
    ],
    whatsappMessage: 'Hello Pankaj Property, I would like to schedule a confidential presentation for The Skyline Panorama Penthouse.'
  }
];

export const COMPANY_INFO = {
  brandName: 'Pankaj Property',
  legalName: 'Pankaj Property & Construction Ltd.',
  tagline: 'Your Dream Home Awaits · Modern Living, Better Future',
  phone: '+91 78983 43081',
  phoneFormatted: '+91 78983 43081',
  whatsappNumber: '917898343081',
  email: 'pankajpropertyy@gmail.com',
  address: 'Pankaj Property Corporate Lounge, Suite 800, Royal Palm Boulevard, Prime City',
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (By Appointment)',
  stats: [
    { value: '15+', label: 'Years of Excellence' },
    { value: '140+', label: 'Luxury Residences Built' },
    { value: '99.4%', label: 'On-Time Handover' },
    { value: '100%', label: 'Verified Titles' }
  ]
};
