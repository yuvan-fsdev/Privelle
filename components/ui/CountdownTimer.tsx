'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getTimeRemaining, type TimeRemaining } from '@/lib/launch';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  className?: string;
  onComplete?: () => void;
}

const units: Array<{
  key: keyof Pick<TimeRemaining, 'days' | 'hours' | 'minutes' | 'seconds'>;
  label: string;
}> = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

export default function CountdownTimer({
  className,
  onComplete,
}: CountdownTimerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const nextTime = getTimeRemaining();
      setTimeRemaining(nextTime);

      if (nextTime.total <= 0) {
        onComplete?.();
      }
    };

    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, [onComplete]);

  if (!timeRemaining || timeRemaining.total <= 0) {
    return null;
  }

  return (
    <div className={cn('grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4', className)}>
      {units.map((unit, index) => (
        <motion.div
          key={unit.key}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.06,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-hidden rounded-2xl border border-champagneGold/15 bg-matteBlack/65 p-4 text-center shadow-[0_0_30px_rgba(90,16,34,0.18)] backdrop-blur-md sm:p-5"
        >
          <div className="absolute inset-x-6 top-0 h-px bg-champagneGold/35" />
          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.18, 0.32, 0.18] }
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.16),transparent_55%)]"
          />
          <div className="relative">
            <div
              className="font-heading text-4xl font-semibold leading-none text-champagneGold sm:text-5xl"
              aria-label={`${timeRemaining[unit.key]} ${unit.label}`}
            >
              {String(timeRemaining[unit.key]).padStart(2, '0')}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wide text-ivoryWhite/70">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
