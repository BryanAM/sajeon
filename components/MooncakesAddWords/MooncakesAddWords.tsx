"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Word from "@/models/Word";
import dbConnect from "@/lib/mongodb";

async function getData(value: string) {
  await dbConnect();

  try {
    // Just a basic search of the definitions field for now
    const query = { definitions: value };

    const words = await Word.find(query).limit(100).lean(); // Updated query
    return new Response(JSON.stringify(words), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: (error as any).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}



export default function MooncakesAddWords() {
  const [searchValue, setSearchValue] = useState("");
  const [words, setWords] = useState();

  function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(searchValue);
      // await the json data
      const results = await data.json();
      setWords(results);
    };

   debounce(() => fetchData());
  }, [searchValue]);

  const handleSubmit = () => {};

  return (
    <section>
      <h3 className="my-4 text-center text-xl font-semibold md:text-4xl lg:text-3xl">
        Search Sajeon Database
      </h3>
      <search>
        <form
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
                role="searchbox"
                placeholder="Start typing any word"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
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
    </section>
  );
}
