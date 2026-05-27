'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { isFounderOfferActive } from '@/lib/launch';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';

export default function StickyMobileCTA() {
  const shouldReduceMotion = useReducedMotion();
  const [isFounderActive, setIsFounderActive] = useState<boolean | null>(null);

  useEffect(() => {
    setIsFounderActive(isFounderOfferActive());
  }, []);

  const founderActive = isFounderActive === true;
  const ctaLabel = founderActive
    ? 'Reserve Founder Box • 20% Off'
    : 'WhatsApp Enquiry';
  const helperText = founderActive
    ? 'First dispatch begins July 1, 2026'
    : 'Private enquiry on WhatsApp';
  const whatsappMessage = founderActive
    ? PRE_LAUNCH_WHATSAPP_MESSAGE
    : POST_LAUNCH_WHATSAPP_MESSAGE;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { y: 80, opacity: 0 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pt-3 lg:hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1rem)' }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-matteBlack via-matteBlack/95 to-transparent" />
      <Button
        asChild
        size="lg"
        variant="primary"
        className="h-[52px] w-full justify-center"
      >
        <motion.a
          href={getWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          animate={
            founderActive && !shouldReduceMotion
              ? {
                  boxShadow: [
                    '0 0 0 rgba(201,162,39,0)',
                    '0 0 24px rgba(201,162,39,0.28)',
                    '0 0 0 rgba(201,162,39,0)',
                  ],
                }
              : undefined
          }
          transition={
            founderActive && !shouldReduceMotion
              ? { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
              : undefined
          }
        >
          {ctaLabel}
        </motion.a>
      </Button>
      <p className="mt-2 text-center text-[0.7rem] leading-none text-ivoryWhite/45">
        {helperText}
      </p>
    </motion.div>
  );
}
