'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/motion/Reveal';
import { isFounderOfferActive } from '@/lib/launch';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';

export default function FinalCTASection() {
  const reduceMotion = useReducedMotion();
  const [founderActive, setFounderActive] = useState<boolean | null>(null);

  useEffect(() => {
    setFounderActive(isFounderOfferActive());
  }, []);

  const isFounder = founderActive === true;
  const eyebrow = isFounder
    ? 'Founder Access Closing Soon'
    : 'Private Moments, Beautifully Curated';
  const title = isFounder
    ? 'Reserve Your Founder Box Before the First Dispatch'
    : 'Ready to Create a Memorable Private Moment?';
  const description = isFounder
    ? "Pre-book now to be among the first couples to receive Privelle and enjoy the exclusive 20% Founder's Offer."
    : "Explore Privelle's hand-curated luxury boxes for modern couples, special nights, anniversaries, honeymoons, and private celebrations.";
  const supportNote = isFounder
    ? 'Every box is hand-sourced and requires approximately 2 weeks for preparation.'
    : "Explore Privelle's collection privately, then confirm the right box on WhatsApp.";
  const primaryLabel = isFounder ? 'Reserve Founder Box' : 'Enquire on WhatsApp';
  const primaryMessage = isFounder
    ? PRE_LAUNCH_WHATSAPP_MESSAGE
    : POST_LAUNCH_WHATSAPP_MESSAGE;
  const microcopy = isFounder
    ? 'Private WhatsApp confirmation. No cart. No checkout.'
    : 'Private guidance through WhatsApp.';

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.08),transparent_30%),radial-gradient(circle_at_right,rgba(90,16,34,0.3),transparent_40%),#111111]" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-champagneGold/20 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(90,16,34,0.28),transparent_42%),rgba(255,255,255,0.03)] px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-8 lg:rounded-[2.5rem] lg:px-12 lg:py-16">
            <motion.div
              aria-hidden="true"
              className="absolute -right-10 top-8 h-28 w-28 rounded-full bg-champagneGold/10 blur-3xl"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -10, 0], opacity: [0.55, 0.8, 0.55] }
              }
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <Reveal y={16}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-champagneGold">
                {eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mx-auto mt-5 max-w-4xl font-heading text-4xl leading-tight text-ivoryWhite sm:text-5xl">
                {title}
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-ivoryWhite/72 sm:text-lg">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-roseBeige/80 sm:text-base">
                {supportNote}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href={getWhatsAppUrl(primaryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${primaryLabel} on WhatsApp`}
                  >
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    {primaryLabel}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group w-full sm:w-auto"
                >
                  <Link href="/collection" aria-label="View the Privelle collection">
                    View Collection
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-4 text-sm leading-6 text-ivoryWhite/55">
                {microcopy}
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
