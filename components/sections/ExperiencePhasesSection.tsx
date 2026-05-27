'use client';

import { GlassWater, Heart, ShieldCheck } from 'lucide-react';
import PhaseCard, { type ExperiencePhase } from '@/components/cards/PhaseCard';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';

const phases: ExperiencePhase[] = [
  {
    title: 'Pre-Care',
    subtitle: 'Build anticipation and emotional comfort',
    description:
      'Designed to make the moment feel natural, playful, and connected before the private experience begins.',
    items: [
      'Premium chocolates',
      'Couple playing cards',
      'Romantic conversation starters',
      'Music QR card',
      'Scented candle',
      'Personalised note',
    ],
    toneLabel: 'Romance begins before the moment.',
    icon: Heart,
  },
  {
    title: 'Intimate Care',
    subtitle: 'Comfort-first wellness essentials',
    description:
      'Discreetly selected essentials focused on safety, trust, comfort, and mutual ease.',
    items: [
      'Trusted condoms',
      'Lubricants',
      'Massage oil',
      'Intimate wipes',
      'Romantic accessories',
      'Wellness essentials',
    ],
    toneLabel: 'Private, trusted, and thoughtfully selected.',
    icon: ShieldCheck,
  },
  {
    title: 'Post-Care',
    subtitle: 'Because care after intimacy matters too',
    description:
      'Thoughtful comfort items that support hydration, calm, recovery, and emotional after-care.',
    items: [
      'Nuts and healthy snacks',
      'Hydration powder',
      'Herbal tea',
      'Dark chocolate',
      'Cooling wipes',
      'Recovery comfort items',
    ],
    toneLabel: 'Comfort continues after the moment.',
    icon: GlassWater,
  },
];

export default function ExperiencePhasesSection() {
  return (
    <section
      id="experience-phases"
      className="relative overflow-hidden bg-softBlack py-16 lg:py-24"
    >
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-deepBurgundy/24 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-champagneGold/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Privelle Flow"
          title="Every Box Follows a Thoughtful 3-Phase Experience"
          description="Each Privelle box is designed as a complete private journey - from anticipation, to comfort, to thoughtful care after the moment."
        />

        <Reveal delay={0.18}>
          <p className="mx-auto -mt-8 mb-12 max-w-3xl text-center text-sm leading-7 text-roseBeige/85 sm:text-base md:-mt-10">
            Based on the selected price tier, the quantity, premium level, and number of included items will increase.
          </p>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[14%] right-[14%] top-8 hidden h-px bg-gradient-to-r from-transparent via-champagneGold/20 to-transparent lg:block"
          />

          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {phases.map((phase, index) => (
              <PhaseCard key={phase.title} phase={phase} index={index} />
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-champagneGold/20 bg-matteBlack/60 p-5 text-center shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-6">
            <p className="text-sm leading-7 text-ivoryWhite/72 sm:text-base">
              Privelle boxes scale beautifully with your budget - from essential romantic kits to complete luxury experiences with more premium add-ons, personalised details, and elevated packaging.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
