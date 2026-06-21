import { channels, faqs, sellerInfo, siteConfig, siteUrl } from "../data/site";
import type { FAQItem, Product } from "../types";

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    legalName: sellerInfo.businessName,
    url: siteUrl,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    telephone: siteConfig.contactPhone,
    taxID: sellerInfo.businessNumber,
    address: {
      "@type": "PostalAddress",
      postalCode: sellerInfo.postalCode,
      streetAddress: sellerInfo.address,
      addressCountry: "KR",
    },
    sameAs: channels.map((channel) => channel.href),
    knowsAbout: siteConfig.keywords,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "ko-KR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
  };
}

export function itemListSchema(items: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "붓다모아 불교용품 큐레이션",
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/products/${product.slug}/`),
      name: product.name,
      image: absoluteUrl(product.image),
    })),
  };
}

export function faqSchema(items: FAQItem[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [absoluteUrl(product.image)],
    description: [product.summary, ...product.description].join(" "),
    category: product.category,
    keywords: product.keywords.join(", "),
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
    audience: {
      "@type": "Audience",
      audienceType: product.targetUse,
    },
    url: absoluteUrl(`/products/${product.slug}/`),
    offers: {
      "@type": "Offer",
      url: product.storeUrl,
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
    },
  };
}
