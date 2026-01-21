"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Number of visible images based on screen size (handled via CSS)
  const visibleCount = 4; // Base for desktop
  const maxIndex = Math.max(0, images.length - visibleCount);

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <>
      <div className="relative">
        {/* Navigation Arrow - Left */}
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-zinc-900/90 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all shadow-lg"
          aria-label="Previous images"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden mx-4 md:mx-8">
          <div
            className="flex transition-transform duration-500 ease-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount + 1.333)}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrow - Right */}
        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-zinc-900/90 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all shadow-lg"
          aria-label="Next images"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(images.length / visibleCount) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(Math.min(idx * visibleCount, maxIndex))}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / visibleCount) === idx
                  ? "bg-accent w-6"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-silver transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 text-white hover:text-silver transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
            }}
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white hover:text-silver transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
            }}
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
