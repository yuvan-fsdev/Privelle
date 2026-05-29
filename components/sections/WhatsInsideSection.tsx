'use client';

import {
  Candy,
  Flame,
  Gamepad2,
  Gift,
  Heart,
  Music,
  PackageCheck,
  PenLine,
  ShieldCheck,
  SprayCan,
  GlassWater,
  FileHeart,
  type LucideIcon,
} from 'lucide-react';
import FeatureCard from '@/components/cards/FeatureCard';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';

const items: Array<{
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
}> = [
  {
    title: 'White-Label Scented Candles',
    description: 'Soft candlelight to create warmth, calm, and a romantic atmosphere.',
    category: 'Pre-Care',
    icon: Flame,
  },
  {
    title: 'Couple Card Games',
    description: 'Playful prompts, romantic questions, and conversation starters to reduce awkwardness and build chemistry.',
    category: 'Pre-Care',
    icon: Gamepad2,
  },
  {
    title: 'Premium Chocolates',
    description: 'Sweet, elegant additions that make the unboxing feel indulgent and celebratory.',
    category: 'Pre-Care',
    icon: Candy,
  },
  {
    title: 'Music QR Cards',
    description: 'Private playlist cards to set the mood with music chosen for the moment.',
    category: 'Pre-Care',
    icon: Music,
  },
  {
    title: 'Trusted Wellness Essentials',
    description: 'Comfort-first essentials such as condoms, lubricants, and intimate wipes sourced from trusted brands.',
    category: 'Intimate Care',
    icon: ShieldCheck,
  },
  {
    title: 'Romantic Accessories',
    description: 'Subtle, tasteful accessories selected based on comfort level and occasion.',
    category: 'Intimate Care',
    icon: Heart,
  },
  {
    title: 'Couple Perfumes',
    description: 'Signature fragrance pairings that turn the moment into a lasting memory.',
    category: 'Add-On',
    icon: SprayCan,
  },
  {
    title: 'Personalised Notes',
    description: 'Private messages, love notes, or occasion cards that make the box feel deeply personal.',
    category: 'Personalised',
    icon: PenLine,
  },
  {
    title: 'Luxury Customised Letters',
    description: 'Romantic, playful, or emotional letters crafted to sound like your relationship.',
    category: 'Personalised',
    icon: FileHeart,
  },
  {
    title: 'Hydration & Post-Care',
    description: 'Hydration powders, nuts, herbal tea, snacks, and comfort items because care after intimacy matters too.',
    category: 'Post-Care',
    icon: GlassWater,
  },
  {
    title: 'Premium Discreet Packaging',
    description: 'Plain outer packaging with a luxurious inner reveal, designed for privacy and presentation.',
    category: 'Packaging',
    icon: PackageCheck,
  },
  {
    title: 'Custom Keepsakes',
    description: 'Optional photo cards, name tags, memory notes, or small personalised gifts.',
    category: 'Add-On',
    icon: Gift,
  },
];

export default function WhatsInsideSection() {
  return (
    <section
      id="whats-inside"
      className="relative overflow-hidden bg-matteBlack py-16 lg:py-24"
    >
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-champagneGold/8 blur-3xl" />
      <div className="absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-deepBurgundy/28 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Inside the Experience"
          title="What Goes Inside a Privelle Box?"
          description="Each Privelle box is thoughtfully layered with emotional, romantic, wellness, and comfort-focused essentials. The exact mix depends on your occasion, budget, and comfort level."
        />

        <Reveal delay={0.12}>
          <p className="mx-auto -mt-8 mb-10 max-w-3xl text-center text-sm leading-7 text-roseBeige/85 sm:text-base md:-mt-10">
            Every box follows our Pre-Care, Intimate Care, and Post-Care philosophy - so the experience feels complete before, during, and after the private moment.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              category={item.category}
              index={index}
            />
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-champagneGold/18 bg-ivoryWhite/[0.04] p-5 text-center backdrop-blur-md sm:p-6">
            <p className="text-sm leading-7 text-ivoryWhite/72 sm:text-base">
              The final item list is always confirmed privately on WhatsApp. We never force a fixed box - we curate based on occasion, budget, and comfort.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
