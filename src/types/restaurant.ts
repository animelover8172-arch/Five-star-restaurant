export type MoodType = 'dine' | 'hangout' | 'takeaway';

export interface MoodOption {
  id: MoodType;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaText: string;
}

export interface TableHotspot {
  id: string;
  label: string;
  xPercent: number; // Position on the overhead image
  yPercent: number;
  title: string;
  description: string;
  quote?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'indian' | 'chinese' | 'non-veg' | 'veg' | 'desserts' | 'beverages';
  description: string;
  isSignature?: boolean;
  dietary: 'non-veg' | 'veg';
  spicyLevel?: number;
  image?: string;
  priceNote?: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  sentiment: 'positive' | 'critical';
  highlights?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambience' | 'dishes' | 'night';
  src: string;
  alt: string;
  caption: string;
}

export interface OrderItem {
  dishName: string;
  quantity: number;
  notes?: string;
}
