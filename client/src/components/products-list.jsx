import { siteConfig } from "@/config/site";
import { Link } from "react-router-dom";
import Balancer from "react-wrap-balancer";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const ProductsList = ({ children }) => {
  return (
    <section className="w-full text-left">
      {children}
      <div className="grid gap-3 grid-cols-gallery">
        {siteConfig.gallery.map(({ src, title, price, alt }) => (
          <Card className="rounded-sm" key={crypto.randomUUID()}>
            <CardContent className="p-0 rounded-t-sm bg-muted dark:bg-zinc-100">
              <div className="flex items-center h-48 mx-auto aspect-square">
                <img
                  loading="lazy"
                  src={src}
                  alt={alt}
                  className="object-contain h-full mx-auto translate-y-2"
                />
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="flex flex-col items-start gap-4 px-2 pt-4 text-xs">
              <div className="space-y-0.5">
                <p className="text-base font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">₱{price}</p>
              </div>
              <Button size="sm" className="w-full">
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
