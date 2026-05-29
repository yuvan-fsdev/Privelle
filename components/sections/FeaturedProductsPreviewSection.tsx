import Link from 'next/link';
import ProductCard from '@/components/cards/ProductCard';
import SectionHeader from '@/components/motion/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import Button from '@/components/ui/Button';
import { products } from '@/constants/products';

const featuredIds = [
  'first-night-box',
  'anniversary-spark-box',
  'honeymoon-kit',
  'long-distance-reunion-kit',
];

const featuredProducts = featuredIds
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));

export default function FeaturedProductsPreviewSection() {
  return (
    <section
      id="featured-products"
      className="relative overflow-hidden bg-matteBlack py-16 lg:py-24"
    >
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-deepBurgundy/24 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-champagneGold/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Popular Privelle Experiences"
          title="Start With Our Most-Loved Moments"
          description="Explore a few signature Privelle boxes, then continue to the full collection for more occasions and customisation options."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/collection">View Full Collection</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
