import type { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import ChooseOccasionSection from '@/components/sections/ChooseOccasionSection';
import FeaturedProductsPreviewSection from '@/components/sections/FeaturedProductsPreviewSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FounderOfferSection from '@/components/sections/FounderOfferSection';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

export const metadata: Metadata = {
  title: 'Privelle | Private Luxury for Modern Couples',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FounderOfferSection />
      <ChooseOccasionSection />
      <HowItWorksSection />
      <AboutSection />
      <FeaturedProductsPreviewSection />
      <FinalCTASection />
    </>
  );
}
