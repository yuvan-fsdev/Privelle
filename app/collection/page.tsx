import type { Metadata } from 'next';
import AddOnProductsSection from '@/components/sections/AddOnProductsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import ProductCatalogueSection from '@/components/sections/ProductCatalogueSection';

export const metadata: Metadata = {
  title: 'Privelle Collection | Luxury Couple Gift Boxes',
  description:
    'Explore Privelle’s hand-curated first night boxes, anniversary boxes, honeymoon kits, reunion kits, bridal intimacy kits, and premium couple gifting experiences.',
};

export default function CollectionPage() {
  return (
    <>
      <ProductCatalogueSection />
      <AddOnProductsSection />
      <FinalCTASection />
    </>
  );
}
