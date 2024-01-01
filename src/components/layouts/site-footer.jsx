import { siteConfig } from "@/config/site";
import { JoinNewsletterForm } from "../forms/join-newsletter-form";
import { Logo } from "../logo";
import { ModeToggle } from "./mode-toggle";

export default function SiteFooter() {
  return (
    <>
      <footer className="border-t-[1px] px-4 py-8 mt-24 ">
        <div className="grid max-w-[1120px]  mx-auto">
          <div className="flex flex-col gap-10 flex-between">
            <section className="flex flex-col justify-between gap-10 md:flex-row">
              <div>
                <Logo height="16" width="16" className="text-base text-black" />
              </div>
              <div className="flex gap-24 sm:gap-48 md:gap-20 lg:gap-52">
                {siteConfig.footerNav.map(item => (
                  <div key={item.title} className="space-y-3">
                    <h3 className="text-base font-medium">{item.title}</h3>
                    <ul className="space-y-2.5">
                      {item.items.map(link => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            target={link?.external ? "_blank" : undefined}
                            rel={link?.external ? "noreferrer" : undefined}
                            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                          >
                            {link.title}
                            <span className="sr-only">{link.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-medium ">
                  Subscribe to our newsletter
                </h4>
                <JoinNewsletterForm />
              </div>
            </section>
            <section className="flex items-center justify-between w-full">
              <p className="text-sm text-muted-foreground dark:text-foreground">
                © 2024, MSJ Resound
              </p>
              <ModeToggle />
            </section>
          </div>
        </div>
      </footer>
    </>
  );
}
