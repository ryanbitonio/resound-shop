import Balancer from "react-wrap-balancer";
import SiteHeader from "../layouts/site-header";
import { MainCarousel } from "../main-carousel";
import ProductsList from "../products-list";
import SiteFooter from "../layouts/site-footer";

const Home = () => {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full flex-col items-center gap-14 pt-24 justify-between text-center max-w-[1136px]  ">
        <div className="space-y-4 text-center ">
          <Balancer
            as="h1"
            className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            The official shop of Resound’s merchandise
          </Balancer>
          <Balancer className="px-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Celebrate your love for Resound with these exclusive collections and
            make sure to secure your spot at the next event
          </Balancer>
        </div>
        <MainCarousel />
        <ProductsList />
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
