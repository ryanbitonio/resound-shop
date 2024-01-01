import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { siteConfig } from "@/config/site";
import Autoplay from "embla-carousel-autoplay";

const images = siteConfig.carousel.map(image => image);
export function MainCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
            <img
              fetchpriority="high"
              key={crypto.randomUUID()}
              src={images[index].src}
              alt={images[index].alt}
              className="object-cover aspect-video"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
