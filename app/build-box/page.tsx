import type { Metadata } from 'next';
import BoxBuilderPreviewSection from '@/components/sections/BoxBuilderPreviewSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import GiftNotePreviewSection from '@/components/sections/GiftNotePreviewSection';

export const metadata: Metadata = {
  title: 'Build Your Privelle Box | Personalised Couple Gifting',
  description:
    'Create a personalised Privelle box preview with occasion, budget, comfort level, add-ons, and private WhatsApp curation.',
};

export default function BuildBoxPage() {
  return (
    <>
      <BoxBuilderPreviewSection />
      <GiftNotePreviewSection />
      <FinalCTASection />
    </>
  );
}
