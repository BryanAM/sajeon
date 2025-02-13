"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { FormActionType } from "@/types/SajeonTypes";

function SajeonSearch({
  formAction,
  inputValue,
}: {
  formAction: FormActionType;
  inputValue?: string;
}) {
  const [searchValue, setSearchValue] = useState<string>(
    inputValue ? inputValue : "",
  );
  const router = useRouter();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = () => {
    router.push(`/search/${encodeURIComponent(searchValue.trim())}`);
  };

  return (
    <search>
      <form
        action={formAction}
        onSubmit={handleSubmit}
        className="m-auto flex max-w-xl flex-col justify-center gap-2 text-center"
      >
        <label className="sr-only" htmlFor="search">
          sajeon search
        </label>
        <div className="flex items-center gap-2">
          <div className="flex grow rounded-md border border-input bg-background px-1 py-1 ring-offset-background focus-within:ring-ring focus-within:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-within:[&:has(input:focus)]:focus-within:ring-2 ">
            <Button
              className="mr-1 md:hidden"
              type="submit"
              aria-label="search"
              data-testid="search"
            >
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
              name="search"
              id="search"
              role="searchbox"
              placeholder="Start typing any word"
              value={searchValue}
              onChange={(event) => onChange(event)}
            />
          </div>
          <Button
            className="mr-1 hidden md:flex"
            size="lg"
            type="submit"
            data-testid="search-desktop"
          >
            Search
          </Button>
        </div>
      </form>
    </search>
  );
}

export default SajeonSearch;
