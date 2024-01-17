'use client';

import React, { useState }from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";

function SajeonSearch({formAction, inputValue}: any) {
  const [searchValue, setSearchValue] = useState(inputValue? inputValue : '');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    setSearchValue(event.target.value);
  }

  const getSearchResults = async () => {
    try {
      const response = await fetch('/api/words', {
        method: 'GET', // Assuming the endpoint is a GET request
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('API call failed');
      }

      const data = await response.json();
      console.log(data); // Handle the response data, e.g., display the words
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };


  return (
    <search>
      <form
        action={formAction}
        className="m-auto flex max-w-xl flex-col justify-center gap-2 text-center"
      >
        <label htmlFor="search">
          <SajeonTitle text="Sajeon" />
        </label>
        <div className="flex items-center gap-2">
          <div className="flex grow rounded-md border border-input bg-background px-1 py-1 ring-offset-background focus-within:ring-ring focus-within:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-within:[&:has(input:focus)]:focus-within:ring-2 ">
            <Button
              className="mr-1 md:hidden"
              type="submit"
              aria-label="search"
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
              value={searchValue}
              onChange={(event) => onChange(event)}
            />
          </div>
          <Button onClick={getSearchResults} className="mr-1 hidden md:flex" size="lg" type="submit">
            Search
          </Button>
        </div>
      </form>
    </search>
  );
}

export default SajeonSearch;
