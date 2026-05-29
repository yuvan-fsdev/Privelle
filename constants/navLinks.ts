export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'Build Box', href: '/build-box' },
  { label: "What's Inside", href: '/inside-privelle' },
  { label: 'FAQ', href: '/faq' },
];
