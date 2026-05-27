export const WHATSAPP_NUMBER = '917305835755';

export const PRE_LAUNCH_WHATSAPP_MESSAGE =
  'Hi Privelle, I want to pre-book the Founding Collection box, claim the 20% Founder\'s Offer, and be among the first to receive the July 1 dispatch. Please share the details.';

export const POST_LAUNCH_WHATSAPP_MESSAGE =
  'Hi Privelle, I\'m interested in Privelle luxury couple gifting boxes. Please share the collection and pricing details.';

export const getWhatsAppUrl = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const getProductWhatsAppMessage = (productName: string): string =>
  `Hi Privelle, I'm interested in the ${productName}. Please share details, pricing, and customisation options.`;

export const getAddOnWhatsAppMessage = (addOnName: string): string =>
  `Hi Privelle, I'm interested in ${addOnName}. Please share customisation options.`;

interface BoxBuilderWhatsAppParams {
  occasion: string;
  budget: string;
  comfortLevel: string;
  addons: string[];
}

export const getBoxBuilderWhatsAppMessage = ({
  occasion,
  budget,
  comfortLevel,
  addons,
}: BoxBuilderWhatsAppParams): string => {
  const addOnSummary = addons.length > 0 ? addons.join(', ') : 'Not selected yet';

  return `Hi Privelle, I want to build a personalised box. Occasion: ${occasion}. Budget: ${budget}. Comfort level: ${comfortLevel}. Add-ons: ${addOnSummary}. Please help me customise it.`;
};
