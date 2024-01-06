import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function ThumbnailCarousel({ src, className }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex items-center justify-center w-full gap-2 ">
      <Carousel
        ref={emblaRef}
        opts={{
          align: "start",
          loop: true,
        }}
        className={cn("w-full max-w-md flex items-center ", className)}
      >
        <CarouselPrevious className="static flex-shrink-0 mr-4 rounded-none" />
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Card className="rounded-none bg-zinc-300">
                <img
                  key={crypto.randomUUID()}
                  src={src}
                  className="object-cover translate-y-1 mix-blend-multiply"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="static flex-shrink-0 ml-4 translate-y-0 rounded-none" />
      </Carousel>
    </div>
  );
}
