import Navbar from '@/components/layout/Navbar';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import FounderOfferSection from '@/components/sections/FounderOfferSection';
import HeroSection from '@/components/sections/HeroSection';
import ChooseOccasionSection from '@/components/sections/ChooseOccasionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperiencePhasesSection from '@/components/sections/ExperiencePhasesSection';
import ProductCatalogueSection from '@/components/sections/ProductCatalogueSection';
import AddOnProductsSection from '@/components/sections/AddOnProductsSection';
import BoxBuilderPreviewSection from '@/components/sections/BoxBuilderPreviewSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FounderOfferSection />
        <ChooseOccasionSection />
        <HowItWorksSection />
        <AboutSection />
        <ExperiencePhasesSection />
        <ProductCatalogueSection />
        <AddOnProductsSection />
        <BoxBuilderPreviewSection />
      </main>
      <StickyMobileCTA />
    </>
  );
}
