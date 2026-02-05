import { deleteCache, getCache, setCache } from "./projectCache";
import { DisplayType, ResourceType, SectionType, TagType } from "@/types";
import { fetchProjectDataWithoutSignal } from "@/api/fetchProjectDataWithoutSignal";

const TTL = 2000;

export async function cachedProjectDataLoaderWithoutSignal<T>(
  resource: ResourceType,
  lang: string,
  section?: SectionType,
  display?: DisplayType,
  tag?: TagType,
): Promise<T> {
  const key = `${resource}:${section ?? "none"}:${display ?? "none"}:${lang}:${tag ?? "none"}`;
  const now = Date.now();

  const cached = getCache<T>(key);

  if (cached?.data && now - cached.timestamp < TTL) {
    return cached.data;
  }

  if (cached?.promise) {
    return cached.promise;
  }

  const promise = fetchProjectDataWithoutSignal<T>(
    resource,
    lang,
    section,
    display,
    tag
  )
    .then((data) => {
      setCache(key, { data, timestamp: Date.now() });
      return data;
    })
    .catch((err) => {
      deleteCache(key);
      throw err;
    });

  setCache(key, { promise, timestamp: now });

  return promise;
}
