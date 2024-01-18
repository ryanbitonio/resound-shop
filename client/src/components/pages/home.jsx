import Balancer from "react-wrap-balancer";
import SiteHeader from "../layouts/site-header";
import { MainCarousel } from "../main-carousel";
import ProductsList from "../products-list";
import SiteFooter from "../layouts/site-footer";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <>
      <main className="px-4">
        <div className="mx-auto flex w-full flex-col items-center gap-20 pt-24 justify-between text-center max-w-[1120px]">
          <div className="space-y-4 text-center">
            <Balancer
              as="h1"
              className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            >
              The official shop of Resound’s merchandise
            </Balancer>
            <Balancer className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Celebrate your love for Resound with these exclusive collections
              <br />
              and make sure to secure your spot at the next event
            </Balancer>
          </div>
          <MainCarousel />
          <ProductsList>
            <div className="flex items-center justify-between pb-8 ">
              <div>
                <h2 className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured Products
                </h2>
                <Balancer className="text-base sm:text-lg text-muted-foreground ">
                  Explore products from around the world
                </Balancer>
              </div>

              <Button asChild variant="ghost" className="hidden sm:flex">
                <Link to="/products">
                  View all products
                  <ArrowRightIcon className="w-4 h-4 ml-2" aria-hidden="true" />
                  <span className="sr-only">View all products</span>
                </Link>
              </Button>
            </div>
          </ProductsList>
        </div>
      </main>
    </>
  );
};

export default Home;
