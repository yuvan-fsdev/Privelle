export type Occasion = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedFor: string;
  icon: string;
  href: string;
};

export const OCCASIONS: Occasion[] = [
  {
    id: 'first-night',
    title: 'First Night',
    subtitle: 'Gentle, comforting, memorable',
    description:
      'A thoughtful private experience designed to ease nervousness and create a warm beginning.',
    recommendedFor: 'Newlyweds',
    icon: 'Heart',
    href: '#collection',
  },
  {
    id: 'anniversary',
    title: 'Anniversary',
    subtitle: 'Bring back the butterflies',
    description:
      'A romantic curation for couples who want to celebrate love with warmth, surprise, and chemistry.',
    recommendedFor: 'Married couples',
    icon: 'CalendarHeart',
    href: '#collection',
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon',
    subtitle: 'Travel-ready romance',
    description:
      'A compact luxury experience for couples starting a new journey together.',
    recommendedFor: 'Honeymoon couples',
    icon: 'Plane',
    href: '#collection',
  },
  {
    id: 'long-distance-reunion',
    title: 'Long Distance Reunion',
    subtitle: 'For the hugs that waited',
    description:
      'A deeply emotional box for couples meeting after weeks or months apart.',
    recommendedFor: 'Long-distance couples',
    icon: 'MessageCircle',
    href: '#collection',
  },
  {
    id: 'babymoon',
    title: 'Babymoon',
    subtitle: 'Soft bonding and comfort',
    description:
      'A gentle, comfort-first experience for expecting couples who want calm, care, and closeness.',
    recommendedFor: 'Expecting couples',
    icon: 'Baby',
    href: '#collection',
  },
  {
    id: 'first-date',
    title: 'First Date Night',
    subtitle: 'Soft, charming, easy',
    description:
      'A sweet kit for couples planning a special first private date night.',
    recommendedFor: 'New couples',
    icon: 'Sparkles',
    href: '#collection',
  },
  {
    id: 'bridal-intimacy',
    title: 'Bridal Intimacy',
    subtitle: 'Private care for brides',
    description:
      'A gentle, premium curation designed around comfort, privacy, and emotional reassurance.',
    recommendedFor: 'Bride-to-be',
    icon: 'Gem',
    href: '#collection',
  },
  {
    id: 'weekend-escape',
    title: 'Weekend Escape',
    subtitle: 'One night, beautifully planned',
    description:
      'A staycation-friendly box for hotel nights, surprise plans, and spontaneous romantic getaways.',
    recommendedFor: 'Private celebrations',
    icon: 'Moon',
    href: '#collection',
  },
];
