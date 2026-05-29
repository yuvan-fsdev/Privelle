'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  category?: string;
  index?: number;
  variant?: 'default' | 'trust';
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  category,
  index = 0,
  variant = 'default',
  className,
}: FeatureCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const variantStyles = {
    default:
      'bg-ivoryWhite/[0.035] border-ivoryWhite/10 hover:bg-champagneGold/[0.045]',
    trust:
      'bg-ivoryWhite/[0.04] border-champagneGold/10 hover:bg-deepBurgundy/[0.18]',
  };

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{
        delay: index * 0.06,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.22 }}
      className={cn(
        'group relative h-full overflow-hidden rounded-[1.75rem] border p-5 backdrop-blur-md transition-colors duration-300 hover:border-champagneGold/40 hover:shadow-[0_20px_70px_rgba(201,162,39,0.08)]',
        variantStyles[variant],
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-champagneGold/28 to-transparent" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-champagneGold/0 blur-3xl transition-colors duration-300 group-hover:bg-champagneGold/10" />

      <div className="relative flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagneGold/10 text-champagneGold transition-colors duration-300 group-hover:bg-champagneGold/15"
          >
            <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
          </motion.div>
          {category ? (
            <Badge
              variant={variant === 'trust' ? 'burgundy' : 'subtle'}
              className="bg-matteBlack/45 backdrop-blur-md transition-colors duration-300 group-hover:border-champagneGold/25 group-hover:text-ivoryWhite/80"
            >
              {category}
            </Badge>
          ) : null}
        </div>

        <h3 className="font-heading text-xl font-semibold leading-tight text-ivoryWhite">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-ivoryWhite/66">{description}</p>
      </div>
    </motion.article>
  );
}
