'use client';

import Accordion from '@/components/ui/Accordion';
import SectionHeader from '@/components/motion/SectionHeader';
import Reveal from '@/components/motion/Reveal';

const items = [
  {
    id: 'discreet-packaging',
    title: 'Is the packaging discreet?',
    content:
      'Yes. Privelle boxes are sent with plain outer packaging and a more luxurious inner reveal, so privacy is preserved without losing presentation.',
  },
  {
    id: 'customise-box',
    title: 'Can I customise the box?',
    content:
      'Yes. Occasion, budget, comfort level, add-ons, notes, and gifting tone can all be discussed privately on WhatsApp before confirmation.',
  },
  {
    id: 'deliver-india',
    title: 'Do you deliver across India?',
    content:
      'Delivery planning is discussed privately based on the destination city and the box requirements. WhatsApp is the fastest way to confirm availability and timing.',
  },
  {
    id: 'trusted-products',
    title: 'Are wellness products trusted?',
    content:
      'Privelle focuses on trusted sourcing, sealed presentation where relevant, expiry checks, and hygiene-first handling. We do not make medical claims.',
  },
  {
    id: 'place-enquiry',
    title: 'How do I place an enquiry?',
    content:
      'Use any WhatsApp enquiry button on the site. Share your occasion, budget, comfort level, and any personalisation ideas, and the box will be curated privately from there.',
  },
  {
    id: 'two-weeks',
    title: 'Why do you need 2 weeks?',
    content:
      'Privelle boxes are hand-sourced and not mass-packed. The preparation window helps with sourcing, quality checks, presentation, and custom details.',
  },
  {
    id: 'first-dispatch',
    title: 'When does first dispatch begin?',
    content:
      'Founder batch dispatch begins on July 1, 2026. Before that date, founder pre-bookings receive priority within the opening batch.',
  },
  {
    id: 'gift-directly',
    title: 'Can I gift directly?',
    content:
      'Yes. Many Privelle boxes are curated as private gifts. Delivery details, messaging, and the tone of the unboxing can be coordinated privately.',
  },
  {
    id: 'is-ecommerce',
    title: 'Is this ecommerce?',
    content:
      'No. Privelle is intentionally WhatsApp-first. There is no public checkout flow, cart, or payment gateway on the website.',
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.07),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(90,16,34,0.22),transparent_42%),#111111]" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Private Clarity"
          title="Frequently Asked Questions"
          description="A few practical answers about privacy, preparation, delivery, and how Privelle works."
        />

        <Reveal delay={0.1}>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
