import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Balancer from "react-wrap-balancer";

const ProductsList = () => {
  return (
    <section className="w-full px-2 text-left">
      <h2 className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
        Featured Products
      </h2>
      <Balancer className="mb-8 text-base sm:text-lg text-muted-foreground ">
        Explore products from around the world
      </Balancer>
      <div className="grid gap-3 grid-cols-gallery">
        {siteConfig.gallery.map(({ src, title, price }) => (
          <Card className="rounded-sm" key={crypto.randomUUID()}>
            <CardContent className="p-0 rounded-t-sm bg-muted dark:bg-zinc-100">
              <div className="flex items-center h-48 mx-auto aspect-square">
                <img
                  src={src}
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
