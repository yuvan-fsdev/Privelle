import { MessageCircle, Sparkles } from 'lucide-react';
import AddOnCard from '@/components/cards/AddOnCard';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';
import Button from '@/components/ui/Button';
import { addOns } from '@/constants/addOns';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const personaliseMessage =
  'Hi Privelle, I want to personalise a Privelle box with add-ons like perfumes, gifts, or luxury letters. Please help me customise it.';

export default function AddOnProductsSection() {
  return (
    <section
      id="add-ons"
      className="relative overflow-hidden bg-softBlack py-16 lg:py-24"
    >
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-deepBurgundy/30 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-champagneGold/8 blur-3xl" />
      <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-champagneGold/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Personalise the Experience"
          title="Add a Personal Touch"
          description="Elevate any Privelle box with personalised details, signature scents, keepsakes, and private love notes that make the experience feel truly yours."
        />

        <Reveal delay={0.12}>
          <div className="mx-auto mb-10 max-w-4xl rounded-[1.5rem] border border-champagneGold/20 bg-ivoryWhite/[0.035] p-5 backdrop-blur-md sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold">
                <Sparkles size={20} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm leading-7 text-ivoryWhite/74 sm:text-base">
                  Every Privelle add-on is selected to match the box, the occasion, and the tone of your relationship - soft, playful, emotional, or luxurious.
                </p>
                <p className="mt-3 text-sm leading-7 text-roseBeige/85">
                  Add-ons are curated based on your budget, occasion, and comfort level. Final customisation is confirmed privately through WhatsApp.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-champagneGold/75">
                  No cart. No checkout. Just thoughtful personalisation through a private conversation.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {addOns.map((addOn, index) => (
            <AddOnCard key={addOn.id} addOn={addOn} index={index} />
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-champagneGold/20 bg-matteBlack/64 p-6 text-center shadow-[0_24px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-8">
            <h3 className="font-heading text-3xl font-semibold leading-tight text-ivoryWhite">
              Want to personalise a box?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ivoryWhite/68 sm:text-base">
              Tell us your occasion, your partner&apos;s style, and the kind of emotion you want the box to carry. We&apos;ll suggest the right add-ons privately.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(personaliseMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personalise a Privelle box on WhatsApp"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Personalise on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
