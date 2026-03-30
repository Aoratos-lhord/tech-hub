import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventImage } from '../../types';

interface GalleryGridProps {
  images: EventImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<EventImage | null>(null);

  const currentIndex = selectedImage ? images.findIndex((img) => img.id === selectedImage.id) : -1;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer group overflow-hidden rounded-lg aspect-square"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.thumbnail}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200"
          >
            <X size={24} className="text-black" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {currentIndex > 0 && (
              <button
                onClick={() => setSelectedImage(images[currentIndex - 1])}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {currentIndex < images.length - 1 && (
              <button
                onClick={() => setSelectedImage(images[currentIndex + 1])}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}