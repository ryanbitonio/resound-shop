import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { isMacOs } from "@/lib/utils";

const Search = () => {
  return (
    <Button
      variant="outline"
      className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
      onClick={() => setOpen(true)}
    >
      <MagnifyingGlassIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
      <span className="hidden xl:inline-flex">Search products...</span>
      <span className="sr-only">Search products</span>
      <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
        <abbr
          title={isMacOs() ? "Command" : "Control"}
          className="no-underline"
        >
          {isMacOs() ? "⌘" : "Ctrl"}
        </abbr>
        K
      </kbd>
    </Button>
  );
};

export default Search;
