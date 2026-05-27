'use client';

import { Check, type LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ExperiencePhase = {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  toneLabel: string;
  icon: LucideIcon;
};

interface PhaseCardProps {
  phase: ExperiencePhase;
  index: number;
  className?: string;
}

export default function PhaseCard({
  phase,
  index,
  className,
}: PhaseCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = phase.icon;

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{
        delay: index * 0.1,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.035] p-6 backdrop-blur-md',
        'transition-colors duration-300 hover:border-champagneGold/40 hover:bg-champagneGold/[0.045] hover:shadow-[0_24px_80px_rgba(201,162,39,0.1)]',
        className
      )}
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-deepBurgundy/35 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-8 top-0 h-px bg-champagneGold/20" />

      <div className="relative flex items-start justify-between gap-4">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold"
        >
          <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
        </motion.div>
        <span className="rounded-full border border-mutedGold/25 px-3 py-1 text-xs font-semibold text-mutedGold">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative mt-6">
        <h3 className="font-heading text-2xl font-semibold leading-tight text-ivoryWhite">
          {phase.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-champagneGold">
          {phase.subtitle}
        </p>
        <p className="mt-4 text-sm leading-7 text-ivoryWhite/68">
          {phase.description}
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {phase.items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-champagneGold/15 bg-matteBlack/40 px-3 py-1.5 text-xs leading-5 text-ivoryWhite/70"
          >
            <Check size={12} aria-hidden="true" className="text-champagneGold/75" />
            {item}
          </span>
        ))}
      </div>

      <div className="relative mt-auto pt-6">
        <div className="rounded-2xl border border-roseBeige/15 bg-deepBurgundy/20 px-4 py-3 text-sm font-medium leading-6 text-softRose">
          {phase.toneLabel}
        </div>
      </div>
    </motion.article>
  );
}
