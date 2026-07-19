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

export type TextCurationItem = {
  slug: string;
  name: string;
  image?: string;
  imageAlt?: string;
  href?: string;
};

export type TextCuration = {
  slug: string;
  name: string;
  description: string;
  items?: TextCurationItem[];
};

export type ProductCurationDetailImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProductCurationDetailSection = {
  title: string;
  body: string[];
  images?: ProductCurationDetailImage[];
  imageGroups?: {
    images: ProductCurationDetailImage[];
  }[];
  items?: string[];
};

export type ProductCurationDetailSeo = {
  title?: string;
  description?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  keywords?: string[];
};

export type ProductCurationDetailDescriptionSection = {
  title?: string;
  body: string[];
};

export type ProductCurationDetailFact = {
  name: string;
  value: string;
};

export type ProductCurationDetail = {
  curationSlug: string;
  curationName: string;
  productSlug: string;
  name: string;
  subtitle?: string;
  summary: string;
  introBody?: string[];
  relatedSearchTerms?: string[];
  sliderImages?: ProductCurationDetailImage[];
  descriptionBody?: string[];
  descriptionSections?: ProductCurationDetailDescriptionSection[];
  quickFacts?: ProductCurationDetailFact[];
  faqs?: FAQItem[];
  seo?: ProductCurationDetailSeo;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  storeUrl: string;
  sections: ProductCurationDetailSection[];
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
