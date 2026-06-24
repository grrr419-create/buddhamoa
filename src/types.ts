export type FAQItem = {
  question: string;
  answer: string;
};

export type TopNotice = {
  slug: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export type CategoryLink = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  hrefLabel: string;
};

export type ProductCurationItem = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type ProductCuration = {
  slug: string;
  name: string;
  description: string;
  items: ProductCurationItem[];
};

export type TempleShort = {
  slug: string;
  title: string;
  location: string;
  templeName: string;
  tags: string[];
  videoUrl?: string;
};

export type SocialFollowChannel = {
  icon: "youtube" | "instagram" | "tiktok";
  href: string;
  label: string;
  ctaLabel: string;
};

export type ProductShort = {
  slug: string;
  title: string;
  href: string;
  embedUrl: string;
  tags: string[];
  storeUrl: string;
};

export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  category: string;
  image: string;
  imageAlt: string;
  storeUrl: string;
  highlights: string[];
  targetUse: string;
  featured: boolean;
  keywords: string[];
};
