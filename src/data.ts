import { Property, Service, Testimonial } from "./types";

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "Karanampettai Residential Plot",
    location: "Karanampettai, Coimbatore",
    description: "Premium residential plots located in a high-growth corridor. Features excellent connectivity, wide metal roads, and immediate villa construction readiness with fully developed layouts.",
    image: "/land_karanampettai.jpg",
    isDtcpApproved: true,
    googleMapsUrl: "https://maps.google.com/?q=Karanampettai,Coimbatore,Tamil+Nadu",
    whatsappMessage: "Hello, I am interested in the Karanampettai Residential Plot. Please share more details.",
    size: "1,200 - 2,400 Sq.Ft.",
    price: "Attractive Pricing"
  },
  {
    id: "prop-2",
    title: "Gowthampuri Residential Plot",
    location: "Gowthampuri, Mayileripalayam",
    description: "Serene residential enclave with beautifully engineered plots. Ideal for peaceful family living while remaining in close proximity to major industrial estates, colleges, and national highways.",
    image: "/land_gowthampuri.jpg",
    isDtcpApproved: true,
    googleMapsUrl: "https://maps.google.com/?q=Mayileripalayam,Coimbatore,Tamil+Nadu",
    whatsappMessage: "Hello, I am interested in the Gowthampuri Residential Plot. Please share more details.",
    size: "1,500 - 3,500 Sq.Ft.",
    price: "Premium Layout"
  },
  {
    id: "prop-3",
    title: "Paaldhurai Residential Plot",
    location: "Paaldhurai, Madukkarai",
    description: "Prime investment opportunity in Madukkarai's highly sought-after residential zone. Surrounded by robust infrastructure, lush landscaping, and exceptional sub-ground water availability.",
    image: "/land_paaldhurai.jpg",
    isDtcpApproved: true,
    googleMapsUrl: "https://maps.google.com/?q=Madukkarai,Coimbatore,Tamil+Nadu",
    whatsappMessage: "Hello, I am interested in the Paaldhurai Residential Plot in Madukkarai. Please share more details.",
    size: "1,000 - 2,200 Sq.Ft.",
    price: "High Appreciation"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Real Estate Consulting",
    description: "Expert guidance on buying, selling, and leasing high-growth residential, commercial, and agricultural properties in Coimbatore and surrounding areas.",
    iconName: "Compass"
  },
  {
    id: "srv-2",
    title: "Construction Consulting",
    description: "End-to-end strategic oversight of architectural design, raw material sourcing, contractor selection, and quality management for residential builds.",
    iconName: "Hammer"
  },
  {
    id: "srv-3",
    title: "Financial Services",
    description: "Comprehensive capital planning and customized investment strategies to ensure maximum asset appreciation and safety for your capital resources.",
    iconName: "TrendingUp"
  },
  {
    id: "srv-4",
    title: "DTCP Approved Projects",
    description: "Assisting clients in securing and developing properties that meet the stringent town-planning guidelines of the Directorate of Town and Country Planning.",
    iconName: "CheckSquare"
  },
  {
    id: "srv-5",
    title: "Investment Guidance",
    description: "Strategic asset allocation strategies based on local market trends, infrastructure roadmaps, and projected demographic expansions in Tamil Nadu.",
    iconName: "ShieldAlert" // Mapping to standard Lucide icon
  },
  {
    id: "srv-6",
    title: "Property Documentation",
    description: "Rigorous verification of parent deeds, patta, chitta, encumbrance certificates, and preparation of flawless draft sale deeds for risk-free transactions.",
    iconName: "FileText"
  },
  {
    id: "srv-7",
    title: "Site Visits",
    description: "Structured physical walkthroughs of premium land parcels and developed plots with detailed visual inspection of boundaries and approach roads.",
    iconName: "MapPin"
  },
  {
    id: "srv-8",
    title: "Loan Assistance",
    description: "Streamlining the process of securing home and plot purchase loans from top-tier nationalized banks and financial institutions at optimal interest rates.",
    iconName: "DollarSign"
  },
  {
    id: "srv-9",
    title: "Legal Guidance",
    description: "Comprehensive due diligence in collaboration with senior land advocates to verify clear marketable title and property acquisition safety.",
    iconName: "Scale"
  },
  {
    id: "srv-10",
    title: "Property Registration Assistance",
    description: "Hassle-free coordinator services at Sub-Registrar Offices, managing documentation queues and securing fast, certified copy retrievals.",
    iconName: "Users"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "VIGNESH VARAN",
    role: "Homeowner,Cbe",
    comment: "Ganapathy Suresh made my plot purchase in Thudiyalur completely transparent and stress-free.Clear documentation was my biggest concern, but his thorough verification gave me complete peace of mind.",
    rating: 5
  },
  {
    id: "t-2",
    name: "LEELA",
    role: "Homeowner, Coimbatore",
    comment: "Excellent experience. He helped me select the perfect DTCP-approved plot in SIvanandha colony and assisted in procuring a bank loan in record time. His professionalism is exemplary.",
    rating: 5
  },
  {
    id: "t-3",
    name: "Vijay Kumar",
    role: "Real Estate Investor",
    comment: "I rely entirely on Suresh's investment advice for land acquisition in Tamil Nadu. His understanding of upcoming infrastructure projects and local zoning laws is unmatched.",
    rating: 5
  },
  {
    id: "t-4",
    name: "Saravanan",
    role: "Business Owner",
    comment: "His construction consulting services saved us significant costs when building our commercial warehouse. Professional, honest, and highly reliable advice.",
    rating: 5
  }
];

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "Honest and transparent advisory, ensuring zero gray areas in title deeds and transactional processes."
  },
  {
    title: "Regulatory Compliance",
    description: "Commitment to 100% DTCP approval compliance and strict adherence to governmental planning parameters."
  },
  {
    title: "Client Centricity",
    description: "Tailored financial and physical asset planning that coordinates seamlessly with our clients' long-term life milestones."
  },
  {
    title: "Expert Due Diligence",
    description: "Deep, rigorous verification of legal parentage documents, encumbrances, and local municipal registers."
  }
];
