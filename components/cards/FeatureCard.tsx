import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn('p-6 rounded-lg gold-border', className)}>
      {icon && (
        <div className="mb-4 text-champagneGold text-3xl">{icon}</div>
      )}
      <h3 className="font-heading text-xl font-semibold text-ivoryWhite mb-2">
        {title}
      </h3>
      <p className="text-warmTaupe text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
