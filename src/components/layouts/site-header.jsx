import CartSheet from "../ui/cart-sheet";
import { Logo } from "../ui/logo";
import Search from "../ui/search";
import { Separator } from "../ui/separator";
import { MainNav } from "./main-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SiteHeader = () => {
  return (
    <>
      <header className="flex items-center justify-center gap-80 min-h-16">
        <MainNav />
        <div className="space-x-2 flex items-center">
          <Search />
          <CartSheet />
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <Separator />
    </>
  );
};

export default SiteHeader;
