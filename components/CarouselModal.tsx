import {CarouselModalProps } from "@/types";
import dynamic from "next/dynamic";

const Carousel3D = dynamic(() => import('./Carousel3D'), {
  loading: () => <div className="h-64 bg-neutral-800 animate-pulse rounded" />,
});

const CarouselModal = ({ images, display, onClose }: CarouselModalProps) => {
  return (
    <div className="carousel_modal" onClick={onClose}>
      <div
        className="flex w-225 max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Carousel3D display={display} images={images} />
      </div>
    </div>
  );
};

export default CarouselModal;
