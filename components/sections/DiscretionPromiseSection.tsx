'use client';

import {
  Gift,
  Lock,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import SectionHeader from '@/components/motion/SectionHeader';
import FeatureCard from '@/components/cards/FeatureCard';
import Reveal from '@/components/motion/Reveal';

const items = [
  {
    title: 'Plain Outer Packaging',
    description: 'No loud branding on the outside. Delivery presentation stays plain, clean, and privacy-first.',
    icon: PackageCheck,
  },
  {
    title: 'Luxurious Inner Reveal',
    description: 'Inside the box, the experience feels elevated, warm, and beautifully arranged for the moment.',
    icon: Gift,
  },
  {
    title: 'Private WhatsApp Support',
    description: 'Sensitive preferences and gifting details are handled privately instead of through public forms.',
    icon: MessageCircle,
  },
  {
    title: 'Respectful Curation',
    description: 'Every recommendation is shaped around comfort level, occasion, and the tone you want to create.',
    icon: ShieldCheck,
  },
  {
    title: 'Safe Gift Delivery',
    description: 'Dispatch guidance is handled carefully so the experience arrives discreetly and in good condition.',
    icon: Truck,
  },
  {
    title: 'No Public Checkout',
    description: 'Privelle avoids a loud ecommerce flow. Confirmation happens privately and thoughtfully.',
    icon: Lock,
  },
];

export default function DiscretionPromiseSection() {
  return (
    <section
      id="discretion"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(90,16,34,0.24),transparent_30%),radial-gradient(circle_at_right,rgba(201,162,39,0.08),transparent_36%),#111111]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Privacy, Preserved"
          title="Our Discretion Promise"
          description="Everything about Privelle is designed to protect privacy while preserving luxury."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              variant="trust"
              index={index}
            />
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-champagneGold/15 bg-ivoryWhite/[0.035] p-6 text-center text-sm leading-relaxed text-ivoryWhite/65 backdrop-blur">
            From outer packaging to private consultation, discretion is not an extra feature. It is built into the Privelle experience.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
