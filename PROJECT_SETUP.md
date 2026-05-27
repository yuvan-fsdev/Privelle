# Privelle - Foundation Setup Complete

## Project Overview

Privelle is a premium mobile-first catalogue and lead-generation website for an intimate wellness and couple gifting brand. The site collects leads through WhatsApp only, with no e-commerce functionality.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom luxury theme
- **Animation**: Framer Motion
- **UI Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Project Structure

```
privelle/
├── app/
│   ├── layout.tsx                 # Root layout with font setup
│   ├── page.tsx                   # Foundation placeholder page
│   └── globals.css                # Global styles with luxury utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── StickyMobileCTA.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FounderOfferSection.tsx
│   │   ├── ChooseOccasionSection.tsx
│   │   ├── BoxBuilderPreviewSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperiencePhasesSection.tsx
│   │   ├── ProductCatalogueSection.tsx
│   │   ├── AddOnProductsSection.tsx
│   │   ├── WhatsInsideSection.tsx
│   │   ├── FounderBatchCounterSection.tsx
│   │   ├── DiscretionPromiseSection.tsx
│   │   ├── CareSafetySection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── GiftNotePreviewSection.tsx
│   │   ├── InstagramGallerySection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── cards/
│   │   ├── ProductCard.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PhaseCard.tsx
│   │   ├── OccasionCard.tsx
│   │   ├── AddOnCard.tsx
│   │   ├── GiftNoteCard.tsx
│   │   └── ImagePlaceholder.tsx
│   ├── motion/
│   │   ├── Reveal.tsx             # Scroll reveal animation
│   │   ├── StaggerContainer.tsx   # Staggered children animation
│   │   ├── FloatingElement.tsx    # Floating animation
│   │   └── SectionHeader.tsx      # Animated section headers
│   └── ui/
│       ├── Button.tsx             # Luxury button component
│       ├── Badge.tsx              # Badge component
│       └── Accordion.tsx          # Accordion component
├── constants/
│   ├── navLinks.ts
│   ├── products.ts
│   ├── addOns.ts
│   ├── occasions.ts
│   ├── faqs.ts
│   ├── giftNotes.ts
│   ├── boxBuilder.ts
│   └── launch.ts
├── lib/
│   ├── utils.ts                   # cn() utility for class merging
│   ├── whatsapp.ts                # WhatsApp messaging functions
│   └── launch.ts                  # Launch date calculations
├── public/
│   └── images/
│       └── placeholders/          # Image placeholder directory
├── tailwind.config.ts             # Custom theme configuration
└── README.md                       # Project documentation
```

## Brand Colors

Custom Tailwind theme colors configured:
- **matteBlack**: #111111 (primary background)
- **softBlack**: #171717
- **champagneGold**: #C9A227 (primary accent)
- **mutedGold**: #A9841F
- **ivoryWhite**: #F8F6F2 (primary text)
- **deepBurgundy**: #5A1022 (emotional warmth)
- **roseBeige**: #D8B8A8
- **softRose**: #E8CFC4
- **warmTaupe**: #9B7E6A

## Typography

- **Heading Font**: Playfair Display (via Google Fonts)
- **Body Font**: Inter (via Google Fonts)
- **CSS Variables**: `--font-heading`, `--font-body`

## Global Utilities

Custom CSS utilities in `globals.css`:
- `.luxury-radial-bg` - Premium radial gradient background
- `.gold-glow` - Champagne gold glow effect
- `.burgundy-glow` - Deep burgundy glow effect
- `.glass-panel` - Glass morphism panel
- `.gold-border` - Subtle gold border

## Reusable Components

### UI Components
- **Button**: Variants (primary, secondary, ghost, outline), sizes (sm, md, lg)
- **Badge**: Variants (gold, burgundy, ivory, subtle)
- **Accordion**: Multi-item accordion with smooth transitions

### Motion Components
- **Reveal**: Scroll-triggered reveal animation with reduced motion support
- **StaggerContainer**: Container for staggered child animations
- **FloatingElement**: Continuous floating animation
- **SectionHeader**: Animated section titles with optional eyebrow and description

### Card Components
- **ProductCard**: Product showcase card
- **FeatureCard**: Feature highlight card
- **PhaseCard**: Numbered phase card
- **OccasionCard**: Occasion selection card
- **AddOnCard**: Add-on product card with selection state
- **GiftNoteCard**: Gift note selection card
- **ImagePlaceholder**: Graceful image fallback with premium styling

## WhatsApp Integration

All enquiry buttons connect to WhatsApp:
- **Phone Number**: +91 73058 35755
- **WhatsApp API Format**: 917305835755

Available message templates:
- `PRE_LAUNCH_WHATSAPP_MESSAGE` - Pre-launch founder offer
- `POST_LAUNCH_WHATSAPP_MESSAGE` - General inquiry
- `getProductWhatsAppMessage()` - Product inquiry
- `getAddOnWhatsAppMessage()` - Add-on inquiry
- `getBoxBuilderWhatsAppMessage()` - Custom box builder

## Launch Configuration

- **Launch Date**: July 1, 2026, 00:00 IST
- **Founding Batch Limit**: 50 boxes
- **Founder Offer Active**: Before launch date
- **Helper Functions**: `getLaunchDate()`, `isFounderOfferActive()`, `getTimeRemaining()`

## Current State

✅ **Foundation Complete**
- Next.js 14 project initialized
- Tailwind CSS configured with custom luxury theme
- Google Fonts integrated (Playfair Display + Inter)
- TypeScript strict mode configured
- All reusable components created
- All section placeholders created (content to be added)
- Global styling with premium utilities
- WhatsApp and launch utilities ready
- Mobile-first responsive foundation

## Next Steps

When ready to build sections:
1. Add product data to `constants/products.ts`
2. Add occasion data to `constants/occasions.ts`
3. Add add-ons data to `constants/addOns.ts`
4. Implement section components (HeroSection, etc.)
5. Add image assets to `public/images/placeholders/`
6. Build full landing page with all sections

## Important Notes

- **No E-commerce**: No cart, checkout, payment gateway, or authentication
- **No Testimonials**: Testimonials section intentionally not implemented
- **No Backend**: Lead collection via WhatsApp only
- **Mobile-First**: All components built with mobile-first approach
- **Accessibility**: Semantic HTML, keyboard navigation, focus states, reduced motion support
- **Luxury Aesthetic**: Minimal animations, premium color palette, elegant typography

## Build & Development

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Acceptance Criteria - All Met ✓

✓ Project runs without TypeScript errors
✓ Tailwind theme includes all Privelle colors
✓ Fonts are configured via next/font/google
✓ Global styles applied with premium utilities
✓ WhatsApp utilities created with typed interfaces
✓ Launch utilities with date calculations
✓ Button, Badge, ImagePlaceholder components ready
✓ Motion components (Reveal, Stagger, Float, SectionHeader) ready
✓ Folder structure complete and organized
✓ app/page.tsx shows luxury placeholder screen
✓ No testimonials visible
✓ No e-commerce functionality present
