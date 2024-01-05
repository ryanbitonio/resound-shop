import shirtDisplay from "../../assets/featured-products/shirt.webp";
import { Breadcrumbs } from "../breadcrumb";
import { ProductItemForm } from "../forms/product-item-form";
import { Icons } from "../icons";
import ThumbnailCarousel from "../thumbnail-carousel";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export default function ProductItem() {
  return (
    <main className="px-4">
      <div className="mx-auto flex w-full flex-col items-start gap-10 pt-12 max-w-[1120px]">
        <Breadcrumbs
          segments={[
            {
              title: "Products",
              href: "/products",
            },
            {
              title: "Shirt",
              href: "/products",
            },
            {
              title: "Sovereign Shirt",
              href: "/products",
            },
          ]}
        />
        <div className="flex flex-col w-full gap-20 md:gap-10 lg:gap-20 md:flex-row">
          <div className="flex flex-col gap-4 ">
            <Card className="rounded-sm shadow-sm" key={crypto.randomUUID()}>
              <CardContent className="p-0 rounded-t-sm bg-muted dark:bg-zinc-100">
                <img
                  src={shirtDisplay}
                  width={496}
                  height={507}
                  className="object-cover w-full md:w-[496px]"
                />
              </CardContent>
            </Card>
            <ThumbnailCarousel src={shirtDisplay} className="self-center" />
          </div>
          <div className="flex-1 space-y-4 min-w-0 md:min-w-[414px]">
            <div>
              <h2 className="mb-1 text-3xl font-bold tracking-tight sm:text-3xl">
                Sovereign Shirt
              </h2>
              <p className="text-base sm:text-base text-muted-foreground">
                ₱500
              </p>
            </div>
            <Separator />
            <div className="space-y-4">
              <p className="text-base sm:text-base text-muted-foreground ">
                In stock
              </p>
              {Array.from({ length: 5 }).map((_, index) => (
                <Icons.star
                  key={crypto.randomUUID()}
                  className="inline-block"
                />
              ))}
              <ProductItemForm />
            </div>
            <Separator />
            <p className="text-base font-medium sm:text-base">Description</p>
            <p className="text-base text-justify sm:text-base text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
