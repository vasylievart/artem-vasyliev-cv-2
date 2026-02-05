import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { DisplayType, ResourceType, SectionType, TagType } from "@/types";
import { cachedProjectDataLoaderWithoutSignal } from "@/services/cachedProjectDataLoaderWithoutSignal";

export function useProjectDataWithoutSignal<T>(
  resource: ResourceType,
  section?: SectionType,
  display?: DisplayType,
  tag?: TagType
) {
  const { lang } = useLang();

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    setLoading(true);
    setError(null);

    cachedProjectDataLoaderWithoutSignal<T>(
      resource,
      lang,
      section,
      display,
      tag,
    )
      .then(setData)
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err);
      })
      .finally(() => setLoading(false));

  }, [resource, section, tag, display, lang]);

  return { data, loading, error };
}
