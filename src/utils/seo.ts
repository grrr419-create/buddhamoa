import { faqs, sellerInfo, siteConfig, siteUrl } from "../data/site";
import {
  getCurationProductDetailPath,
  hasCurationProductDetail,
} from "../data/curationProductDetails";
import { getShortVideoEmbed } from "./shortVideoEmbeds";
import type { FAQItem, Product, ProductCuration, ProductShort, TempleShort } from "../types";
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
    sameAs: siteConfig.socialProfiles,
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

export function homePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: siteConfig.siteName,
    headline: "불교용품은 역시 붓다모아",
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "ko-KR",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteUrl,
    },
    about: [
      "불교용품",
      "불상",
      "염주",
      "손가락염주",
      "목탁",
      "명상도구",
      "불교굿즈",
      "사경노트",
      "불교경전",
    ],
  };
}

function getYouTubeVideoId(url?: string) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");
    const parts = parsedUrl.pathname.split("/").filter(Boolean);

    if (host === "youtu.be") {
      return parts[0] ?? "";
    }

    if (host.endsWith("youtube.com")) {
      if (parts[0] === "shorts" || parts[0] === "embed") {
        return parts[1] ?? "";
      }

      return parsedUrl.searchParams.get("v") ?? "";
    }
  } catch {
    const match = url.match(/(?:shorts\/|youtu\.be\/|embed\/|v=)([A-Za-z0-9_-]+)/);
    return match?.[1] ?? "";
  }

  return "";
}

function cleanTags(tags: string[]) {
  return tags.map((tag) => tag.replace(/^#/, "")).join(", ");
}

function videoThumbnailUrl(videoUrl?: string) {
  const youtubeId = getYouTubeVideoId(videoUrl);

  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : "";
}

function videoObjectSchema({
  name,
  description,
  contentUrl,
  embedUrl,
  tags,
}: {
  name: string;
  description: string;
  contentUrl?: string;
  embedUrl?: string;
  tags: string[];
}) {
  const thumbnailUrl = videoThumbnailUrl(contentUrl || embedUrl);

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    inLanguage: "ko-KR",
    contentUrl,
    embedUrl,
    ...(thumbnailUrl ? { thumbnailUrl: [thumbnailUrl] } : {}),
    keywords: cleanTags(tags),
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteUrl,
    },
  };
}

export function productShortVideoSchemas(shorts: ProductShort[]) {
  return shorts.map((short) =>
    videoObjectSchema({
      name: `${short.title} 쇼츠로 보는 붓다모아 Pick`,
      description: `${short.title} 상품을 짧은 영상으로 확인할 수 있는 붓다모아 Pick 콘텐츠입니다.`,
      contentUrl: short.href,
      embedUrl: short.embedUrl,
      tags: short.tags,
    }),
  );
}

export function templeShortVideoSchemas(shorts: TempleShort[]) {
  return shorts.flatMap((short) => {
    const video = getShortVideoEmbed(short.videoUrl);

    if (!short.videoUrl || !video.embedUrl) return [];

    return [
      videoObjectSchema({
        name: short.title,
        description: `${short.location} ${short.templeName}을 짧은 영상으로 둘러보는 붓다모아 사찰 콘텐츠입니다.`,
        contentUrl: short.videoUrl,
        embedUrl: video.embedUrl,
        tags: short.tags,
      }),
    ];
  });
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
    itemListElement: curation.items.map((item, index) => {
      const itemUrl = hasCurationProductDetail(curation.slug, item.slug)
        ? absoluteUrl(getCurationProductDetailPath(curation.slug, item.slug))
        : item.href;

      return {
        "@type": "ListItem",
        position: index + 1,
        url: itemUrl,
        name: item.name,
        item: {
          "@type": "Product",
          name: item.name,
          image: [absoluteUrl(item.image)],
          description: item.imageAlt,
          category: curation.name,
          url: itemUrl,
          offers: {
            "@type": "Offer",
            url: item.href,
            availability: "https://schema.org/InStock",
          },
          brand: {
            "@type": "Brand",
            name: siteConfig.brandName,
          },
        },
      };
    }),
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
