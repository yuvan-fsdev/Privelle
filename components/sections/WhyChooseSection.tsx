'use client';

import {
  BadgeCheck,
  Gift,
  Heart,
  HeartHandshake,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wand2,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FeatureCard from '@/components/cards/FeatureCard';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';
import Button from '@/components/ui/Button';
import { isFounderOfferActive } from '@/lib/launch';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';

type TrustItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const baseItems: TrustItem[] = [
  {
    title: 'Discreet Packaging',
    description: 'Plain and privacy-first outside, beautifully curated and luxurious inside.',
    icon: Lock,
  },
  {
    title: 'Hand-Sourced Products',
    description: 'Every box is prepared with care instead of being mass-packed from shelves.',
    icon: HeartHandshake,
  },
  {
    title: '2-Week Premium Preparation',
    description: 'We recommend booking at least 2 weeks in advance so every detail can be sourced, checked, and packed beautifully.',
    icon: BadgeCheck,
  },
  {
    title: 'Premium Curation',
    description: 'Each product is selected to match your occasion, budget, comfort level, and gifting intent.',
    icon: Wand2,
  },
  {
    title: 'Couple-Friendly Experience',
    description: 'Designed to feel warm, elegant, and comfortable for both partners.',
    icon: Heart,
  },
  {
    title: 'Private WhatsApp Support',
    description: 'No public forms or checkout pressure. Your preferences are discussed privately through WhatsApp.',
    icon: MessageCircle,
  },
  {
    title: 'Customisable Boxes',
    description: 'Add perfumes, personalised gifts, letters, music cards, card games, or comfort essentials.',
    icon: Gift,
  },
  {
    title: 'Comfort & Safety First',
    description: 'Wellness products are sourced from trusted brands with hygiene, sealing, and expiry checks in mind.',
    icon: ShieldCheck,
  },
];

export default function WhyChooseSection() {
  const shouldReduceMotion = useReducedMotion();
  const [founderActive, setFounderActive] = useState<boolean | null>(null);

  useEffect(() => {
    setFounderActive(isFounderOfferActive());
  }, []);

  const trustItems = founderActive
    ? [
        ...baseItems,
        {
          title: 'Founder Collection Benefits',
          description: "Pre-book before launch to receive 20% Founder's Offer and priority July dispatch.",
          icon: Sparkles,
        },
      ]
    : baseItems;

  const ctaLabel = founderActive ? 'Reserve Founder Box' : 'Start Private Enquiry';
  const ctaMessage = founderActive
    ? PRE_LAUNCH_WHATSAPP_MESSAGE
    : POST_LAUNCH_WHATSAPP_MESSAGE;

  return (
    <section
      id="why-privelle"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#171717_0%,rgba(90,16,34,0.36)_52%,#111111_100%)] py-16 lg:py-24"
    >
      <div className="absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-champagneGold/8 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-deepBurgundy/28 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Private Luxury, Thoughtfully Done"
          title="Why Couples Choose Privelle"
          description="Privelle is built for couples who want privacy without compromising luxury, comfort, presentation, or emotional thoughtfulness."
        />

        <Reveal delay={0.12}>
          <div className="mx-auto mb-10 max-w-4xl rounded-[1.75rem] border border-champagneGold/18 bg-ivoryWhite/[0.04] p-5 text-center backdrop-blur-md sm:p-6">
            <p className="text-sm leading-7 text-ivoryWhite/74 sm:text-base">
              Privelle is intentionally WhatsApp-first so every order can be handled with privacy, sensitivity, and personal attention.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
              variant="trust"
            />
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-champagneGold/20 bg-matteBlack/60 p-6 text-center shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-8"
        >
          <h3 className="font-heading text-3xl font-semibold leading-tight text-ivoryWhite">
            Need help choosing discreetly?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ivoryWhite/68 sm:text-base">
            Tell us your occasion and comfort level on WhatsApp. We&apos;ll suggest the right box without any pressure.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
              <a
                href={getWhatsAppUrl(ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ctaLabel} on WhatsApp`}
              >
                <MessageCircle size={18} aria-hidden="true" />
                {ctaLabel}
              </a>
            </Button>
          </div>
          <p className="mt-4 text-xs leading-5 text-ivoryWhite/45">
            Private support. No cart. No checkout.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
