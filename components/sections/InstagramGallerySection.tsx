'use client';

import { ArrowUpRight, Instagram } from 'lucide-react';
import ImagePlaceholder from '@/components/cards/ImagePlaceholder';
import SectionHeader from '@/components/motion/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import Button from '@/components/ui/Button';

const galleryItems = [
  '/images/placeholders/instagram-1.jpg',
  '/images/placeholders/instagram-2.jpg',
  '/images/placeholders/instagram-3.jpg',
  '/images/placeholders/instagram-4.jpg',
  '/images/placeholders/instagram-5.jpg',
  '/images/placeholders/instagram-6.jpg',
];

export default function InstagramGallerySection() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(90,16,34,0.24),transparent_42%),#111111]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="A Glimpse of the Presentation"
          title="Instagram Gallery"
          description="A quick look at the visual language behind Privelle - elegant packaging, warm tones, and thoughtful romantic details."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((src, index) => (
            <Reveal key={src} delay={index * 0.05}>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.03] p-2 backdrop-blur">
                <ImagePlaceholder
                  src={src}
                  alt={`Privelle Instagram gallery preview ${index + 1}`}
                  aspectRatio="portrait"
                  className="rounded-[1.25rem] border-0"
                />
                <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] bg-gradient-to-t from-matteBlack/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-sm text-ivoryWhite/80">Privelle</span>
                  <ArrowUpRight className="h-4 w-4 text-champagneGold" aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <a href="#" aria-label="View Privelle on Instagram">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                View on Instagram
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
