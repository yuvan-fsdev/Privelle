'use client';

import OccasionCard from '@/components/cards/OccasionCard';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';
import { OCCASIONS } from '@/constants/occasions';

export default function ChooseOccasionSection() {
  return (
    <section
      id="occasions"
      className="relative overflow-hidden bg-matteBlack py-16 lg:py-24"
    >
      <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-champagneGold/8 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-deepBurgundy/28 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Start With the Moment"
          title="Choose the Moment You're Planning For"
          description="Every private moment has a different mood. Pick the occasion and discover the Privelle experience that fits best."
        />

        <div
          aria-label="Privelle occasion options"
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
        >
          {OCCASIONS.map((occasion, index) => (
            <OccasionCard
              key={occasion.id}
              occasion={occasion}
              index={index}
              className="w-[82vw] shrink-0 snap-start sm:w-[68vw] md:w-auto"
            />
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-ivoryWhite/55">
            Not sure what fits? Tap any option and continue through WhatsApp - we&apos;ll help curate privately.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
