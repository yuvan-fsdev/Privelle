'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { isFounderOfferActive } from '@/lib/launch';
import { getWhatsAppUrl, PRE_LAUNCH_WHATSAPP_MESSAGE } from '@/lib/whatsapp';

const benefits = [
  {
    title: "20% Founder's Offer",
    description: 'Exclusive early access pricing for our first Privelle customers.',
  },
  {
    title: 'Priority July Dispatch',
    description: 'Founder pre-bookings are prepared first for the July 1 dispatch batch.',
  },
  {
    title: 'Hand-Curated Luxury',
    description: 'Each box is sourced, checked, packed, and finished with boutique care.',
  },
  {
    title: 'Limited Batch Access',
    description: 'Our first collection is intentionally limited to maintain quality and presentation.',
  },
];

export default function FounderOfferSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState<boolean | null>(null);

  useEffect(() => {
    setIsActive(isFounderOfferActive());
  }, []);

  const handleComplete = useCallback(() => {
    setIsActive(false);
  }, []);

  if (isActive !== true) {
    return null;
  }

  return (
    <section
      id="founder-offer"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#111111_0%,rgba(90,16,34,0.34)_52%,#111111_100%)] py-16 lg:py-24"
    >
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-champagneGold/10 blur-3xl" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-deepBurgundy/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-champagneGold/20 bg-matteBlack/72 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-8 lg:p-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="gold" className="mb-5">
                Founder Pre-Booking
              </Badge>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-ivoryWhite sm:text-4xl lg:text-5xl">
                Founding Collection Pre-Bookings Are Open
              </h2>
              <p className="mt-5 text-base leading-8 text-ivoryWhite/72 sm:text-lg">
                Be among the first couples to experience Privelle. Pre-book now and enjoy an exclusive 20% Founder&apos;s Offer before our first dispatch begins on July 1, 2026.
              </p>
              <p className="mt-4 text-sm leading-7 text-roseBeige/85 sm:text-base">
                Every box is hand-sourced and prepared with care, so we recommend booking at least 2 weeks in advance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-10 max-w-4xl">
              <p className="mb-4 text-center text-sm font-medium uppercase tracking-wide text-champagneGold/80">
                First dispatch begins in
              </p>
              <CountdownTimer onComplete={handleComplete} />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-2xl border border-champagneGold/15 bg-white/[0.035] p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-champagneGold/35 text-sm font-semibold text-champagneGold">
                  {index + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold text-ivoryWhite">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-warmTaupe">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.18}>
            <div className="mx-auto mt-10 max-w-md text-center">
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(PRE_LAUNCH_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reserve Founder Box on WhatsApp"
                >
                  Reserve Founder Box
                </a>
              </Button>
              <p className="mt-4 text-xs leading-6 text-ivoryWhite/45">
                No cart. No checkout. Private confirmation through WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
