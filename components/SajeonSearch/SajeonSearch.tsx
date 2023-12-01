import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";

function SajeonSearch() {
  return (
    <search>
      <form className="m-auto flex max-w-xl flex-col justify-center gap-2 text-center">
        <label htmlFor="sajeon-search">
          <SajeonTitle text="Sajeon" />
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
    </search>
  );
}

export default SajeonSearch;
