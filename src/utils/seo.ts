import { faqs, sellerInfo, siteConfig, siteUrl } from "../data/site";
import {
  getCurationProductDetailPath,
  hasCurationProductDetail,
} from "../data/curationProductDetails";
import { getShortVideoEmbed } from "./shortVideoEmbeds";
import type {
  CategoryLink,
  FAQItem,
  Product,
  ProductCurationDetail,
  ProductCuration,
  ProductShort,
  TempleShort,
} from "../types";
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
    "@id": `${siteUrl}#organization`,
    name: siteConfig.brandName,
    legalName: sellerInfo.businessName,
    url: siteUrl,
    logo: absoluteUrl(siteConfig.brandAssetPath),
    image: absoluteUrl("/images/brand/new-og-image.png"),
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.contactPhone,
      email: siteConfig.contactEmail,
      availableLanguage: ["ko"],
      areaServed: "KR",
    },
    knowsAbout: siteConfig.keywords,
    sameAs: siteConfig.socialProfiles,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: siteConfig.siteName,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "ko-KR",
    keywords: siteConfig.keywords.join(", "),
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
  };
}

export function homePageSchema({
  categories = [],
  curations = [],
  productShorts = [],
  templeShorts = [],
  faqItems = [],
}: {
  categories?: CategoryLink[];
  curations?: ProductCuration[];
  productShorts?: ProductShort[];
  templeShorts?: TempleShort[];
  faqItems?: FAQItem[];
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}#webpage`,
    name: siteConfig.siteName,
    headline: "불교용품은 역시 붓다모아",
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": `${siteUrl}#website`,
    },
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    primaryImageOfPage: absoluteUrl("/images/brand/new-og-image.png"),
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
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": absoluteUrl("/#category-links"),
        name: "필요한 불교용품, 쉽게 골라보세요",
        description: `${categories.length}개 주제별 불교용품 카테고리 안내`,
      },
      {
        "@type": "WebPageElement",
        "@id": absoluteUrl("/#product-curations"),
        name: "붓다모아 상품 큐레이션",
        description: `${curations.length}개 큐레이션별 불교용품 상세 안내`,
      },
      {
        "@type": "WebPageElement",
        "@id": absoluteUrl("/#product-shorts"),
        name: "쇼츠로 보는 붓다모아 Pick",
        description: `${productShorts.length}개 불교용품 영상 콘텐츠`,
      },
      {
        "@type": "WebPageElement",
        "@id": absoluteUrl("/#temple-shorts"),
        name: "잠깐, 사찰 한 바퀴",
        description: `${templeShorts.length}개 사찰 영상 콘텐츠`,
      },
      {
        "@type": "WebPageElement",
        "@id": absoluteUrl("/#guide-faq"),
        name: "붓다모아 이용 안내",
        description: `${faqItems.length}개 불교용품 구매 전 자주 묻는 질문`,
      },
    ],
  };
}

export function landingNavigationSchemas() {
  return [
    ["필요한 불교용품, 쉽게 골라보세요", "/#category-links"],
    ["붓다모아 상품 큐레이션", "/#product-curations"],
    ["쇼츠로 보는 붓다모아 Pick", "/#product-shorts"],
    ["잠깐, 사찰 한 바퀴", "/#temple-shorts"],
    ["붓다모아 이용 안내", "/#guide-faq"],
  ].map(([name, url], index) => ({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    position: index + 1,
    name,
    url: absoluteUrl(url),
  }));
}

export function categoryItemListSchema(categories: CategoryLink[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "붓다모아 불교용품 카테고리 안내",
    description:
      "이벤트, 불교인테리어, 불교액세서리, 명상도구, 불교경전, 풍수용품을 용도별로 정리한 안내 목록입니다.",
    url: absoluteUrl("/#category-links"),
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: categories.length,
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/#category-${category.slug}`),
      name: category.name,
      item: {
        "@type": "DefinedTerm",
        "@id": absoluteUrl(`/#category-${category.slug}`),
        name: category.name,
        description: category.description,
        image: absoluteUrl(category.image),
        inDefinedTermSet: "붓다모아 불교용품 카테고리",
      },
    })),
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

