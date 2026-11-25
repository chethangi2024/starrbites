export interface NavItem {
  label: string;
  href: string;
}

export const SITE = {
  name: 'StarrBites',
  tagline: 'Bengaluru-based land developer creating curated plotted destinations for homeowners and investors.',
  address: 'No. 194, 3rd Main, 13th Cross, RMV 2nd Stage, HIG Dollars Colony, Bangalore-94',
  phones: [
    { display: '+91 88611 97979', href: 'tel:+918861197979' },
    { display: '+91 96204 11122', href: 'tel:+919620411122' },
  ],
  whatsapp: {
    display: '+91 88611 97979',
    href: 'https://wa.me/918861197979',
  },
  email: 'info@starrbites.com',
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  flagshipUrl: 'https://tiigertrail.com',
} as const;

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Investors', href: '/investors' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];
