import Image from "next/image";
import { MobileModalProps, TagType } from "@/types";



const MobilePreviewModal = ({ project, onOpen, mobileRef }: MobileModalProps) => {
  return (
    <div
      ref={mobileRef}
      onClick={() => onOpen(project.tag as TagType, "mobile")}
      className="relative w-30 h-60 cursor-pointer"
    >
      <Image
        src="/frame/mobile_frame_160.webp"
        alt={project.alt}
        width={120}
        height={240} 
      />
    
      <div className="mobile_modal">
        <Image src={project.mobile_image} alt={project.alt} fill sizes="(max-width: 768px) 90vw, 400px" />
      </div>
    </div>
  );
};

export default MobilePreviewModal;
