export interface GiftNote {
  id: string;
  title: string;
  content: string;
  category?: string;
}

export const GIFT_NOTES: GiftNote[] = [];
