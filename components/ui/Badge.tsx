import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'burgundy' | 'ivory' | 'subtle';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'gold', children, ...props }, ref) => {
    const variantStyles = {
      gold: 'bg-champagneGold/20 border border-champagneGold/50 text-champagneGold',
      burgundy: 'bg-deepBurgundy/20 border border-deepBurgundy/50 text-softRose',
      ivory: 'bg-ivoryWhite/10 border border-ivoryWhite/30 text-ivoryWhite',
      subtle: 'bg-white/5 border border-white/10 text-warmTaupe',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium tracking-wide',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
