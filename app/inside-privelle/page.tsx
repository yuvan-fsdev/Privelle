import type { Metadata } from 'next';
import CareSafetySection from '@/components/sections/CareSafetySection';
import DiscretionPromiseSection from '@/components/sections/DiscretionPromiseSection';
import ExperiencePhasesSection from '@/components/sections/ExperiencePhasesSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import InstagramGallerySection from '@/components/sections/InstagramGallerySection';
import WhatsInsideSection from '@/components/sections/WhatsInsideSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';

export const metadata: Metadata = {
  title: 'Inside Privelle | Discreet Luxury & Care',
  description:
    'Learn what goes inside a Privelle box, including pre-care, intimate wellness, post-care, discreet packaging, safety, and private support.',
};

export default function InsidePrivellePage() {
  return (
    <>
      <ExperiencePhasesSection />
      <WhatsInsideSection />
      <DiscretionPromiseSection />
      <CareSafetySection />
      <WhyChooseSection />
      <InstagramGallerySection />
      <FinalCTASection />
    </>
  );
}
