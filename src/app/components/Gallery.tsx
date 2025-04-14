"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Gallery() {
  const galleryImages = [
    { id: 1, title: 'K2 Summit', description: 'The second highest mountain in the world', imageUrl: '/karakoram.jpg' },
    { id: 2, title: 'Baltoro Glacier', description: 'One of the longest glaciers outside polar regions', imageUrl: '/images/baltoro.jpg' },
    { id: 3, title: 'Gasherbrum I', description: 'Also known as Hidden Peak', imageUrl: '/images/gasherbrum.jpg' },
    { id: 4, title: 'Broad Peak', description: 'The 12th highest mountain on Earth', imageUrl: '/images/broadpeak.jpg' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="p-8 bg-gray-900 text-gray-100">
      <h2 className="text-4xl font-bold text-center mt-12 mb-6 text-yellow-400 drop-shadow-lg">Gallery</h2>
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image 
              src={image.imageUrl} 
              alt={image.title} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{image.title}</h3>
              <p className="text-gray-300 text-lg">{image.description}</p>
            </div>
          </div>
        ))}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 bg-opacity-70 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
          aria-label="Previous image"
        >
          &#9665;
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 bg-opacity-70 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
          aria-label="Next image"
        >
          &#9655;
        </button>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
