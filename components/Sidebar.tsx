"use client"

import { useLang } from "@/context/LanguageContext";
import Toogle from "@/ui/toogle";
import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Sidebar = () => {
  const { t } = useLang();

  const sections = ["about", "cv", "projects", "contact"];
  const active = useActiveSection(sections);

  return (
    <aside className="sidebar_container">
      <div className="rounded-full inset-shadow-sm inset-shadow-white/20 overflow-hidden">
        <Image
          src="/cv_photo_1.webp"
          alt="profile photo"
          width={272}
          height={272}
          loading="eager"
          sizes="(max-width: 768px) 90vw, 272px"
          className="h-auto w-full"
        />
      </div>
      

      <Toogle />

      <nav className="mt-10 w-full">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block py-2 px-4 rounded transition ${
              active === id ? "sidebar_active" : "sidebar_hover"
            }`}
          >
            {t(id)}
          </a>
        ))}
      </nav>
    </aside>
  );
};
