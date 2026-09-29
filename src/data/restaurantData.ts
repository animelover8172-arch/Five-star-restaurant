import { MoodOption, TableHotspot, MenuItem, GoogleReview, GalleryItem } from '../types/restaurant';
import heroIndianDining from '../assets/images/hero_indian_dining_1790690587887.jpg';
import chickenLollipopDish from '../assets/images/chicken_lollipop_dish_1790690602536.jpg';
import restaurantNightAmbience from '../assets/images/restaurant_night_ambience_1790690620120.jpg';
import fiveStarTableOverhead from '../assets/images/five_star_table_overhead_1790690636298.jpg';

export const RESTAURANT_IMAGES = {
  hero: heroIndianDining,
  chickenLollipop: chickenLollipopDish,
  nightAmbience: restaurantNightAmbience,
  tableOverhead: fiveStarTableOverhead,
};

export const RESTAURANT_INFO = {
  name: 'FIVE STAR RESTAURANT',
  hindiName: 'फाइव स्टार रेस्टोरेंट',
  tagline: 'COME HUNGRY. LEAVE HAPPY.',
  concept: 'THE TABLE IS THE EXPERIENCE.',
  locationBadge: 'FIVE STAR RESTAURANT • BHABUA',
  rating: 3.7,
  reviewsCount: 352,
  priceRange: '₹200–₹1,000',
  pricePerPerson: '₹200 — ₹1,000 / PERSON',
  priceLabel: 'Reported Google price range',
  address: 'Front of Devi Ji Mandir, Near ADB SBI Bank, Mahakaleshwar Plaza Road, Near Shivaji Chowk, Akhalashpur, Bhabua, Bihar 821101',
  shortAddress: 'Front of Devi Ji Mandir, Akhalashpur, Bhabua',
  plusCode: '2JV2+3H Bhabua, Bihar',
  closingTimeStr: '10:30 PM',
  closingHour: 22,
  closingMinute: 30,
  openingHour: 11,
  openingMinute: 0,
  phone: '+91 8405918172',
  whatsapp: '+91 7654224826',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Five+Star+Restaurant+Akhalashpur+Bhabua+Bihar+821101',
  services: [
    { title: 'Dine-in', desc: 'Comfortable indoor & outdoor social seating for friends and family' },
    { title: 'Drive-through', desc: 'Quick curbside pickup near Devi Ji Mandir' },
    { title: 'No-contact delivery', desc: 'Fresh, sealed food delivered promptly within Bhabua' },
    { title: 'Outdoor seating', desc: 'Open-air patio for pleasant evening dining' },
    { title: 'Fireplace', desc: 'Warm glowing fireplace ambiance for cozy night gatherings' },
    { title: 'All-you-can-eat', desc: 'Ask server for availability and daily active kitchen formats' },
    { title: 'Online ordering', desc: 'Order directly online for dine-in or doorstep delivery' }
  ]
};

export const MOOD_OPTIONS: MoodOption[] = [
  {
    id: 'dine',
    icon: '🍽',
    title: 'DINE',
    tagline: 'Take your time. Take your seat.',
    description: 'An unhurried sit-down experience with spacious tables, warm lighting, and a menu built for sharing hearty family dishes.',
    highlights: ['Table service', 'Spacious seating', 'Fresh tandoor specials'],
    ctaText: 'Reserve Table'
  },
  {
    id: 'hangout',
    icon: '🔥',
    title: 'HANGOUT',
    tagline: 'Good conversations need good food.',
    description: 'Under the open night sky near the fireplace glow. Grab a plate of hot Chicken Lollipop and linger with good company.',
    highlights: ['Outdoor patio', 'Fireplace glow', 'Late evening vibe until 10:30 PM'],
    ctaText: 'Explore Hangout'
  },
  {
    id: 'takeaway',
    icon: '🥡',
    title: 'TAKE AWAY',
    tagline: 'Your favourites. Ready to go.',
    description: 'Freshly packed, piping hot, and packaged with zero-contact hygiene. Quick curbside drive-through or home delivery.',
    highlights: ['Drive-through speed', 'No-contact delivery', 'Piping hot packing'],
    ctaText: 'Order For Home'
  }
];

export const TABLE_HOTSPOTS: TableHotspot[] = [
  {
    id: 'food',
    label: 'FOOD',
    xPercent: 48,
    yPercent: 45,
    title: 'Culinary Passion',
    description: 'Freshly tossed sizzling appetizers, rich North Indian curries, and smoking hot breads crafted fresh daily for shared enjoyment.',
    quote: '"Good food is meant to be passed across the table."'
  },
  {
    id: 'people',
    label: 'PEOPLE',
    xPercent: 22,
    yPercent: 28,
    title: 'The Gathering Place',
    description: 'A friendly community melting pot in Akhalashpur where families, local groups, and travellers come together over comforting meals.',
    quote: '"The loudest laughs always happen after the first bite."'
  },
  {
    id: 'ambience',
    label: 'AMBIENCE',
    xPercent: 78,
    yPercent: 32,
    title: 'Warm Night Mood',
    description: 'Soft golden lighting, timber tables, outdoor breeze, and the crackle of the outdoor fireplace creating a serene evening vibe.',
    quote: '"Warm lighting that softens every busy day."'
  },
  {
    id: 'service',
    label: 'SERVICE',
    xPercent: 30,
    yPercent: 72,
    title: 'Honest Care',
    description: 'Our local staff works dedicatedly to ensure your dine-in, takeaway, or drive-through meal is served fresh and without delay.',
    quote: '"Hospitality with a genuine local heart."'
  },
  {
    id: 'moments',
    label: 'MOMENTS',
    xPercent: 70,
    yPercent: 70,
    title: 'Unrushed Evenings',
    description: 'From quick lunch breaks to celebratory family evenings under the stars until 10:30 PM, this is where local memories unfold.',
    quote: '"Stay for the conversation long after plates are cleared."'
  }
];

