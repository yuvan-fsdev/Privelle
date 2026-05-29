'use client';

import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/constants/navLinks';
import { isFounderOfferActive } from '@/lib/launch';
import {
  getWhatsAppUrl,
  POST_LAUNCH_WHATSAPP_MESSAGE,
  PRE_LAUNCH_WHATSAPP_MESSAGE,
} from '@/lib/whatsapp';

export default function Footer() {
  const [founderActive, setFounderActive] = useState<boolean | null>(null);

  useEffect(() => {
    setFounderActive(isFounderOfferActive());
  }, []);

  const isFounder = founderActive === true;
  const ctaLabel = isFounder ? 'Reserve Founder Box' : 'WhatsApp Enquiry';
  const whatsappMessage = isFounder
    ? PRE_LAUNCH_WHATSAPP_MESSAGE
    : POST_LAUNCH_WHATSAPP_MESSAGE;

  return (
    <footer className="relative overflow-hidden border-t border-champagneGold/10 bg-matteBlack px-4 pb-28 pt-14 sm:px-6 lg:px-8 lg:pb-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(90,16,34,0.22),transparent_34%),#111111]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-heading text-3xl text-ivoryWhite"
              aria-label="Privelle home"
            >
              Privelle
            </Link>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-champagneGold">
              Private luxury for modern couples.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-ivoryWhite/65">
              Hand-curated intimate wellness boxes, couple experiences, and premium gifting essentials - designed with elegance, privacy, and care.
            </p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-champagneGold">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivoryWhite/65 transition-colors hover:text-ivoryWhite"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-champagneGold">
              Contact
            </h2>
            <div className="mt-5 space-y-4">
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Privelle on WhatsApp"
                className="inline-flex items-center gap-3 text-sm text-ivoryWhite/65 transition-colors hover:text-ivoryWhite"
              >
                <MessageCircle className="h-4 w-4 text-champagneGold" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href="#"
                aria-label="View Privelle on Instagram"
                className="inline-flex items-center gap-3 text-sm text-ivoryWhite/65 transition-colors hover:text-ivoryWhite"
              >
                <Instagram className="h-4 w-4 text-champagneGold" aria-hidden="true" />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-champagneGold">
              Private Note
            </h2>
            <p className="mt-5 text-sm leading-7 text-ivoryWhite/65">
              Discreet packaging. Private support. Hand-curated with care.
            </p>
            <p className="mt-4 text-sm leading-7 text-ivoryWhite/50">
              Privelle is a catalogue and WhatsApp enquiry experience. No online checkout or payment is processed on this website.
            </p>
            <div className="mt-6">
              <Button asChild size="sm" className="w-full sm:w-auto">
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
          </div>
        </div>

        <div className="mt-10 border-t border-champagneGold/10 pt-5 text-sm text-ivoryWhite/45">
          © 2026 Privelle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
