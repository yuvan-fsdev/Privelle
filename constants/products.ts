export type ProductPhaseItems = {
  preCare: string[];
  intimateCare: string[];
  postCare: string[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  startingPrice: string;
  image: string;
  alt: string;
  badge: string;
  recommendedFor: string[];
  phaseItems: ProductPhaseItems;
};

export const products: Product[] = [
  {
    id: 'first-night-box',
    name: 'First Night Box',
    slug: 'first-night-box',
    description:
      'A premium private box crafted for newlyweds to ease nervousness, create comfort, and make the first night feel warm, thoughtful, and memorable.',
    startingPrice: '₹1,999',
    image: '/images/placeholders/first-night-box.png',
    alt: 'Elegant first night luxury gift box with ivory satin, champagne gold ribbon, candles, chocolates, couple cards, personalised note, and discreet wellness essentials',
    badge: 'Newlywed Favourite',
    recommendedFor: ['Newlyweds', 'First Night', 'Bride-to-be'],
    phaseItems: {
      preCare: ['Premium chocolates', 'Soft conversation cards', 'Music QR card', 'Scented candle'],
      intimateCare: ['Trusted condoms', 'Lubricant', 'Intimate wipes', 'Comfort-first wellness essentials'],
      postCare: ['Hydration powder', 'Nuts', 'Dark chocolate', 'Herbal tea'],
    },
  },
  {
    id: 'anniversary-spark-box',
    name: 'Anniversary Spark Box',
    slug: 'anniversary-spark-box',
    description:
      'A romantic anniversary experience designed to bring back butterflies, warmth, and playful chemistry with a luxurious private touch.',
    startingPrice: '₹2,499',
    image: '/images/placeholders/anniversary-spark-box.png',
    alt: 'Luxury anniversary couple gifting box with burgundy roses, gold accents, chocolates, perfume samples, candles, romantic cards, and personalised love note',
    badge: 'Romantic Pick',
    recommendedFor: ['Anniversary', 'Married Couples', 'Private Celebration'],
    phaseItems: {
      preCare: ['Luxury chocolates', 'Anniversary note', 'Romantic question cards', 'Candle'],
      intimateCare: ['Trusted condoms', 'Lubricant', 'Massage oil', 'Wellness essentials'],
      postCare: ['Hydration sachet', 'Nuts', 'Comfort snack', 'Relaxing tea'],
    },
  },
  {
    id: 'weekend-escape-box',
    name: 'Weekend Escape Box',
    slug: 'weekend-escape-box',
    description:
      'A compact luxury kit for staycations, hotel nights, and spontaneous romantic getaways.',
    startingPrice: '₹2,999',
    image: '/images/placeholders/weekend-escape-box.png',
    alt: 'Premium weekend escape couple kit with travel-size perfumes, scented candle, couple games, chocolates, personalised card, and discreet wellness products',
    badge: 'Staycation Ready',
    recommendedFor: ['Hotel Stay', 'Weekend Plan', 'Couples'],
    phaseItems: {
      preCare: ['Travel chocolates', 'Mini candle', 'Couple game cards', 'Music QR card'],
      intimateCare: ['Trusted condoms', 'Lubricant', 'Massage oil', 'Intimate wipes'],
      postCare: ['Electrolyte powder', 'Nuts', 'Dark chocolate', 'Refreshing wipes'],
    },
  },
  {
    id: 'newlywed-luxury-kit',
    name: 'Newlywed Luxury Kit',
    slug: 'newlywed-luxury-kit',
    description:
      'A complete curated experience for newly married couples who want elegance, privacy, emotional comfort, and premium presentation.',
    startingPrice: '₹3,499',
    image: '/images/placeholders/newlywed-luxury-kit.png',
    alt: 'Newlywed luxury intimacy kit in matte black box with satin wrap, romantic accessories, music card, candles, chocolates, perfumes, and wellness essentials',
    badge: 'Premium Kit',
    recommendedFor: ['Newlyweds', 'Wedding Gift', 'Luxury Gifting'],
    phaseItems: {
      preCare: ['Premium chocolates', 'Personalised letter', 'Music QR card', 'Couple ritual cards'],
      intimateCare: ['Trusted condoms', 'Lubricant', 'Massage oil', 'Comfort essentials'],
      postCare: ['Hydration powder', 'Nuts', 'Herbal tea', 'Recovery snack'],
    },
  },
  {
    id: 'couple-rituals-box',
    name: 'Couple Rituals Box',
    slug: 'couple-rituals-box',
    description:
      'A slow-romance box for couples who love intentional moments, conversations, rituals, and soft intimacy.',
    startingPrice: '₹2,799',
    image: '/images/placeholders/couple-rituals-box.png',
    alt: 'Couple rituals luxury box with candle, journal card, romantic questions, herbal tea, chocolates, personalised notes, and elegant matte black packaging',
    badge: 'Slow Romance',
    recommendedFor: ['Soft Romance', 'Date Night', 'Connection'],
    phaseItems: {
      preCare: ['Conversation cards', 'Scented candle', 'Personalised note', 'Premium chocolates'],
      intimateCare: ['Lubricant', 'Massage oil', 'Wellness essentials', 'Intimate wipes'],
      postCare: ['Herbal tea', 'Nuts', 'Dark chocolate', 'Comfort snack'],
    },
  },
  {
    id: 'after-dark-card-deck',
    name: 'After Dark Card Deck',
    slug: 'after-dark-card-deck',
    description:
      'A playful premium couple card deck made for chemistry, laughter, teasing, and deeper connection.',
    startingPrice: '₹999',
    image: '/images/placeholders/after-dark-card-deck.png',
    alt: 'Premium after dark couple card deck in matte black and champagne gold packaging with romantic question cards and elegant typography',
    badge: 'Playful Add-on',
    recommendedFor: ['Card Games', 'Playful Couples', 'Add-on'],
    phaseItems: {
      preCare: ['After-dark cards', 'Playful prompts', 'Conversation starters'],
      intimateCare: ['Comfort suggestion card', 'Wellness reminder card'],
      postCare: ['Reflection card', 'Memory note'],
    },
  },
  {
    id: 'first-date-night-kit',
    name: 'First Date Night Kit',
    slug: 'first-date-night-kit',
    description:
      'A soft and charming kit for couples planning their first special date night together.',
    startingPrice: '₹1,499',
    image: '/images/placeholders/first-date-night-kit.png',
    alt: 'First date night kit with chocolates, conversation cards, mini perfume, music QR card, candle, and elegant private packaging',
    badge: 'Soft Start',
    recommendedFor: ['First Date', 'New Couples', 'Soft Romance'],
    phaseItems: {
      preCare: ['Chocolates', 'Conversation cards', 'Mini candle', 'Music QR card'],
      intimateCare: ['Comfort-first wellness card', 'Trusted essentials on request'],
      postCare: ['Tea sachet', 'Light snack', 'Memory card'],
    },
  },
  {
    id: 'honeymoon-kit',
    name: 'Honeymoon Kit',
    slug: 'honeymoon-kit',
    description:
      'A travel-friendly luxury kit for honeymoon couples, curated for romance, relaxation, and private comfort.',
    startingPrice: '₹3,999',
    image: '/images/placeholders/honeymoon-kit.png',
    alt: 'Honeymoon luxury couple kit with travel perfumes, satin eye mask, bath salts, chocolates, couple game cards, personalised note, and discreet wellness items',
    badge: 'Travel Luxury',
    recommendedFor: ['Honeymoon', 'Travel', 'Newlyweds'],
    phaseItems: {
      preCare: ['Travel perfumes', 'Premium chocolates', 'Couple game cards', 'Music QR card'],
      intimateCare: ['Trusted condoms', 'Lubricant', 'Massage oil', 'Intimate wipes'],
      postCare: ['Hydration powder', 'Nuts', 'Relaxing tea', 'Comfort snack'],
    },
  },
  {
    id: 'bridal-intimacy-kit',
    name: 'Bridal Intimacy Kit',
    slug: 'bridal-intimacy-kit',
    description:
      'A gentle, premium kit designed for brides and newlyweds with comfort, privacy, emotional reassurance, and thoughtful care.',
    startingPrice: '₹3,499',
    image: '/images/placeholders/bridal-intimacy-kit.png',
    alt: 'Bridal intimacy kit with ivory and champagne gold packaging, soft candle, personalised note, chocolates, comfort essentials, and discreet wellness products',
    badge: 'Bride Comfort',
    recommendedFor: ['Bride-to-be', 'Newlyweds', 'Comfort Care'],
    phaseItems: {
      preCare: ['Comfort note', 'Soft chocolates', 'Music QR card', 'Gentle conversation cards'],
      intimateCare: ['Trusted condoms', 'Lubricant', 'Intimate wipes', 'Comfort-focused wellness essentials'],
      postCare: ['Hydration powder', 'Herbal tea', 'Nuts', 'Cooling wipes'],
    },
  },
  {
    id: 'long-distance-reunion-kit',
    name: 'Long Distance Reunion Kit',
    slug: 'long-distance-reunion-kit',
    description:
      'A deeply emotional kit for couples meeting after weeks or months apart, designed around anticipation, memory, and closeness.',
    startingPrice: '₹2,999',
    image: '/images/placeholders/long-distance-reunion-kit.png',
    alt: 'Long distance reunion couple box with open-when letters, perfume pair, countdown cards, chocolates, romantic memory cards, and premium discreet packaging',
    badge: 'Emotional Pick',
    recommendedFor: ['Long Distance', 'Reunion', 'Emotional Gifting'],
    phaseItems: {
      preCare: ['Open-when letter', 'Countdown cards', 'Perfume pair', 'Premium chocolates'],
      intimateCare: ['Trusted condoms', 'Lubricant', 'Massage oil', 'Wellness essentials'],
      postCare: ['Hydration powder', 'Nuts', 'Memory card', 'Comfort snack'],
    },
  },
  {
    id: 'babymoon-kit',
    name: 'Babymoon Kit',
    slug: 'babymoon-kit',
    description:
      'A gentle luxury bonding kit for expecting couples, focused on comfort, relaxation, emotional closeness, and safe-feeling romance.',
    startingPrice: '₹3,999',
    image: '/images/placeholders/babymoon-kit.png',
    alt: 'Babymoon couple wellness kit with caffeine-free tea, soft snacks, belly care items, memory journal, candles, personalised note, and comfort gifts',
    badge: 'Gentle Luxury',
    recommendedFor: ['Expecting Couples', 'Babymoon', 'Gentle Romance'],
    phaseItems: {
      preCare: ['Caffeine-free tea', 'Memory journal', 'Soft chocolates', 'Personalised note'],
      intimateCare: ['Comfort-first wellness suggestions', 'Gentle massage oil on request', 'Relaxation essentials'],
      postCare: ['Hydration support', 'Healthy nuts', 'Soft snack', 'Relaxing tea'],
    },
  },
];
