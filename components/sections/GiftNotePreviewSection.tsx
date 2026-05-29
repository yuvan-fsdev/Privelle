'use client';

import { PenLine } from 'lucide-react';
import GiftNoteCard from '@/components/cards/GiftNoteCard';
import SectionHeader from '@/components/motion/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import Button from '@/components/ui/Button';
import {
  getAddOnWhatsAppMessage,
  getWhatsAppUrl,
} from '@/lib/whatsapp';

const notes = [
  {
    title: 'Romantic',
    content:
      'For all the quiet moments, loud laughs, and memories we are yet to make - this one is for us.',
  },
  {
    title: 'Playful',
    content:
      "Open this only when you're ready to cancel all other plans.",
  },
  {
    title: 'Emotional',
    content:
      'I wanted to give you something that feels like us - thoughtful, private, and unforgettable.',
  },
];

export default function GiftNotePreviewSection() {
  return (
    <section
      id="gift-notes"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,16,34,0.25),transparent_42%),#111111]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Personal Words, Beautifully Presented"
          title="Gift Note Preview"
          description="A Privelle box can carry more than products. It can also carry the right words, in the tone that fits your relationship."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {notes.map((note, index) => (
            <Reveal key={note.title} delay={index * 0.08}>
              <GiftNoteCard
                title={note.title}
                content={note.content}
                className="min-h-[15rem] rounded-[1.75rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.035] p-6 text-left backdrop-blur hover:border-champagneGold/40 hover:bg-ivoryWhite/[0.05]"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-[2rem] border border-champagneGold/15 bg-ivoryWhite/[0.035] px-6 py-8 text-center backdrop-blur">
            <p className="max-w-2xl text-sm leading-relaxed text-ivoryWhite/65">
              Custom letters can be romantic, playful, emotional, or quietly personal. Final tone and presentation are confirmed privately on WhatsApp.
            </p>
            <Button asChild>
              <a
                href={getWhatsAppUrl(
                  getAddOnWhatsAppMessage('Luxury Customised Letters')
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Privelle to add a custom letter on WhatsApp"
              >
                <PenLine className="h-4 w-4" aria-hidden="true" />
                Add a Custom Letter
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