function uniqueValues(values: Array<string | undefined>) {
  return [...new Set(values.map((value) => value?.trim()).filter(Boolean))] as string[];
}

function uniqueKeywordValues(values: Array<string | undefined>) {
  return uniqueValues(values.flatMap((value) => value?.split(",") ?? []));
}

function curationProductDetailSectionText(detail: ProductCurationDetail) {
  return detail.sections
    .map((section) =>
      [section.title, ...section.body, ...(section.items ?? [])].filter(Boolean).join(" "),
    )
    .join(" ");
}

function curationProductDetailAutoKeywords(detail: ProductCurationDetail) {
  const text = [
    detail.name,
    detail.curationName,
    detail.subtitle,
    detail.summary,
    ...(detail.introBody ?? []),
    detail.imageAlt,
    curationProductDetailSectionText(detail),
    ...(detail.descriptionSections?.flatMap((section) => [section.title, ...section.body]) ?? []),
    ...(detail.descriptionBody ?? []),
  ].join(" ");

  return siteConfig.keywords.filter((keyword) => text.includes(keyword));
}

function curationProductDetailKeywords(detail: ProductCurationDetail) {
  return uniqueKeywordValues([
    detail.name,
    detail.curationName,
    detail.seo?.primaryKeyword,
    ...(detail.seo?.secondaryKeywords ?? []),
    ...(detail.relatedSearchTerms ?? []),
    ...(detail.seo?.keywords ?? []),
    ...curationProductDetailAutoKeywords(detail),
  ]).slice(0, 12);
}

function curationProductDetailEntities(values: string[]) {
  return values.map((name) => ({
    "@type": "Thing",
    name,
  }));
}

function curationProductDetailFactValue(detail: ProductCurationDetail, names: string[]) {
  const normalizedNames = names.map((name) => name.trim());
  const fact = detail.quickFacts?.find((item) => normalizedNames.includes(item.name.trim()));

  return fact?.value.trim();
}

function curationProductDetailWordCount(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}

function curationProductDetailDescriptionParts(
  detail: ProductCurationDetail,
  canonicalUrl: string,
) {
  const sections = detail.descriptionSections?.length
    ? detail.descriptionSections.map((section, index) => ({
        "@type": "WebPageElement",
        "@id": `${canonicalUrl}#description-section-${index + 1}`,
        name: section.title?.trim() || `${detail.name} 상세 설명 ${index + 1}`,
        text: section.body.join(" "),
      }))
    : detail.descriptionBody?.length
      ? [
          {
            "@type": "WebPageElement",
            "@id": `${canonicalUrl}#description-section-1`,
            name: `${detail.name} 상세 설명`,
            text: detail.descriptionBody.join(" "),
          },
        ]
      : detail.sections.map((section, index) => ({
          "@type": "WebPageElement",
          "@id": `${canonicalUrl}#description-section-${index + 1}`,
          name: section.title,
          text: [section.title, ...section.body, ...(section.items ?? [])].join(" "),
        }));

  return sections.filter((section) => section.text.trim());
}

export function curationProductDetailDescriptionText(detail: ProductCurationDetail) {
  const sectionText = detail.descriptionSections
    ?.map((section) => [section.title, section.body.join(" ")].filter(Boolean).join(" "))
    .join(" ");
  const bodyText = detail.descriptionBody?.join(" ");
  const legacySectionText = curationProductDetailSectionText(detail);
  const fallbackText = [detail.summary, ...(detail.introBody ?? [])].join(" ");

  return sectionText || bodyText || legacySectionText || fallbackText;
}

export function curationProductDetailMeta(detail: ProductCurationDetail) {
  const pathname = getCurationProductDetailPath(detail.curationSlug, detail.productSlug);
  const title =
    detail.seo?.title ?? `${detail.name} | ${detail.curationName} | ${siteConfig.brandName}`;
  const description = detail.seo?.description ?? detail.summary;
  const detailKeywords = curationProductDetailKeywords(detail);
  const keywords = detailKeywords.length ? detailKeywords : siteConfig.keywords;

  return {
    pathname,
    canonicalUrl: absoluteUrl(pathname),
    title,
    description,
    keywords,
  };
}

