export type BuilderOption = {
  id: string;
  label: string;
  description: string;
  icon?: string;
};

export type BuilderAddOn = {
  id: string;
  label: string;
  description: string;
};

export const builderOccasions: BuilderOption[] = [
  {
    id: 'first-night',
    label: 'First Night',
    description: 'Gentle, comforting, and thoughtfully private.',
    icon: 'Heart',
  },
  {
    id: 'anniversary',
    label: 'Anniversary',
    description: 'Romantic, warm, and made to bring back butterflies.',
    icon: 'Sparkles',
  },
  {
    id: 'honeymoon',
    label: 'Honeymoon',
    description: 'Travel-friendly luxury for newlyweds.',
    icon: 'Plane',
  },
  {
    id: 'long-distance-reunion',
    label: 'Long Distance Reunion',
    description: 'Emotional, memorable, and worth the wait.',
    icon: 'MessageCircle',
  },
  {
    id: 'babymoon',
    label: 'Babymoon',
    description: 'Soft, gentle, and comfort-first for expecting couples.',
    icon: 'Baby',
  },
  {
    id: 'weekend-escape',
    label: 'Weekend Escape',
    description: 'Perfect for hotel nights and staycations.',
    icon: 'Moon',
  },
];

export const budgetOptions: BuilderOption[] = [
  {
    id: 'essential',
    label: '₹1,999 – ₹2,999',
    description:
      'A compact romantic experience with essential pre-care, intimate care, and post-care.',
  },
  {
    id: 'signature',
    label: '₹3,000 – ₹4,999',
    description:
      'A fuller Privelle experience with better presentation, more items, and stronger personalisation.',
  },
  {
    id: 'luxe',
    label: '₹5,000 – ₹9,999',
    description:
      'A premium luxury box with elevated add-ons, richer packaging, and expanded curation.',
  },
  {
    id: 'custom',
    label: 'Custom Luxury Box',
    description:
      'For proposals, honeymoon surprises, bridal gifting, or highly personalised private moments.',
  },
];

export const comfortLevels: BuilderOption[] = [
  {
    id: 'soft-romance',
    label: 'Soft Romance',
    description: 'Gentle, emotional, candle-lit, and comfort-first.',
  },
  {
    id: 'playful-chemistry',
    label: 'Playful Chemistry',
    description: 'Light teasing, couple games, and fun private energy.',
  },
  {
    id: 'premium-wellness',
    label: 'Premium Wellness',
    description: 'More focus on trusted wellness essentials, comfort, and care.',
  },
  {
    id: 'surprise-luxury',
    label: 'Surprise Luxury',
    description: 'Premium presentation, personalised details, and memorable reveal moments.',
  },
];

export const builderAddOns: BuilderAddOn[] = [
  {
    id: 'couple-perfumes',
    label: 'Couple Perfumes',
    description: 'His scent. Her scent. One memory.',
  },
  {
    id: 'luxury-letter',
    label: 'Luxury Customised Letter',
    description: 'A romantic, playful, or emotional letter written beautifully.',
  },
  {
    id: 'personalised-gift',
    label: 'Personalised Gift',
    description: 'Name, initials, photo keepsake, or memory detail.',
  },
  {
    id: 'music-qr-card',
    label: 'Music QR Card',
    description: 'A private playlist to set the mood.',
  },
  {
    id: 'premium-chocolates',
    label: 'Premium Chocolates',
    description: 'Sweet pre-care additions for the reveal.',
  },
  {
    id: 'extra-card-games',
    label: 'Extra Card Games',
    description: 'More playful prompts and conversation starters.',
  },
];
