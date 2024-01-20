import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import CartSheet from "../ui/cart-sheet";
import Search from "../ui/search";
import { MainNav } from "./main-nav";
import MobileNav from "./mobile-nav";
import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <>
      <header
        className="
       sticky top-0 border-b-[1px] bg-white dark:bg-background px-4 z-50 "
      >
        <div className="flex items-center min-h-16 max-w-[1120px] mx-auto">
          <MainNav />
          <MobileNav />
          <div className="flex items-center justify-end flex-1 space-x-2">
            <Search />
            <CartSheet />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="relative rounded-full h-9 w-9"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Icons.dashboard className="w-4 h-4 mr-2" />
                    <span>Dashboard</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.creditCard className="w-4 h-4 mr-2" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.settings className="w-4 h-4 mr-2" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <Link to="/signin">
                  <DropdownMenuItem>
                    <Icons.logout className="w-4 h-4 mr-2" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
