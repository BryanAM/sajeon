import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MagnifyingGlassIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";

function SajeonSearch() {
  return (
    <form className="flex flex-row items-end justify-center gap-2">
      <label className="flex max-w-md grow flex-col gap-2 text-center">
        Sajeon
        <Button className="md:hidden">
          <MagnifyingGlassIcon height="12" width="12" />
        </Button>
        <MagnifyingGlassIcon
          className="hidden md:flex"
          height="16"
          width="16"
        />
        <Input
          type="search"
          enterKeyHint="search"
          maxLength={200}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          size={3}
        />
      </label>
      <Button className="hidden md:block">Sajeon Search</Button>
    </form>
  );
}

export default SajeonSearch;
