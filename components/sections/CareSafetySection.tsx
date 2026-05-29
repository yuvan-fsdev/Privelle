'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  BadgeCheck,
  HeartHandshake,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import SectionHeader from '@/components/motion/SectionHeader';
import Reveal from '@/components/motion/Reveal';

const points = [
  {
    title: 'Trusted wellness brands',
    description: 'Wellness items are sourced from known brands selected for comfort, presentation, and trust.',
    icon: ShieldCheck,
  },
  {
    title: 'Sealed products',
    description: 'Items that require sealed presentation are checked before packing so the box arrives properly prepared.',
    icon: PackageCheck,
  },
  {
    title: 'Expiry checks',
    description: 'Time-sensitive products are checked during curation so the final box is assembled with care.',
    icon: BadgeCheck,
  },
  {
    title: 'Hygiene-first handling',
    description: 'Packing and presentation are handled with a clean, comfort-first process suited to private gifting.',
    icon: Sparkles,
  },
  {
    title: 'Customer preferences respected',
    description: 'Selections are adjusted around comfort level, gifting tone, and the boundaries you want to maintain.',
    icon: HeartHandshake,
  },
];

export default function CareSafetySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="care-safety"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(201,162,39,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(90,16,34,0.26),transparent_40%),#111111]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Comfort-First Standards"
          title="Carefully Sourced. Comfort First."
          description="Privelle handles intimate wellness and gifting details with a clear standard of trust, hygiene, and respectful curation."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-[1.75rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.035] p-5 backdrop-blur"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-champagneGold/10 text-champagneGold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl text-ivoryWhite">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivoryWhite/65">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <Reveal delay={0.2} className="h-full">
            <div className="glass-panel gold-border flex h-full flex-col justify-between rounded-[2rem] p-6 sm:p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-champagneGold">
                  Privelle care note
                </p>
                <h3 className="mt-4 font-heading text-3xl text-ivoryWhite">
                  Respectful sourcing, without overclaiming.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ivoryWhite/70">
                  We focus on trusted sourcing, sealed presentation where relevant, expiry checks, and comfort-first curation. Preferences are discussed privately so each box feels appropriate for the couple receiving it.
                </p>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-champagneGold/15 bg-matteBlack/40 p-5">
                <p className="text-sm leading-relaxed text-ivoryWhite/65">
                  Privelle does not make medical claims.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
