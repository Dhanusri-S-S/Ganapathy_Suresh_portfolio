export interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  isDtcpApproved: boolean;
  googleMapsUrl: string;
  whatsappMessage: string;
  size?: string;
  price?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to map to Lucide icons dynamically
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
