'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      {eyebrow && (
        <Reveal delay={0} y={12}>
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-champagneGold">
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal delay={eyebrow ? 0.1 : 0}>
        <h2
          className={cn(
            'mb-4 font-heading text-4xl font-semibold tracking-normal text-ivoryWhite md:text-5xl',
            alignClasses[align]
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={eyebrow ? 0.2 : 0.1}>
          <p
            className={cn(
              'text-warmTaupe text-lg md:text-xl max-w-2xl leading-relaxed',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
