import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { Link } from "react-router-dom";
import { Icons } from "../icons";
import { Logo } from "../logo";

const accordionDefaultValue = ["item-1", "item-2"];

const MobileNav = () => {
  return (
    <div className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <Icons.stack />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="mb-4">
              <Logo height="16" width="16" className="text-black text-base" />
            </SheetTitle>
            <SheetDescription asChild></SheetDescription>
          </SheetHeader>
          <Accordion type="multiple" defaultValue={accordionDefaultValue}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Clothing</AccordionTrigger>
              <AccordionContent className="flex flex-col items-start gap-2">
                {siteConfig.clothing.map(({ title, href }) => (
                  <Link
                    className="text-muted-foreground"
                    to={href}
                    key={crypto.randomUUID()}
                  >
                    {title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accessories</AccordionTrigger>
              <AccordionContent className="flex flex-col items-start gap-2">
                {siteConfig.accessories.map(({ title, href }) => (
                  <Link
                    className="text-muted-foreground"
                    to={href}
                    key={crypto.randomUUID()}
                  >
                    {title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <div className="py-4">
              <Link to="/" className="text-sm font-medium hover:underline">
                Ticket
              </Link>
            </div>
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
