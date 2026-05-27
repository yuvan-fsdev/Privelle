'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
}

export default function FloatingElement({
  children,
  className,
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
        rotate: [0, 1.2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}
