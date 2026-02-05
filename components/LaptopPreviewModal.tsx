import Image from "next/image";
import { LaptopModalProps,  TagType } from "@/types";



const LaptopPreviewModal = ({ project, onOpen, laptopRef }: LaptopModalProps) => {
  return (
    <div
      ref={laptopRef}
      onClick={() => onOpen(project.tag as TagType, "desktop")}
      className="relative w-90 h-56.25 cursor-pointer"
    >
      <Image
        src="/frame/laptop_frame_800_1.png"
        alt={project.alt}
        width={360}
        height={225}
        priority={true}
        sizes="(max-width: 768px) 80vw, 360px"
      />
  
      <div className="absolute w-65 h-40 top-4 left-12">
        <Image
          src={project.desktop_image}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 90vw, 260px"
        />
      </div>
    </div>
  );
};

export default LaptopPreviewModal;
