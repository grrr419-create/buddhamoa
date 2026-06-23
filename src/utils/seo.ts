import { faqs, sellerInfo, siteConfig, siteUrl } from "../data/site";
import type { FAQItem, Product, ProductCuration } from "../types";
import { withBase } from "./paths";

export function absoluteUrl(pathname: string) {
  if (/^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(pathname)) return pathname;

  const origin = new URL(siteUrl).origin;

  return new URL(withBase(pathname), origin).toString();
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
    keywords: siteConfig.keywords.join(", "),
    address: {
      "@type": "PostalAddress",
      postalCode: sellerInfo.postalCode,
      streetAddress: sellerInfo.address,
      addressCountry: "KR",
    },
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
    keywords: siteConfig.keywords.join(", "),
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

export function productCurationItemListSchemas(curations: ProductCuration[]) {
  return curations.map((curation) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.brandName} ${curation.name}`,
    description: `${curation.name} 큐레이션 상품 목록`,
    url: absoluteUrl(`/#product-curation-${curation.slug}`),
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: curation.items.length,
    itemListElement: curation.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.href,
      name: item.name,
      item: {
        "@type": "Product",
        name: item.name,
        image: [absoluteUrl(item.image)],
        description: item.imageAlt,
        category: curation.name,
        url: item.href,
        brand: {
          "@type": "Brand",
          name: siteConfig.brandName,
        },
      },
    })),
  }));
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
