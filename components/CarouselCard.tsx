import { CarouselCardProps, DisplayType } from "@/types";
import Image from "next/image";

const CarouselCard = ({
  active,
  url,
  alt,
  display,
  description,
  index,
}: CarouselCardProps) => {
  const sizeMap = {
    desktop: "h-200 mt-84",
    mobile: "h-172 w-80",
  } satisfies Record<DisplayType, string>;

  return (
    <div className={`flex flex-col gap-8 ${sizeMap[display]}`}>
      <Image
        src={url}
        alt={alt}
        width={720}
        height={450}
        loading="lazy"
        className="rounded-xl shadow-xl border border-white/10"
      />
      {index === active && (
        <p className="w-180 h-64 px-4 bottom-3 text-sm text-white/70">
          {display === "desktop" ? description : ""}
        </p>
      )}
    </div>
  );
};

export default CarouselCard;
