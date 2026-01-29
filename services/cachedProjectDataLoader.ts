import { fetchProjectData } from "@/api/fetchProjectData";
import { deleteCache, getCache, setCache } from "./projectCache";
import { DisplayType, ResourceType, SectionType, TagType } from "@/types";

const TTL = 5* 60* 1000; 


export async function cachedProjectDataLoader<T>(
  resource: ResourceType,
  lang: string,
  section?: SectionType,
  display?: DisplayType,
  tag?: TagType,
  signal?: AbortSignal
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


  const promise = fetchProjectData<T>(resource, lang, section, display, tag, signal)
    .then(data => {
      setCache(key, { data, timestamp: Date.now() });
      return data;
    })
    .catch(err => {
      deleteCache(key);
      throw err;
    });

  setCache(key, { promise, timestamp: now });

  return promise;
}
