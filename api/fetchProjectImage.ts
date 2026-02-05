import { CarouselImage, DisplayType, TagType } from "@/types";

export async function fetchProjectImages(
  lang: string,
  display?: DisplayType,
  tag?: TagType
): Promise<CarouselImage[]> {
  if (!display || !tag) return [];

  const path = `/data/projects-details/${tag}-${display}.${lang}.json`;

  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json();
}
