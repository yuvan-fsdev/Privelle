'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ImagePlaceholder from '@/components/cards/ImagePlaceholder';
import FloatingElement from '@/components/motion/FloatingElement';
import Reveal from '@/components/motion/Reveal';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { isFounderOfferActive } from '@/lib/launch';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const heroImageAlt =
  'Luxury matte black Privelle couple gifting box with champagne gold ribbon, satin interior, candles, cards, chocolates, couple perfumes, personalised letter, and discreet wellness essentials';

const particles = [
  'left-[12%] top-[18%]',
  'left-[8%] top-[58%]',
  'left-[28%] top-[78%]',
  'left-[52%] top-[16%]',
  'left-[68%] top-[72%]',
  'right-[10%] top-[22%]',
  'right-[14%] top-[48%]',
  'right-[28%] bottom-[14%]',
  'left-[42%] bottom-[20%]',
  'right-[42%] top-[36%]',
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isFounderActive, setIsFounderActive] = useState<boolean | null>(null);

  useEffect(() => {
    setIsFounderActive(isFounderOfferActive());
  }, []);

  const founderActive = isFounderActive === true;
  const eyebrow = founderActive
    ? "Limited Founding Batch • 20% Founder's Offer"
    : 'Hand-Curated Couple Gifting Experiences';
  const launchNote = founderActive
    ? 'Pre-book now to be among the first to receive Privelle. First dispatch begins July 1, 2026.'
    : 'Explore handcrafted boxes for first nights, anniversaries, honeymoons, reunions, and private celebrations.';
  const primaryCta = founderActive ? 'Reserve Founder Box' : 'WhatsApp Enquiry';
  const badgeThree = founderActive ? '20% Founder Offer' : 'Private Enquiry';
  const whatsappMessage = founderActive
    ? PRE_LAUNCH_WHATSAPP_MESSAGE
    : POST_LAUNCH_WHATSAPP_MESSAGE;

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-matteBlack luxury-radial-bg lg:min-h-screen"
    >
      <div className="absolute -left-24 top-28 h-56 w-56 rounded-full bg-champagneGold/10 blur-3xl" />
      <div className="absolute -right-28 top-32 h-80 w-80 rounded-full bg-deepBurgundy/35 blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-champagneGold/5 blur-3xl" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        {particles.map((position, index) => (
          <motion.span
            key={position}
            className={cn(
              'absolute h-1.5 w-1.5 rounded-full bg-champagneGold/20',
              position
            )}
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -10, 0], opacity: [0.12, 0.28, 0.12] }
            }
            transition={{
              duration: 5 + index * 0.28,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl">
          <Reveal y={18}>
            <Badge variant="gold" className="mb-6">
              {eyebrow}
            </Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-normal text-ivoryWhite sm:text-5xl lg:text-7xl">
              Private Luxury for Modern Couples
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivoryWhite/72 sm:text-lg">
              Curated intimate wellness boxes, couple experiences, and premium gifting essentials - designed with elegance, privacy, and care.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-roseBeige/85 sm:text-base">
              Discreet packaging. Hand-sourced products. Private WhatsApp support.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-5 max-w-2xl border-l border-champagneGold/35 pl-4 text-sm leading-7 text-warmTaupe sm:text-base">
              {launchNote}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${primaryCta} on WhatsApp`}
                >
                  {primaryCta}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group w-full sm:w-auto">
                <Link href="/collection" aria-label="View the Privelle collection">
                  View Collection
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.96, y: 24 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <FloatingElement>
            <div className="relative">
              <ImagePlaceholder
                src="/images/placeholders/hero-product-box.jpg"
                alt={heroImageAlt}
                priority
                width={720}
                height={900}
                aspectRatio="portrait"
                className="rounded-[2rem] border border-champagneGold/20 shadow-[0_24px_80px_rgba(201,162,39,0.14)]"
              />

              {['Hand-Sourced', '2-Week Preparation', badgeThree].map((label, index) => (
                <motion.div
                  key={label}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.65 + index * 0.08,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    'absolute',
                    index === 0 && 'left-3 top-3 sm:left-5 sm:top-5',
                    index === 1 && 'right-3 top-14 sm:right-5 sm:top-20',
                    index === 2 && 'bottom-3 left-1/2 -translate-x-1/2 sm:bottom-5'
                  )}
                >
                  <Badge
                    variant={index === 2 ? 'burgundy' : 'ivory'}
                    className="whitespace-nowrap bg-matteBlack/70 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                  >
                    {label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </FloatingElement>
        </motion.div>
      </div>
    </section>
  );
}
