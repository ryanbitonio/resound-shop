import Balancer from "react-wrap-balancer";
import SiteHeader from "../layouts/site-header";
import { MainCarousel } from "../main-carousel";
import ProductsList from "../products-list";

const Home = () => {
  return (
    <div className="px-4">
      <SiteHeader />
      <main className="mx-auto flex w-full flex-col items-center gap-20 pt-24 justify-between text-center max-w-[63.5rem]">
        <div className="text-center space-y-4 ">
          <Balancer
            as="h1"
            className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter"
          >
            The official shop of Resound’s merchandise
          </Balancer>
          <Balancer className="leading-normal text-muted-foreground sm:text-xl sm:leading-8 px-4">
            Celebrate your love for Resound with these exclusive products and
            make sure to secure your spot at the next event
          </Balancer>
        </div>
        <MainCarousel />
        <ProductsList />
      </main>
    </div>
  );
};

export default Home;
