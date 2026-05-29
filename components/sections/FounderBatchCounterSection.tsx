'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/motion/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import { FOUNDING_BATCH_LIMIT, FOUNDING_BATCH_RESERVED } from '@/constants/launch';
import { isFounderOfferActive } from '@/lib/launch';
import {
  PRE_LAUNCH_WHATSAPP_MESSAGE,
  getWhatsAppUrl,
} from '@/lib/whatsapp';

export default function FounderBatchCounterSection() {
  const reduceMotion = useReducedMotion();

  if (!isFounderOfferActive()) {
    return null;
  }

  const percentage = Math.min(
    100,
    Math.max(0, (FOUNDING_BATCH_RESERVED / FOUNDING_BATCH_LIMIT) * 100)
  );

  return (
    <section
      id="founder-batch"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(90,16,34,0.3),transparent_38%),#111111]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-champagneGold/10 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Limited Founding Collection"
          title="Founding Batch 01"
          description="Be part of the first Privelle collection. Our opening batch is intentionally limited so every box can be hand-sourced, checked, and packed beautifully."
        />

        <Reveal>
          <div className="glass-panel gold-border rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-ivoryWhite/55">
                  Founder Boxes Reserved
                </p>
                <p className="mt-3 font-heading text-4xl text-ivoryWhite sm:text-5xl">
                  {FOUNDING_BATCH_RESERVED} / {FOUNDING_BATCH_LIMIT}
                </p>
              </div>
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          '0 0 0 rgba(201,162,39,0.12)',
                          '0 0 24px rgba(201,162,39,0.2)',
                          '0 0 0 rgba(201,162,39,0.12)',
                        ],
                      }
                }
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="rounded-full border border-champagneGold/25 bg-champagneGold/10 px-4 py-2 text-sm font-medium text-champagneGold"
              >
                {percentage.toFixed(0)}% Reserved
              </motion.div>
            </div>

            <div className="mb-4 h-4 overflow-hidden rounded-full border border-ivoryWhite/10 bg-softBlack">
              <motion.div
                initial={reduceMotion ? { opacity: 1 } : { width: 0 }}
                whileInView={reduceMotion ? { opacity: 1 } : { width: `${percentage}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-champagneGold via-[#d9bb5d] to-champagneGold"
              />
            </div>

            <p className="text-sm text-ivoryWhite/55">
              This count is manually updated as founder reservations are confirmed.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-champagneGold/15 bg-ivoryWhite/[0.03] p-5">
              <p className="text-base leading-relaxed text-ivoryWhite/75">
                Pre-book now to receive the 20% Founder&apos;s Offer and be among the first July dispatch customers.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4">
              <Button asChild className="w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(PRE_LAUNCH_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reserve the Privelle Founder Box on WhatsApp"
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Reserve Founder Box
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
