"use client"

import Image from "next/image";
import { CarouselImage, Project } from "@/types";
import { useProjectModal } from "@/hooks/useProjectModal";
import dynamic from 'next/dynamic';
import { fetchProjectDataWithoutSignal } from "@/api/fetchProjectData";
import LaptopPreviewModal from "./LaptopPreviewModal";
import MobilePreviewModal from "./MobilePreviewModal";
import { useEffect, useRef, useState } from "react";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { fetchProjectImages } from "@/api/fetchProjectImage";

gsap.registerPlugin(useGSAP);


const CarouselModal = dynamic(() => import('./CarouselModal'), {
  loading: () => <div className="h-64 bg-neutral-800 animate-pulse rounded" />,
});


export default function ProjectCard({ 
  project, 
  lang }: { 
    project: Project;
    lang: string;
  }) {
  const [images, setImages] = useState<CarouselImage[]>()
  const { tag, display, isOpen, open, close } = useProjectModal();

  useEffect(() => {
  if (!isOpen || !tag || !display) return;

  let cancelled = false;

  async function getImages() {
    try {
      const data = await fetchProjectImages(lang, display, tag);
      if (!cancelled) setImages(data);
    } catch (err) {
      console.error("Failed to load carousel images", err);
    }
  }

  getImages();

  return () => {
    cancelled = true;
  };
}, [isOpen, lang, display, tag]);
  

  const laptopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  useProjectAnimation({ laptopRef, mobileRef });


  return (
    <div className="project_card_container">
      <div className="laptop_preview">
        <LaptopPreviewModal
          project={project}
          onOpen={open}
          laptopRef={laptopRef}
        />
      </div>
      
      <div className="mobile_preview">
        <MobilePreviewModal
          project={project}
          onOpen={open}
          mobileRef={mobileRef}
        />
      </div>
      

      <div className="project_description">
        <p className="px-4">{project.description}</p>
        <span className="flex gap-2 p-4">
          Stack:
          {project.stack.map((s, i) => (
            <Image
              key={i}
              title={s.alt}
              src={s.icon}
              alt={s.alt}
              width={24}
              height={24}
              loading="lazy"
            />
          ))}
        </span>
      </div>

      {isOpen && images  && (
        <CarouselModal images={images} display={display} onClose={close} />
      )}
    </div>
  );
}
