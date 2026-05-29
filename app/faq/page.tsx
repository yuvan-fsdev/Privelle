import type { Metadata } from 'next';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Privelle FAQ | Private Couple Gifting Questions',
  description:
    'Answers about discreet packaging, customisation, India delivery, 2-week preparation, founder offer, and WhatsApp enquiries.',
};

export default function FAQPage() {
  return (
    <>
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
