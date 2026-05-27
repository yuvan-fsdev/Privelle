import { MessageCircle, PackageCheck } from 'lucide-react';
import ProductCard from '@/components/cards/ProductCard';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';
import Button from '@/components/ui/Button';
import { products } from '@/constants/products';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const catalogueHelpMessage =
  "Hi Privelle, I'm exploring your luxury couple gifting boxes. Please help me choose the right box based on my occasion, budget, and comfort level.";

export default function ProductCatalogueSection() {
  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-matteBlack py-16 lg:py-24"
    >
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-deepBurgundy/28 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-champagneGold/8 blur-3xl" />
      <div className="absolute -right-24 bottom-28 h-72 w-72 rounded-full bg-champagneGold/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Collection"
          title="Curated Experiences for Every Private Moment"
          description="Choose from thoughtfully designed boxes for first nights, anniversaries, honeymoons, reunions, and private celebrations. Every collection can be customised privately through WhatsApp."
        />

        <Reveal delay={0.12}>
          <div className="mx-auto mb-10 max-w-4xl rounded-[1.5rem] border border-champagneGold/20 bg-ivoryWhite/[0.035] p-5 backdrop-blur-md sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold">
                <PackageCheck size={20} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm leading-7 text-ivoryWhite/74 sm:text-base">
                  Privelle boxes are made to order. Please pre-book at least 2 weeks in advance so every item can be hand-sourced, checked, and packed beautifully.
                </p>
                <p className="mt-3 text-sm leading-7 text-roseBeige/85">
                  Each box includes a thoughtful mix of Pre-Care, Intimate Care, and Post-Care items. Higher price tiers include more premium products, increased quantity, and deeper personalisation.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-champagneGold/75">
                  No cart. No checkout. Just private guidance through WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-champagneGold/20 bg-softBlack/72 p-6 text-center shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
            <h3 className="font-heading text-3xl font-semibold leading-tight text-ivoryWhite">
              Not sure which box fits your moment?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ivoryWhite/68 sm:text-base">
              Tell us the occasion, your budget, and your comfort level on WhatsApp. We&apos;ll help curate the right Privelle experience privately.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(catalogueHelpMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ask Privelle on WhatsApp for catalogue guidance"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Ask Privelle on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
