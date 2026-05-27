'use client';

import { ArrowUpRight, BadgeCheck, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import ImagePlaceholder from '@/components/cards/ImagePlaceholder';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import type { AddOn } from '@/constants/addOns';
import { getAddOnWhatsAppMessage, getWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

interface AddOnCardProps {
  addOn: AddOn;
  index: number;
  className?: string;
}

export default function AddOnCard({
  addOn,
  index,
  className,
}: AddOnCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{
        delay: index * 0.08,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.22 }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.035] p-4 backdrop-blur-md',
        'transition-colors duration-300 hover:border-champagneGold/40 hover:bg-deepBurgundy/[0.16] hover:shadow-[0_24px_80px_rgba(201,162,39,0.1)]',
        className
      )}
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-champagneGold/30 to-transparent" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-champagneGold/0 blur-3xl transition-colors duration-300 group-hover:bg-champagneGold/12" />

      <div className="relative">
        <ImagePlaceholder
          src={addOn.image}
          alt={addOn.alt}
          aspectRatio="landscape"
          width={720}
          height={540}
          className="rounded-[1.5rem]"
        />
        <div className="absolute left-3 top-3">
          <Badge
            variant="burgundy"
            className="bg-matteBlack/75 text-softRose shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            {addOn.badge}
          </Badge>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col pt-5">
        <h3 className="font-heading text-2xl font-semibold leading-tight text-ivoryWhite">
          {addOn.name}
        </h3>
        <p className="mt-2 font-heading text-lg italic leading-7 text-champagneGold">
          {addOn.tagline}
        </p>
        <p className="mt-4 text-sm leading-7 text-ivoryWhite/65">
          {addOn.description}
        </p>

        <div className="mt-5 rounded-2xl border border-champagneGold/15 bg-matteBlack/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-warmTaupe">
            Starts at
          </p>
          <p className="mt-1 font-heading text-3xl font-semibold text-champagneGold">
            {addOn.startingPrice}
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {addOn.inclusions.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <BadgeCheck
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
                className="mt-1 shrink-0 text-champagneGold"
              />
              <span className="text-sm leading-6 text-ivoryWhite/70">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-roseBeige/75">
            Best for
          </p>
          <div className="flex flex-wrap gap-2">
            {addOn.bestFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-champagneGold/15 bg-matteBlack/35 px-3 py-1 text-xs text-ivoryWhite/68"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <Button asChild size="md" variant="primary" className="w-full">
            <a
              href={getWhatsAppUrl(getAddOnWhatsAppMessage(addOn.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${addOn.name} on WhatsApp`}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Enquire Add-on
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
