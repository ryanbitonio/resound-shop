import * as React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import { cn, truncate } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Breadcrumbs({
  segments,
  separator,
  truncationLength = 0,
  className,
  ...props
}) {
  const SeparatorIcon = separator ?? ChevronRightIcon;

  return (
    <nav
      aria-label="breadcrumbs"
      className={cn(
        "flex w-full items-center overflow-auto text-sm font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {segments.map((segment, index) => {
        const isLastSegment = index === segments.length - 1;

        return (
          <React.Fragment key={crypto.randomUUID()}>
            <Link
              aria-current={isLastSegment ? "page" : undefined}
              to={segment.href}
              className={cn(
                "truncate transition-colors hover:text-foreground",
                isLastSegment ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {truncationLength > 0 && segment.title
                ? truncate(segment.title, truncationLength)
                : segment.title}
            </Link>
            {!isLastSegment && (
              <SeparatorIcon className="w-4 h-4 mx-2" aria-hidden="true" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
