import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function ThumbnailCarousel({ src, className }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="mr-0.5 aspect-square h-7 w-7 rounded-none sm:mr-2 sm:h-8 sm:w-8"
      >
        <ChevronLeftIcon className="w-3 h-3 sm:h-4 sm:w-4" aria-hidden="true" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className={cn("w-full max-w-sm md:max-w-xs", className)}
      >
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
      </Carousel>
      <Button
        variant="outline"
        size="icon"
        className="ml-0.5 aspect-square h-7 w-7 rounded-none sm:ml-2 sm:h-8 sm:w-8"
      >
        <ChevronRightIcon
          className="w-3 h-3 sm:h-4 sm:w-4"
          aria-hidden="true"
        />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
}