export const SIGNATURE_DISH: MenuItem = {
  id: 'chicken-lollipop',
  name: 'Chicken Lollipop',
  category: 'starters',
  description: 'Succulent drumettes frenched to perfection, marinated in bold regional spices, crisp-fried till golden, and tossed in our chef’s fiery wok glaze. Served with zesty mint chutney and fresh lime.',
  isSignature: true,
  dietary: 'non-veg',
  spicyLevel: 3,
  image: RESTAURANT_IMAGES.chickenLollipop,
  priceNote: 'Fresh kitchen rate (Avg. meal ₹200–₹1,000/person)'
};

export const MENU_CATEGORIES = [
  { id: 'starters', label: 'STARTERS', count: 'Hot & Sizzling' },
  { id: 'indian', label: 'INDIAN', count: 'Curries & Breads' },
  { id: 'chinese', label: 'CHINESE', count: 'Wok Specialties' },
  { id: 'non-veg', label: 'NON-VEG', count: 'Signature Meats' },
  { id: 'veg', label: 'VEG', count: 'Garden Fresh' },
  { id: 'desserts', label: 'DESSERTS', count: 'Sweet Endings' },
  { id: 'beverages', label: 'BEVERAGES', count: 'Cool Refreshers' }
] as const;

export const CATEGORY_NOTES: Record<string, { summary: string; featuredDishes: string[] }> = {
  starters: {
    summary: 'Crispy, smoky, and sizzling appetisers prepared fresh from our tandoor and wok stations.',
    featuredDishes: ['Chicken Lollipop (Signature)', 'Tandoori Platters', 'Crispy Paneer Bites', 'Spiced Veg Kebabs']
  },
  indian: {
    summary: 'Classic comforting North Indian preparations slow-simmered with aromatic hand-ground masalas.',
    featuredDishes: ['Butter Rich Gravies', 'Kadhai Specials', 'Tandoori Garlic Naan', 'Jeera Basmati Rice']
  },
  chinese: {
    summary: 'High-heat wok noodles, fried rice, and Indo-Chinese favorites made with fresh crunchy vegetables.',
    featuredDishes: ['Chilli Preparations', 'Hakka Noodles', 'Manchurian Gravy', 'Fried Rice Wok Special']
  },
  'non-veg': {
    summary: 'Tender chicken and rich gravies made to order for carnivore food lovers in Bhabua.',
    featuredDishes: ['Signature Chicken Lollipop', 'Spiced Masala Chicken', 'Tandoori Roast', 'Kadhai Chicken']
  },
  veg: {
    summary: 'Rich paneer, dal tadka, and seasonal farm-fresh vegetable curries spiced to your preference.',
    featuredDishes: ['Paneer Butter Masala', 'Yellow Dal Fry', 'Mushroom Gravy', 'Mix Veg Medley']
  },
  desserts: {
    summary: 'Warm traditional sweets and chilled delights to complete your dining experience.',
    featuredDishes: ['Hot Gulab Jamun', 'Chilled Kulfi / Ice Creams', 'Seasonal Specials']
  },
  beverages: {
    summary: 'Chilled soft beverages, coolers, and warm beverages to accompany your feast.',
    featuredDishes: ['Chilled Sodas & Cold Drinks', 'Mineral Water', 'Fresh Lime Soda', 'Hot Tea / Coffee']
  }
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'SHIVAY',
    rating: 5,
    timeAgo: 'Local Guide',
    comment: 'Very good ambience with limited menu but great food at very genuine price.',
    sentiment: 'positive',
    highlights: ['Great Food', 'Genuine Price', 'Very Good Ambience']
  },
  {
    id: 'rev-2',
    author: 'CHANDAN AKELA',
    rating: 2,
    timeAgo: 'Diner Review',
    comment: 'Good Food and Taste but staffs are unprofessional and offer very bad service.',
    sentiment: 'critical',
    highlights: ['Good Food & Taste', 'Unfiltered Feedback', 'Staff Training Focus']
  },
  {
    id: 'rev-3',
    author: 'ASAD TASLIM',
    rating: 5,
    timeAgo: 'Diner Review',
    comment: 'Good Environment And Good Behavioural Staff',
    sentiment: 'positive',
    highlights: ['Good Environment', 'Well-behaved Staff', 'Pleasant Atmosphere']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Royal Feast',
    category: 'dishes',
    src: RESTAURANT_IMAGES.hero,
    alt: 'Steaming curries, tandoori items and breads laid out for social dining',
    caption: 'Full dining feast served piping hot for table sharing.'
  },
  {
    id: 'g-2',
    title: 'Signature Chicken Lollipop',
    category: 'dishes',
    src: RESTAURANT_IMAGES.chickenLollipop,
    alt: 'Crispy fried and wok-glazed chicken lollipop on slate platter with mint chutney',
    caption: 'The dish everyone in Bhabua talks about — spicy, crunchy, succulent.'
  },
  {
    id: 'g-3',
    title: 'Fireplace & Outdoor Patio',
    category: 'night',
    src: RESTAURANT_IMAGES.nightAmbience,
    alt: 'Evening patio seating with warm outdoor fireplace and fairy lights',
    caption: 'Evening hangout spot under the stars with crackling fireplace warmth.'
  },
  {
    id: 'g-4',
    title: 'The Communal Table',
    category: 'ambience',
    src: RESTAURANT_IMAGES.tableOverhead,
    alt: 'Overhead view of friends sharing a hearty meal together',
    caption: 'Where families and friends connect over comfort food in Akhalashpur.'
  }
];
