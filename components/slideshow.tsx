import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useTheme } from "next-themes";

export interface SlideShowItem{
  src: string;
  alt: string;
  caption: string;
}

interface SlideshowProps {
  images: readonly SlideShowItem[];
}

export function Slideshow({ images }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mayAdvanceAfter, setMayAdvanceAfter] = useState(Date.now() + 8000);
  const { theme } = useTheme();

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (mayAdvanceAfter <= Date.now()){
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setMayAdvanceAfter(Date.now() + 4000)
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mayAdvanceAfter, isPlaying, images.length]);

  const goToSlide = (index: number) => {
    setMayAdvanceAfter(Date.now() + 4000);
    setIsPlaying(false);
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setMayAdvanceAfter(Date.now() + 4000);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setMayAdvanceAfter(Date.now() + 4000);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const togglePlayPause = () => {
    setMayAdvanceAfter(Date.now() + 4000);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={images[currentSlide].src}
          alt={images[currentSlide].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white text-lg font-medium drop-shadow-lg">
            {images[currentSlide].caption}
          </p>
        </div>
        
        {/* Play/Pause Button */}
        <Button
          variant="ghost"
          size="sm"
          title="Slideshow pausieren"
          aria-label="pausiert die Slideshow"
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="sm"
          title="vorheriges Bild anzeigen"
          aria-label="zeigt vorheriges Bild an"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          title="nächstes Bild anzeigen"
          aria-label="zeigt nächstes Bild an"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentSlide
                ? theme === "dark"
                  ? "border-blue-400"
                  : "border-blue-500"
                : "border-transparent opacity-60 hover:opacity-80"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={64}
              height={48}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
