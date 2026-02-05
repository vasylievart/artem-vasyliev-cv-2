"use server"

import { ResourceType, SectionType } from "@/types";
import { headers } from "next/headers";

export const fetchProjectData = async <T>(
  resource: ResourceType,
  lang: string,
  section?: SectionType,
): Promise<T> => {
  const path = `/data/${resource}/${section}.${lang}.json`;

  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}${path}`;

  const res = await fetch(url, {next: {revalidate: 300}});

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
};