'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-champagneGold/20 rounded-lg overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleItem(item.id)}
            className={cn(
              'w-full px-6 py-4 flex items-center justify-between text-left font-medium transition-colors',
              openItems.has(item.id)
                ? 'bg-champagneGold/10 text-champagneGold'
                : 'text-ivoryWhite hover:bg-white/5'
            )}
            aria-expanded={openItems.has(item.id)}
          >
            <span>{item.title}</span>
            <ChevronDown
              size={20}
              className={cn(
                'transition-transform duration-300',
                openItems.has(item.id) && 'rotate-180'
              )}
            />
          </button>
          {openItems.has(item.id) && (
            <div className="border-t border-champagneGold/10 bg-white/[0.025] px-6 py-4 text-sm leading-relaxed text-warmTaupe">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
