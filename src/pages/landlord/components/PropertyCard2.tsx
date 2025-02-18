"use client";

import * as React from "react";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Home,
  MapPin,
  Play,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

interface PropertyCardProps {
  images: string[];
  videoThumbnail: string;
  videoUrl: string;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  petPolicy: string;
  price: number;
  deposit: number;
  isAvailable?: boolean;
  detailsUrl: string;
  bookingUrl: string;
}

export const PropertyCard = ({
  images,
  videoThumbnail,
  videoUrl,
  title,
  location,
  bedrooms,

  bathrooms,
  squareFeet,
  petPolicy,
  price,
  deposit,
  isAvailable = true,
  detailsUrl,
  bookingUrl,
}: PropertyCardProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative w-full shrink-0">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Property image ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    margin: "auto",
                  }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {isAvailable && (
          <div className="absolute top-4 left-4 bg-[#98D8BF] text-white px-3 py-1 rounded-md z-10">
            Available
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <a
            href={videoUrl}
            className="flex items-start space-x-4 no-underline group"
          >
            <div className="relative w-24 h-16">
              <img
                src={videoThumbnail || "/placeholder.svg"}
                alt="Video thumbnail"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-md group-hover:bg-black/40">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">LuxOasis Living</p>
              <h4 className="text-sm font-medium leading-tight">
                BRAND NEW ONE-BEDROOM CONDO @ORCHARDS
              </h4>
            </div>
          </a>
        </div>

        <h3 className="text-xl font-semibold mb-4">
          <a href={detailsUrl} className="hover:underline">
            {title}
          </a>
        </h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-muted-foreground">
              <Home className="w-4 h-4 mr-2" />
              <span className="text-sm">Apartment & Unit</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              <span>{bedrooms} bd</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{squareFeet} ft²</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{bathrooms} ba</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{petPolicy}</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Security deposit: ${deposit}
            </p>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">${price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 gap-4">
        <a href={bookingUrl} className="flex-1">
          <Button className="w-full">Book a viewing</Button>
        </a>
        <a href={detailsUrl} className="flex-1">
          <Button variant="outline" className="w-full">
            Details
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
