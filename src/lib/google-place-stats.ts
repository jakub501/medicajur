import { unstable_cache } from "next/cache";
import { SITE } from "@/lib/site";

export type GooglePlaceStats = {
  rating: number;
  reviewCount: number;
  live: boolean;
};

type PlacesApiNewResponse = {
  rating?: number;
  userRatingCount?: number;
};

type PlacesApiLegacyResponse = {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
  };
};

async function fetchFromPlacesApiNew(apiKey: string): Promise<GooglePlaceStats | null> {
  try {
    const placeId = encodeURIComponent(SITE.googlePlaceId);
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
      },
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) return null;

    const data = (await response.json()) as PlacesApiNewResponse;
    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") {
      return null;
    }

    return {
      rating: data.rating,
      reviewCount: data.userRatingCount,
      live: true,
    };
  } catch {
    return null;
  }
}

async function fetchFromPlacesApiLegacy(apiKey: string): Promise<GooglePlaceStats | null> {
  try {
    const params = new URLSearchParams({
      place_id: SITE.googlePlaceId,
      fields: "rating,user_ratings_total",
      key: apiKey,
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
      { next: { revalidate: 60 * 60 * 12 } },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as PlacesApiLegacyResponse;
    if (data.status !== "OK" || !data.result) return null;

    const { rating, user_ratings_total: reviewCount } = data.result;
    if (typeof rating !== "number" || typeof reviewCount !== "number") return null;

    return {
      rating,
      reviewCount,
      live: true,
    };
  } catch {
    return null;
  }
}

async function fetchLiveGooglePlaceStats(): Promise<GooglePlaceStats | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (!apiKey) return null;

  const fromNewApi = await fetchFromPlacesApiNew(apiKey);
  if (fromNewApi) return fromNewApi;

  return fetchFromPlacesApiLegacy(apiKey);
}

async function resolveGooglePlaceStats(): Promise<GooglePlaceStats> {
  const live = await fetchLiveGooglePlaceStats();
  if (live) return live;

  return {
    rating: SITE.googleReviewsFallback.rating,
    reviewCount: SITE.googleReviewsFallback.reviewCount,
    live: false,
  };
}

const cacheSeconds =
  process.env.NODE_ENV === "development" ? 60 : 60 * 60 * 12;

export const getGooglePlaceStats = unstable_cache(
  resolveGooglePlaceStats,
  ["google-place-stats", SITE.googlePlaceId, process.env.GOOGLE_PLACES_API_KEY ?? "no-key"],
  { revalidate: cacheSeconds },
);
