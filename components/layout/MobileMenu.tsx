'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/constants/navLinks';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isFounderOfferActive: boolean;
}

export default function MobileMenu({
  isOpen,
  onClose,
  isFounderOfferActive,
}: MobileMenuProps) {
  const ctaLabel = isFounderOfferActive
    ? 'Reserve Founder Box • 20% Off'
    : 'WhatsApp Enquiry';
  const whatsappMessage = isFounderOfferActive
    ? PRE_LAUNCH_WHATSAPP_MESSAGE
    : POST_LAUNCH_WHATSAPP_MESSAGE;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="privelle-mobile-menu"
          aria-hidden={!isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 bg-matteBlack/95 backdrop-blur-2xl lg:hidden"
        >
          <div className="absolute inset-0 luxury-radial-bg opacity-80" />
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-dvh flex-col px-4 pb-8 pt-24 sm:px-6"
          >
            <div className="flex flex-1 flex-col">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-ivoryWhite/10 py-4 font-heading text-xl font-medium tracking-normal text-ivoryWhite transition-colors duration-300 hover:text-champagneGold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 pb-[env(safe-area-inset-bottom)]">
              <Button asChild size="lg" variant="primary" className="w-full justify-center">
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  aria-label={`${ctaLabel} on WhatsApp`}
                >
                  {ctaLabel}
                </a>
              </Button>
              <p className="text-center text-xs leading-relaxed text-ivoryWhite/50">
                Discreet support. Private WhatsApp enquiry.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
