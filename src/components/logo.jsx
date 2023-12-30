import { Icons } from "./icons";

import * as React from "react";

import { cn } from "@/lib/utils";

const Logo = React.forwardRef(
  ({ className, height = "24", width = "24", ...props }, ref) => (
    <div
      className={cn(
        "flex items-center gap-2 static left-8 top-6  text-lg font-semibold tracking-tight text-white ",
        className
      )}
      ref={ref}
      {...props}
    >
      <Icons.logo height={height} width={width} />
      <p>Resound Shop</p>
    </div>
  )
);
Logo.displayName = "Logo";

export { Logo };