export function curationProductDetailOpenGraphImage(detail: ProductCurationDetail) {
  return {
    src: detail.image.replace(/\.(?:png|jpe?g)$/i, "-og.jpg"),
    width: 1200,
    height: 1200,
  };
}

function curationProductDetailImageObjects(detail: ProductCurationDetail, canonicalUrl: string) {
  const sectionImages = detail.sections.flatMap((section) => [
    ...(section.images ?? []),
    ...(section.imageGroups?.flatMap((group) => group.images) ?? []),
  ]);
  const fallbackImages = [
    { src: detail.image, alt: detail.imageAlt, caption: detail.summary },
    ...sectionImages,
  ];
  const images = detail.sliderImages?.length ? detail.sliderImages : fallbackImages;
  const uniqueImages = images.filter(
    (image, index, list) => list.findIndex((candidate) => candidate.src === image.src) === index,
  );

  return uniqueImages.slice(0, 3).map((image, index) => {
    const imageUrl = absoluteUrl(image.src);

    return {
      "@type": "ImageObject",
      "@id": `${canonicalUrl}#image-${index + 1}`,
      contentUrl: imageUrl,
      url: imageUrl,
      name: image.alt,
      caption: image.caption ?? image.alt,
      inLanguage: "ko-KR",
      representativeOfPage: index === 0,
      mainEntityOfPage: {
        "@id": `${canonicalUrl}#webpage`,
      },
    };
  });
}

