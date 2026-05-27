import React from 'react';
import { cn } from '@/lib/utils';

interface GiftNoteCardProps {
  title: string;
  content: string;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}

export default function GiftNoteCard({
  title,
  content,
  className,
  onClick,
  selected = false,
}: GiftNoteCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'p-4 rounded-lg border-2 transition-all duration-300 text-left min-h-32',
        selected
          ? 'border-champagneGold bg-champagneGold/10'
          : 'border-champagneGold/20 hover:border-champagneGold/50',
        className
      )}
    >
      <h4 className="font-heading font-semibold text-ivoryWhite mb-2">
        {title}
      </h4>
      <p className="text-warmTaupe text-sm line-clamp-3">{content}</p>
    </button>
  );
}
