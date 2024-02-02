import { Icons } from "./icons";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Logo = React.forwardRef(
  ({ className, height = "24", width = "24", href = "/", ...props }, ref) => (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-2 static left-8 top-6  text-lg font-semibold tracking-tight text-white dark:text-foreground ",
        className
      )}
      ref={ref}
      {...props}
    >
      <Icons.logo height={height} width={width} />
      <p>Resound Shop</p>
    </Link>
  )
);
Logo.displayName = "Logo";

export { Logo };
