'use client';

import {
  Gift,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';
import Button from '@/components/ui/Button';
import { isFounderOfferActive } from '@/lib/launch';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';

const steps = [
  {
    title: 'Choose Your Box',
    description:
      'Explore the occasion-based collections and select the experience that matches your moment.',
    icon: Gift,
  },
  {
    title: 'Customise on WhatsApp',
    description:
      'Share your budget, comfort level, add-ons, delivery city, and personal note privately with us.',
    icon: MessageCircle,
  },
  {
    title: 'Hand-Sourced in 2 Weeks',
    description:
      'Every product is hand-sourced, quality-checked, and assembled with boutique-level attention.',
    icon: HeartHandshake,
  },
  {
    title: 'Discreet Dispatch',
    description:
      'Your box is packed beautifully inside and discreetly outside, with privacy-first delivery support.',
    icon: PackageCheck,
  },
];

export default function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isFounderActive, setIsFounderActive] = useState<boolean | null>(null);

  useEffect(() => {
    setIsFounderActive(isFounderOfferActive());
  }, []);

  const whatsappMessage =
    isFounderActive === true
      ? PRE_LAUNCH_WHATSAPP_MESSAGE
      : POST_LAUNCH_WHATSAPP_MESSAGE;

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-softBlack py-16 lg:py-24"
    >
      <div className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-champagneGold/8 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-deepBurgundy/22 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple. Private. Personal."
          title="How Privelle Works"
          description="Privelle is not mass-packed and not checkout-driven. Every experience is curated privately, confirmed through WhatsApp, and prepared with care."
        />

        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute left-[12.5%] right-[12.5%] top-14 hidden h-px origin-left bg-champagneGold/20 lg:block"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative rounded-[1.5rem] border border-champagneGold/15 bg-matteBlack/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-champagneGold/35 hover:bg-matteBlack/80"
                >
                  <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-champagneGold/20 via-champagneGold/10 to-transparent lg:hidden" />
                  <div className="relative">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                      className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold shadow-[0_0_26px_rgba(201,162,39,0.08)]"
                    >
                      <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                    </motion.div>

                    <p className="text-xs font-semibold uppercase tracking-wide text-mutedGold">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-heading text-xl font-semibold text-ivoryWhite">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ivoryWhite/65">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-champagneGold/15 bg-ivoryWhite/[0.035] p-5 text-center backdrop-blur-md">
            <p className="text-sm leading-7 text-roseBeige/90 sm:text-base">
              Please pre-book at least 2 weeks in advance because every Privelle box is hand-sourced and customised.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-8 max-w-md text-center">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start a private Privelle enquiry on WhatsApp"
              >
                Start a Private Enquiry
              </a>
            </Button>
            <p className="mt-4 text-xs leading-6 text-ivoryWhite/45">
              Private support on WhatsApp. No cart. No checkout. No public details.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
