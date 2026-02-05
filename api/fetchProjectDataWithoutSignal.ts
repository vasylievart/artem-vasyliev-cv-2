"use server"

import { DisplayType, ResourceType, SectionType, TagType } from "@/types";
import { headers } from "next/headers";

export const fetchProjectDataWithoutSignal = async <T>(
  resource: ResourceType,
  lang: string,
  section?: SectionType,
  display?: DisplayType,
  tag?: TagType,
): Promise<T> => {
  const path = tag
    ? `/data/${resource}/${tag}-${display}.${lang}.json`
    : `/data/${resource}/${section}.${lang}.json`;

  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}${path}`;

  const res = await fetch(url, {next: {revalidate: 300}});

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
};