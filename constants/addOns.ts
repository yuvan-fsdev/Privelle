export type AddOn = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  startingPrice: string;
  inclusions: string[];
  bestFor: string[];
};

export const addOns: AddOn[] = [
  {
    id: 'couple-perfumes',
    name: 'Couple Perfumes',
    slug: 'couple-perfumes',
    badge: 'Signature Scent',
    startingPrice: 'From ₹799',
    tagline: 'His scent. Her scent. One memory.',
    description:
      'A premium fragrance pairing designed to turn your private moment into a lasting memory. Perfect for anniversaries, honeymoons, reunions, and luxury gifting.',
    image: '/images/placeholders/hero-product-box.png',
    alt: 'Luxury couple perfume duo bottles in matte black and champagne gold packaging with warm romantic lighting and soft burgundy background',
    inclusions: [
      'His & Her fragrance pairing',
      'Travel-friendly perfume options',
      'Luxury scent card',
      'Gift-ready presentation',
    ],
    bestFor: ['Anniversary', 'Honeymoon', 'Long Distance Reunion'],
  },
  {
    id: 'personalised-gifts',
    name: 'Personalised Gifts',
    slug: 'personalised-gifts',
    badge: 'Custom Keepsake',
    startingPrice: 'From ₹499',
    tagline: 'Small details. Big emotions.',
    description:
      'Custom keepsakes crafted around your story - perfect for making the box feel personal, thoughtful, and impossible to forget.',
    image: '/images/placeholders/newlywed-luxury-kit.png',
    alt: 'Personalised couple gifts including engraved cards, photo keepsakes, name tags, custom message cards, and luxury wrapped accessories',
    inclusions: [
      'Name or initials personalisation',
      'Photo keepsake card',
      'Memory tag',
      'Occasion-based gift detail',
    ],
    bestFor: ['First Night', 'Anniversary', 'Birthday Surprise'],
  },
  {
    id: 'luxury-customised-letters',
    name: 'Luxury Customised Letters',
    slug: 'luxury-customised-letters',
    badge: 'Emotional Add-on',
    startingPrice: 'From ₹299',
    tagline: "Words they'll keep long after the night ends.",
    description:
      'Emotionally written and beautifully presented letters, crafted to sound like your relationship - romantic, playful, emotional, or deeply personal.',
    image: '/images/placeholders/anniversary-spark-box.png',
    alt: 'Luxury customised love letters with wax seal, textured ivory paper, champagne gold details, perfume-sprayed envelope, and soft candlelight',
    inclusions: [
      'Romantic letter writing',
      'Playful or emotional tone options',
      'Premium envelope styling',
      'Optional wax seal presentation',
    ],
    bestFor: ['Long Distance Reunion', 'Bridal Intimacy', 'Honeymoon'],
  },
];
