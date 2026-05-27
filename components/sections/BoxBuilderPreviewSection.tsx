'use client';

import {
  Baby,
  Check,
  Gift,
  Heart,
  MessageCircle,
  Moon,
  Plane,
  ShieldCheck,
  Sparkles,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import SectionHeader from '@/components/motion/SectionHeader';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import {
  builderAddOns,
  builderOccasions,
  budgetOptions,
  comfortLevels,
  type BuilderAddOn,
  type BuilderOption,
} from '@/constants/boxBuilder';
import {
  getBoxBuilderWhatsAppMessage,
  getWhatsAppUrl,
} from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Baby,
  Heart,
  MessageCircle,
  Moon,
  Plane,
  Sparkles,
};

type OptionGroupProps = {
  title: string;
  icon: LucideIcon;
  options: BuilderOption[];
  selectedId: string;
  onSelect: (option: BuilderOption) => void;
  index: number;
};

type AddOnGroupProps = {
  selectedIds: string[];
  onToggle: (addOn: BuilderAddOn) => void;
};

function OptionGroup({
  title,
  icon: GroupIcon,
  options,
  selectedId,
  onSelect,
  index,
}: OptionGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[2rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.035] p-5 backdrop-blur-md sm:p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold">
          <GroupIcon size={19} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-ivoryWhite">
          {title}
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const selected = option.id === selectedId;
          const OptionIcon = option.icon ? iconMap[option.icon] ?? Sparkles : null;

          return (
            <motion.button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(option)}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className={cn(
                'relative rounded-2xl border p-4 text-left transition-colors duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagneGold focus-visible:ring-offset-2 focus-visible:ring-offset-matteBlack',
                selected
                  ? 'border-champagneGold/60 bg-champagneGold/10 text-ivoryWhite'
                  : 'border-ivoryWhite/10 bg-matteBlack/25 text-ivoryWhite hover:border-champagneGold/30 hover:bg-ivoryWhite/[0.05]'
              )}
            >
              <div className="flex items-start gap-3">
                {OptionIcon && (
                  <div className="mt-0.5 text-champagneGold">
                    <OptionIcon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-ivoryWhite">{option.label}</span>
                    {selected && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-champagneGold/15 px-2 py-0.5 text-[0.68rem] font-medium text-champagneGold">
                        <Check size={12} aria-hidden="true" />
                        Selected
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ivoryWhite/62">
                    {option.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

function AddOnGroup({ selectedIds, onToggle }: AddOnGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ delay: 0.24, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[2rem] border border-ivoryWhite/10 bg-ivoryWhite/[0.035] p-5 backdrop-blur-md sm:p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-champagneGold/25 bg-champagneGold/10 text-champagneGold">
          <Sparkles size={19} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-ivoryWhite">
          4. Add Personal Touches
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {builderAddOns.map((addOn) => {
          const selected = selectedIds.includes(addOn.id);

          return (
            <motion.button
              key={addOn.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onToggle(addOn)}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className={cn(
                'rounded-2xl border p-4 text-left transition-colors duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagneGold focus-visible:ring-offset-2 focus-visible:ring-offset-matteBlack',
                selected
                  ? 'border-champagneGold/60 bg-champagneGold/10'
                  : 'border-ivoryWhite/10 bg-matteBlack/25 hover:border-champagneGold/30 hover:bg-ivoryWhite/[0.05]'
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
                    selected
                      ? 'border-champagneGold bg-champagneGold text-matteBlack'
                      : 'border-ivoryWhite/25 text-transparent'
                  )}
                >
                  <Check size={13} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-ivoryWhite">
                    {addOn.label}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-ivoryWhite/62">
                    {addOn.description}
                  </span>
                  {selected && (
                    <span className="mt-3 inline-block rounded-full bg-champagneGold/15 px-2 py-0.5 text-[0.68rem] font-medium text-champagneGold">
                      Selected
                    </span>
                  )}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function BoxBuilderPreviewSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedOccasion, setSelectedOccasion] = useState(builderOccasions[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[0]);
  const [selectedComfortLevel, setSelectedComfortLevel] = useState(comfortLevels[0]);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  const selectedAddOns = useMemo(
    () => builderAddOns.filter((addOn) => selectedAddOnIds.includes(addOn.id)),
    [selectedAddOnIds]
  );

  const whatsappMessage = getBoxBuilderWhatsAppMessage({
    occasion: selectedOccasion.label,
    budget: selectedBudget.label,
    comfortLevel: selectedComfortLevel.label,
    addons: selectedAddOns.map((addOn) => addOn.label),
  });

  const toggleAddOn = (addOn: BuilderAddOn) => {
    setSelectedAddOnIds((current) =>
      current.includes(addOn.id)
        ? current.filter((id) => id !== addOn.id)
        : [...current, addOn.id]
    );
  };

  const summaryKey = [
    selectedOccasion.id,
    selectedBudget.id,
    selectedComfortLevel.id,
    selectedAddOnIds.join('-'),
  ].join('|');

  return (
    <section
      id="box-builder"
      className="relative overflow-hidden bg-matteBlack py-16 lg:py-24"
    >
      <div className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-deepBurgundy/30 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-champagneGold/8 blur-3xl" />
      <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-deepBurgundy/24 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Personalised Curation"
          title="Build Your Private Experience"
          description="Create a personalised Privelle box preview in a few simple steps. Final curation, pricing, and confirmation happen privately through WhatsApp."
        />

        <Reveal delay={0.12}>
          <p className="mx-auto -mt-8 mb-10 max-w-3xl text-center text-sm leading-7 text-roseBeige/85 sm:text-base md:-mt-10">
            This is a guided preview, not a checkout. We use your preferences to suggest the right box, add-ons, and comfort level.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.55fr)] lg:items-start">
          <div className="space-y-5">
            <OptionGroup
              title="1. Choose Occasion"
              icon={Gift}
              options={builderOccasions}
              selectedId={selectedOccasion.id}
              onSelect={setSelectedOccasion}
              index={0}
            />
            <OptionGroup
              title="2. Select Budget"
              icon={Wallet}
              options={budgetOptions}
              selectedId={selectedBudget.id}
              onSelect={setSelectedBudget}
              index={1}
            />
            <OptionGroup
              title="3. Pick Comfort Level"
              icon={ShieldCheck}
              options={comfortLevels}
              selectedId={selectedComfortLevel.id}
              onSelect={setSelectedComfortLevel}
              index={2}
            />
            <AddOnGroup selectedIds={selectedAddOnIds} onToggle={toggleAddOn} />
          </div>

          <motion.aside
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border border-champagneGold/20 bg-ivoryWhite/[0.04] p-5 shadow-[0_24px_90px_rgba(201,162,39,0.08)] backdrop-blur-xl lg:sticky lg:top-28 sm:p-6"
          >
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-champagneGold/10 blur-3xl" />
            <div className="absolute inset-x-8 top-0 h-px bg-champagneGold/25" />

            <div className="relative">
              <Badge variant="gold" className="mb-5">
                Preview Summary
              </Badge>
              <h3 className="font-heading text-3xl font-semibold text-ivoryWhite">
                Your Privelle Preview
              </h3>
              <p className="mt-3 text-sm leading-6 text-ivoryWhite/62">
                Here&apos;s what we&apos;ll use to curate your box privately.
              </p>

              <motion.div
                key={summaryKey}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 space-y-4"
              >
                <SummaryRow label="Occasion" value={selectedOccasion.label} />
                <SummaryRow label="Budget" value={selectedBudget.label} />
                <SummaryRow label="Comfort" value={selectedComfortLevel.label} />
                <div className="rounded-2xl border border-ivoryWhite/10 bg-matteBlack/35 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-warmTaupe">
                    Add-ons
                  </p>
                  {selectedAddOns.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedAddOns.map((addOn) => (
                        <span
                          key={addOn.id}
                          className="rounded-full border border-champagneGold/15 bg-champagneGold/[0.07] px-3 py-1 text-xs text-ivoryWhite/78"
                        >
                          {addOn.label}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm text-ivoryWhite/72">
                      Not selected yet
                    </p>
                  )}
                </div>
              </motion.div>

              <div className="mt-5 space-y-3">
                <p className="rounded-2xl border border-champagneGold/15 bg-champagneGold/[0.055] p-4 text-sm leading-6 text-roseBeige/90">
                  Final item quantity, premium level, and pricing will be confirmed through WhatsApp based on your preferences.
                </p>
                <p className="rounded-2xl border border-ivoryWhite/10 bg-matteBlack/35 p-4 text-sm leading-6 text-ivoryWhite/64">
                  Every box is hand-sourced and requires approximately 2 weeks for preparation.
                </p>
              </div>

              <div className="mt-6">
                <Button asChild size="lg" variant="primary" className="w-full">
                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Send my Privelle box preferences on WhatsApp"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    Send My Box Preference
                  </a>
                </Button>
                <p className="mt-3 text-center text-xs leading-5 text-ivoryWhite/45">
                  Opens WhatsApp with your selected preferences.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ivoryWhite/10 bg-matteBlack/35 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-warmTaupe">
        {label}
      </p>
      <p className="mt-2 text-base font-medium text-ivoryWhite">{value}</p>
    </div>
  );
}
