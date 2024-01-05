import SiteFooter from "../layouts/site-footer";
import SiteHeader from "../layouts/site-header";

import Balancer from "react-wrap-balancer";
import { MainCarousel } from "../main-carousel";
import ProductsList from "../products-list";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export default function Products() {
  return (
    <>
      <main className="px-4">
        <div className="mx-auto flex w-full flex-col items-center gap-20 pt-8 justify-between text-center max-w-[1120px]">
          <ProductsList>
            <div className="flex flex-col items-start justify-between">
              <div>
                <h2 className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
                  Products
                </h2>
                <Balancer className="text-base sm:text-lg text-muted-foreground ">
                  Buy products from our stores
                </Balancer>
              </div>
              <div className="pt-5 pb-6 space-x-2">
                <Button size="sm">Filter</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm">
                      Sort
                      <Icons.arrowDown className="ml-2 opacity-50 shrink-0" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Date: Old to new</DropdownMenuItem>
                    <DropdownMenuItem>Date: New to old</DropdownMenuItem>
                    <DropdownMenuItem>Price: Low to high</DropdownMenuItem>
                    <DropdownMenuItem>Price: High to low</DropdownMenuItem>
                    <DropdownMenuItem>Alphabetical: A to Z</DropdownMenuItem>
                    <DropdownMenuItem>Alphabetical: Z to A</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </ProductsList>
        </div>
      </main>
    </>
  );
}
