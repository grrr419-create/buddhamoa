export type ShortVideoProvider = "youtube" | "tiktok" | "instagram" | "unknown";

export type ShortVideoEmbed = {
  embedUrl: string;
  provider: ShortVideoProvider;
  providerLabel: string;
};

const YOUTUBE_PROFILE_REFRESH = "20260621";

function getYouTubeId(url?: string) {
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
    const match = url.match(/(?:shorts\/|youtu\.be\/|v=)([A-Za-z0-9_-]+)/);
    return match?.[1] ?? "";
  }

  return "";
}

function getTikTokId(url?: string) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split("/").filter(Boolean);
    const videoIndex = parts.indexOf("video");

    if (parsedUrl.hostname.endsWith("tiktok.com") && videoIndex >= 0) {
      return parts[videoIndex + 1] ?? "";
    }
  } catch {
    const match = url.match(/video\/(\d+)/);
    return match?.[1] ?? "";
  }

  return "";
}

function getInstagramEmbedUrl(url?: string) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split("/").filter(Boolean);
    const contentType = parts[0];
    const shortcode = parts[1];

    if (
      parsedUrl.hostname.endsWith("instagram.com") &&
      (contentType === "reel" || contentType === "p") &&
      shortcode
    ) {
      return `https://www.instagram.com/${contentType}/${shortcode}/embed/`;
    }
  } catch {
    const match = url.match(/instagram\.com\/(reel|p)\/([^/?#]+)/);
    return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed/` : "";
  }

  return "";
}

export function getShortVideoEmbed(url?: string): ShortVideoEmbed {
  const youtubeId = getYouTubeId(url);

  if (youtubeId) {
    return {
      embedUrl: `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&profile_refresh=${YOUTUBE_PROFILE_REFRESH}`,
      provider: "youtube",
      providerLabel: "유튜브 쇼츠",
    };
  }

  const tiktokId = getTikTokId(url);

  if (tiktokId) {
    return {
      embedUrl: `https://www.tiktok.com/embed/v2/${tiktokId}`,
      provider: "tiktok",
      providerLabel: "틱톡 영상",
    };
  }

  const instagramEmbedUrl = getInstagramEmbedUrl(url);

  if (instagramEmbedUrl) {
    return {
      embedUrl: instagramEmbedUrl,
      provider: "instagram",
      providerLabel: "인스타그램 릴스",
    };
  }

  return {
    embedUrl: "",
    provider: "unknown",
    providerLabel: "영상",
  };
}
