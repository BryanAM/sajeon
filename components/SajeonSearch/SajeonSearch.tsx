import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function SajeonSearch() {
  return (
    <form className="m-auto flex max-w-xl flex-col justify-center gap-2 text-center">
      <label
        htmlFor="sajeon-search"
        className="bg-gradient-to-t pb-3 from-neutral-900 to-neutral-700 bg-clip-text text-8xl font-extrabold text-transparent text-shadow"
      >
        Sajeon
      </label>
      <div className="flex items-center gap-2">
        <div className="flex grow rounded-md border border-input bg-background px-1 py-1 ring-offset-background focus-within:ring-ring focus-within:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-within:[&:has(input:focus)]:focus-within:ring-2 ">
          <Button className="mr-1 md:hidden">
            <MagnifyingGlassIcon height="16" width="16" />
          </Button>
          <span className="mr-1 hidden h-10 w-10 items-center justify-center md:flex">
            <MagnifyingGlassIcon height="16" width="16" />
          </span>
          <Input
            type="search"
            variant="naked"
            enterKeyHint="search"
            maxLength={200}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            name="sajeon-search"
            id="sajeon-search"
          />
        </div>
        <Button className="mr-1 hidden md:flex" size="lg">
          Search
        </Button>
      </div>
    </form>
  );
}

export default SajeonSearch;


// text-shadow: 5px -4px #FFF, 1px 1px #000, 4px -4px #000, 5px -5px #000, 6px -4px #000;