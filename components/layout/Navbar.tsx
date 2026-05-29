'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import MobileMenu from '@/components/layout/MobileMenu';
import { NAV_LINKS } from '@/constants/navLinks';
import { isFounderOfferActive } from '@/lib/launch';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFounderActive, setIsFounderActive] = useState<boolean | null>(null);

  useEffect(() => {
    setIsFounderActive(isFounderOfferActive());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const founderActive = isFounderActive === true;
  const ctaLabel = founderActive ? 'Reserve Founder Box' : 'WhatsApp Enquiry';
  const whatsappMessage = founderActive
    ? PRE_LAUNCH_WHATSAPP_MESSAGE
    : POST_LAUNCH_WHATSAPP_MESSAGE;

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'border-b border-champagneGold/10 bg-matteBlack/80 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link
            href="/"
            aria-label="Privelle home"
            className="group inline-flex flex-col leading-none"
          >
            <span className="font-heading text-2xl font-medium tracking-wide text-ivoryWhite lg:text-3xl">
              Privelle
              <span className="ml-1 text-champagneGold">.</span>
            </span>
            <span className="mt-1 hidden text-[0.65rem] font-medium uppercase tracking-wider text-ivoryWhite/35 lg:block">
              Private Luxury
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-medium tracking-normal text-ivoryWhite/70 transition-colors duration-300 hover:text-ivoryWhite"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-champagneGold shadow-[0_0_14px_rgba(201,162,39,0.55)] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild size="sm" variant="primary">
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ctaLabel} on WhatsApp`}
              >
                {ctaLabel}
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="privelle-mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-champagneGold/20 text-ivoryWhite transition-colors duration-300 hover:border-champagneGold/50 hover:bg-champagneGold/10 lg:hidden"
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isFounderOfferActive={founderActive}
      />
    </>
  );
}
