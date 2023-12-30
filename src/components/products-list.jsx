import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Balancer from "react-wrap-balancer";

const ProductsList = () => {
  return (
    <section className="text-left w-full">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
        Featured Products
      </h2>
      <Balancer className="sm:text-lg  text-base text-muted-foreground mb-8 ">
        Explore products from around the world
      </Balancer>
      <div className="grid grid-cols-gallery gap-3">
        {siteConfig.gallery.map(({ src, title, price }) => (
          <Card className="rounded-sm" key={crypto.randomUUID()}>
            <CardContent className="p-0 bg-muted rounded-t-sm">
              <div className="flex items-center h-48 mx-auto aspect-square">
                <img
                  src={src}
                  className="h-full mx-auto object-contain translate-y-2"
                />
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="flex flex-col items-start text-xs gap-4 pt-4 px-4">
              <div className="space-y-0.5">
                <p className="font-semibold text-base">{title}</p>
                <p className="text-muted-foreground text-sm">₱{price}</p>
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
