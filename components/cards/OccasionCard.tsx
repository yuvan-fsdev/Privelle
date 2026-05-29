'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Baby,
  CalendarHeart,
  Gem,
  Heart,
  type LucideIcon,
  MessageCircle,
  Moon,
  Plane,
  Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Occasion } from '@/constants/occasions';
import { cn } from '@/lib/utils';

interface OccasionCardProps {
  occasion: Occasion;
  index: number;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Heart,
  CalendarHeart,
  Plane,
  MessageCircle,
  Baby,
  Sparkles,
  Gem,
  Moon,
};

export default function OccasionCard({
  occasion,
  index,
  className,
}: OccasionCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[occasion.icon] ?? Heart;

  return (
    <motion.div
      aria-label={`Explore Privelle options for ${occasion.title}`}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.015 }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
      className={cn(
        'group relative min-h-[22rem] w-full overflow-hidden rounded-[1.5rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.03] p-5 text-left backdrop-blur-md',
        'transition-colors duration-300 hover:border-champagneGold/40 hover:bg-champagneGold/[0.055] hover:shadow-[0_22px_70px_rgba(201,162,39,0.09)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagneGold focus-visible:ring-offset-2 focus-visible:ring-offset-matteBlack',
        className
      )}
    >
      <Link
        href={occasion.href}
        aria-label={`Explore Privelle options for ${occasion.title}`}
        className="block h-full focus-visible:outline-none"
      >
        <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-deepBurgundy/30 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute inset-x-6 top-0 h-px bg-champagneGold/20" />

        <div className="relative flex h-full flex-col">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { rotate: [0, 2.5, 0], y: [0, -2, 0] }
            }
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold"
          >
            <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
          </motion.div>

          <span className="mb-4 inline-flex w-fit rounded-full border border-champagneGold/20 bg-deepBurgundy/20 px-3 py-1 text-xs font-medium text-softRose">
            {occasion.recommendedFor}
          </span>

          <h3 className="font-heading text-2xl font-semibold leading-tight text-ivoryWhite">
            {occasion.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-champagneGold">
            {occasion.subtitle}
          </p>
          <p className="mt-4 flex-1 text-sm leading-6 text-ivoryWhite/65">
            {occasion.description}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-roseBeige transition-colors duration-300 group-hover:text-champagneGold">
            Explore this mood
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
