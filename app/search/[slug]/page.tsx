import React from "react";

import SajeonVocabCard from "@/components/SajeonVocabCard/SajeonVocabCard";
import { SajeonVocabCardType } from "../../../types/SajeonTypes";
import { dataMock } from "@/__mocks__/dataMock";
import Word from "@/models/Word";
import dbConnect from "@/lib/mongodb";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";
import { notFound } from 'next/navigation'

type SearchProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] };
};

async function getData(params: SearchProps["params"]) {
  await dbConnect();

  try {
    // Just a basic search of the definitions field for now
    const query = { definitions: params.slug };

    const words = await Word.find(query).limit(10).lean(); // Updated query
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

export default async function Search({ params, searchParams }: SearchProps) {
  // query the database

  const data = await getData(params);

  // await the json data
  const words = await data.json();

  const dataFetchResults = words;

  /**
   * Return not-found page if we don't have results
   */
  if(dataFetchResults.length < 1) {
    notFound();
  }
  // pretend fetch to database
  // const dataFetchResults = dataMock;

  const ITEMS_PER_PAGE = 10;
  const MIN_PAGINATION_RESULTS = dataFetchResults.length > ITEMS_PER_PAGE;
  function getOffset(): number {
    // not on the first page
    if (Object.hasOwn(searchParams, "page")) {
      return Number(searchParams.page) - 1;
    } else {
      // we are on the first page i.e. no paramater
      return 0;
    }
  }

  return (
    <main>
      <section className="m-auto mt-4 max-w-xl">
        <h2 className="mb-4 text-2xl font-semibold">Results</h2>
        {dataFetchResults
          .slice(
            getOffset() * ITEMS_PER_PAGE,
            getOffset() * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
          )
          .map((data: SajeonVocabCardType, index: number) => (
            <SajeonVocabCard key={data.ID | index} data={data} />
          ))}

        {MIN_PAGINATION_RESULTS && (
          <SajeonPagination
            currentPage={searchParams}
            pages={Math.ceil(dataFetchResults.length / ITEMS_PER_PAGE)}
          />
        )}
      </section>
    </main>
  );
}
