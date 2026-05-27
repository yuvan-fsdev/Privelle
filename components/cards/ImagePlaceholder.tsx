'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

export default function ImagePlaceholder({
  src,
  alt,
  className,
  priority = false,
  width = 500,
  height = 500,
  aspectRatio = 'square',
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  const showPlaceholder = !src || imageError;

  if (showPlaceholder) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'relative overflow-hidden rounded-lg bg-gradient-to-br from-softBlack via-matteBlack to-deepBurgundy/30',
          'border border-champagneGold/20 flex items-center justify-center',
          'backdrop-blur-sm',
          aspectRatioClasses[aspectRatio],
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-deepBurgundy/40 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 text-center px-4">
          <p className="text-ivoryWhite/60 text-sm font-light">
            Image coming soon
          </p>
          <p className="text-champagneGold/40 text-xs mt-2">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-softBlack',
        'group',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105',
          isLoading ? 'blur-sm' : 'blur-0'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => setImageError(true)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-champagneGold/10 to-deepBurgundy/10 animate-pulse" />
      )}
    </div>
  );
}
