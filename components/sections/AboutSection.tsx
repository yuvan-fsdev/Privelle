'use client';

import {
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';

const promises = [
  {
    label: 'Hand-sourced, not mass-packed',
    icon: Sparkles,
  },
  {
    label: 'Discreet outside, luxurious inside',
    icon: PackageCheck,
  },
  {
    label: 'Comfort-first intimate wellness',
    icon: ShieldCheck,
  },
  {
    label: 'Personalised through WhatsApp',
    icon: MessageCircle,
  },
];

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-matteBlack py-16 lg:py-24"
    >
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-ivoryWhite/5 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-deepBurgundy/30 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-champagneGold/20 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Crafted With Care"
            title="Not Just a Gift Box. A Private Experience."
            align="left"
            className="mb-8"
          />

          <div className="max-w-2xl space-y-5">
            <Reveal delay={0.2}>
              <p className="text-base leading-8 text-ivoryWhite/75 sm:text-lg">
                Privelle creates discreet, premium couple gifting experiences for newlyweds, anniversaries, date nights, honeymoons, reunions, and private celebrations. Every box is hand-sourced, carefully packed, and designed to help couples feel closer, calmer, and more connected.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base leading-8 text-ivoryWhite/72 sm:text-lg">
                We bring together thoughtful pre-care, trusted intimate wellness essentials, and post-care comfort items in one elegant, private, and beautifully curated experience.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="rounded-[1.5rem] border border-champagneGold/18 bg-champagneGold/[0.055] p-5">
                <p className="text-sm leading-7 text-roseBeige sm:text-base">
                  Because every Privelle box is hand-sourced and customised, we recommend placing your order at least 2 weeks in advance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="font-heading text-2xl font-semibold leading-tight text-champagneGold sm:text-3xl">
                Private luxury. Thoughtful care. Beautifully discreet.
              </p>
            </Reveal>
          </div>
        </div>

        <motion.aside
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-[2rem] border border-champagneGold/18 bg-ivoryWhite/[0.04] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8"
        >
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-champagneGold/10 blur-3xl" />
          <div className="absolute inset-x-8 top-0 h-px bg-champagneGold/25" />

          <div className="relative">
            <Badge variant="gold" className="mb-5">
              Boutique Curation
            </Badge>
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold">
                <HeartHandshake size={22} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-semibold leading-tight text-ivoryWhite sm:text-3xl">
                Designed for modern couples who value privacy.
              </h3>
            </div>

            <div>
              {promises.map((promise, index) => {
                const Icon = promise.icon;

                return (
                  <motion.div
                    key={promise.label}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.28 + index * 0.08,
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="group flex items-center gap-4 border-b border-ivoryWhite/10 py-4 last:border-b-0 transition-colors duration-300 hover:bg-champagneGold/[0.035]"
                  >
                    <motion.span
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagneGold/10 text-champagneGold"
                    >
                      <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                    </motion.span>
                    <span className="text-sm leading-6 text-ivoryWhite/75 sm:text-base">
                      {promise.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
