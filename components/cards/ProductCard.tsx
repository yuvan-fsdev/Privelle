'use client';

import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import ImagePlaceholder from '@/components/cards/ImagePlaceholder';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import type { Product } from '@/constants/products';
import { getProductWhatsAppMessage, getWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index: number;
  className?: string;
}

const phasePreview = [
  { key: 'preCare', label: 'Pre-Care' },
  { key: 'intimateCare', label: 'Intimate Care' },
  { key: 'postCare', label: 'Post-Care' },
] as const;

export default function ProductCard({
  product,
  index,
  className,
}: ProductCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{
        delay: index * 0.05,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.18 }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.035] p-3 backdrop-blur-md',
        'transition-colors duration-300 hover:border-champagneGold/40 hover:bg-champagneGold/[0.04] hover:shadow-[0_24px_80px_rgba(201,162,39,0.11)]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-champagneGold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <ImagePlaceholder
          src={product.image}
          alt={product.alt}
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
            {product.badge}
          </Badge>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-4 flex flex-wrap gap-2">
          {product.recommendedFor.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-champagneGold/15 bg-matteBlack/35 px-3 py-1 text-xs text-ivoryWhite/68"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-2xl font-semibold leading-tight text-ivoryWhite">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-ivoryWhite/65">
          {product.description}
        </p>

        <div className="mt-5 rounded-2xl border border-champagneGold/15 bg-matteBlack/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-warmTaupe">
            Starts at
          </p>
          <p className="mt-1 font-heading text-3xl font-semibold text-champagneGold">
            {product.startingPrice}
          </p>
          <p className="mt-2 text-xs leading-5 text-ivoryWhite/50">
            Final pricing depends on customisation and item quantity.
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {phasePreview.map((phase) => (
            <div key={phase.key}>
              <p className="text-xs font-semibold uppercase tracking-wide text-champagneGold/82">
                {phase.label}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.phaseItems[phase.key].slice(0, 2).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ivoryWhite/10 bg-ivoryWhite/[0.035] px-2.5 py-1 text-[0.72rem] leading-5 text-ivoryWhite/62"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Button asChild size="md" variant="primary" className="w-full">
            <a
              href={getWhatsAppUrl(getProductWhatsAppMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Enquire Now
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