export function curationProductDetailStructuredData(detail: ProductCurationDetail) {
  const { pathname, canonicalUrl, title, description, keywords } = curationProductDetailMeta(detail);
  const imageObjects = curationProductDetailImageObjects(detail, canonicalUrl);
  const imageRefs = imageObjects.map((image) => ({ "@id": image["@id"] }));
  const imageUrls = imageObjects.map((image) => image.contentUrl);
  const descriptionText = curationProductDetailDescriptionText(detail);
  const descriptionParts = curationProductDetailDescriptionParts(detail, canonicalUrl);
  const about = uniqueValues([
    detail.name,
    detail.curationName,
    detail.seo?.primaryKeyword,
    ...(detail.seo?.secondaryKeywords ?? []).slice(0, 4),
  ]).slice(0, 8);
  const aboutEntities = curationProductDetailEntities(about);
  const alternateNames = uniqueValues([
    ...(detail.relatedSearchTerms ?? []),
    ...(detail.seo?.secondaryKeywords ?? []),
  ])
    .filter((value) => value !== detail.name)
    .slice(0, 8);
  const material = curationProductDetailFactValue(detail, ["재질", "소재"]);
  const size = curationProductDetailFactValue(detail, ["크기", "사이즈"]);
  const weight = curationProductDetailFactValue(detail, ["무게", "중량"]);
  const manufacturer = curationProductDetailFactValue(detail, ["수입사", "제조사"]);
  const countryOfOrigin = curationProductDetailFactValue(detail, ["원산지", "제조국"]);
  const quickFactsText = detail.quickFacts
    ?.map((fact) => `${fact.name}: ${fact.value}`)
    .join(" / ");
  const pageParts = [
    {
      "@type": "WebPageElement",
      "@id": `${canonicalUrl}#product-summary`,
      name: `${detail.name} 상품 요약`,
      text: detail.summary,
    },
    ...(detail.quickFacts?.length
      ? [
          {
            "@type": "WebPageElement",
            "@id": `${canonicalUrl}#quick-facts`,
            name: "한눈에 보는 상품 정보",
            text: quickFactsText,
          },
        ]
      : []),
    ...descriptionParts,
    ...(detail.faqs?.length
      ? [
          {
            "@id": `${canonicalUrl}#faq`,
          },
        ]
      : []),
  ];
  const faqQuestions =
    detail.faqs?.map((item, index) => ({
      "@type": "Question",
      "@id": `${canonicalUrl}#faq-question-${index + 1}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })) ?? [];
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: siteConfig.brandName,
      url: siteUrl,
      logo: absoluteUrl(siteConfig.brandAssetPath),
      sameAs: siteConfig.socialProfiles,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: siteConfig.siteName,
      url: siteUrl,
      description: siteConfig.description,
      inLanguage: "ko-KR",
      keywords: siteConfig.keywords.slice(0, 12).join(", "),
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
    ...imageObjects,
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      headline: detail.name,
      ...(detail.subtitle ? { alternativeHeadline: detail.subtitle } : {}),
      abstract: detail.summary,
      description,
      ...(detail.updatedAt ? { dateModified: detail.updatedAt } : {}),
      inLanguage: "ko-KR",
      keywords: keywords.join(", "),
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      primaryImageOfPage: imageRefs[0],
      thumbnailUrl: imageUrls[0],
      image: imageRefs,
      associatedMedia: imageRefs,
      about: aboutEntities,
      mentions: aboutEntities,
      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },
      mainContentOfPage: {
        "@type": "WebPageElement",
        "@id": `${canonicalUrl}#product-description`,
        name: `${detail.name} 상품 설명`,
        text: descriptionText,
        ...(descriptionParts.length ? { hasPart: descriptionParts.map((part) => ({ "@id": part["@id"] })) } : {}),
      },
      ...(pageParts.length ? { hasPart: pageParts } : {}),
      mainEntity: {
        "@id": `${canonicalUrl}#product`,
      },
    },
    {
      "@type": "Product",
      "@id": `${canonicalUrl}#product`,
      name: detail.name,
      description,
      image: imageUrls,
      thumbnailUrl: imageUrls[0],
      url: canonicalUrl,
      sku: `${detail.curationSlug}-${detail.productSlug}`,
      category: detail.curationName,
      keywords: keywords.join(", "),
      ...(alternateNames.length ? { alternateName: alternateNames } : {}),
      ...(material ? { material } : {}),
      ...(size ? { size } : {}),
      ...(weight ? { weight } : {}),
      ...(manufacturer
        ? {
            manufacturer: {
              "@type": "Organization",
              name: manufacturer,
            },
          }
        : {}),
      ...(countryOfOrigin
        ? {
            countryOfOrigin: {
              "@type": "Country",
              name: countryOfOrigin,
            },
          }
        : {}),
      brand: {
        "@type": "Brand",
        name: siteConfig.brandName,
      },
      mainEntityOfPage: {
        "@id": `${canonicalUrl}#webpage`,
      },
      sameAs: detail.storeUrl,
      ...(detail.quickFacts?.length
        ? {
            additionalProperty: detail.quickFacts.map((fact) => ({
              "@type": "PropertyValue",
              name: fact.name,
              value: fact.value,
            })),
          }
        : {}),
    },
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: detail.descriptionSections?.[0]?.title ?? title,
      ...(detail.subtitle ? { alternativeHeadline: detail.subtitle } : {}),
      description,
      abstract: detail.summary,
      ...(detail.updatedAt ? { dateModified: detail.updatedAt } : {}),
      articleBody: descriptionText,
      articleSection: detail.curationName,
      keywords: keywords.join(", "),
      wordCount: curationProductDetailWordCount(descriptionText),
      isAccessibleForFree: true,
      inLanguage: "ko-KR",
      image: imageRefs,
      thumbnailUrl: imageUrls[0],
      about: aboutEntities,
      mentions: aboutEntities,
      ...(descriptionParts.length ? { hasPart: descriptionParts } : {}),
      mainEntityOfPage: {
        "@id": `${canonicalUrl}#webpage`,
      },
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": absoluteUrl("/"),
            name: siteConfig.siteName,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": absoluteUrl(`/#product-curation-${detail.curationSlug}`),
            name: detail.curationName,
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": absoluteUrl(pathname),
            name: detail.name,
          },
        },
      ],
    },
    ...faqQuestions,
    ...(faqQuestions.length
      ? [
          {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: faqQuestions.map((question) => ({ "@id": question["@id"] })),
          },
        ]
      : []),
  ];

  return [
    {
      "@context": "https://schema.org",
      "@graph": graph,
    },
  ];
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
