import React from "react";
import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";
import SajeonVocabCard from "@/components/SajeonVocabCard/SajeonVocabCard";

// TEMP MOCK DATA
import { dataMock } from "@/__mocks__/dataMock";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";

type SearchProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] };
};


async function getData(params) {
  console.log('search Params', params.slug);
  const res = await fetch(`${process.env.BASE_URL}/api/words`, {
    method: 'GET', // Assuming the endpoint is a GET request
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Search({ params, searchParams }: SearchProps) {
  // pretend fetch to database
  const dataFetchResults = await getData(params);

  const ITEMS_PER_PAGE = 10;
  const MIN_PAGINATION_RESULTS = dataFetchResults.length >  ITEMS_PER_PAGE;
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
      <SajeonSearch
        formAction={formAction}
        inputValue={decodeURIComponent(params.slug)}
      />
      <section className="m-auto mt-4 max-w-xl">
        <h2 className="mb-4 text-2xl font-semibold">Results</h2>
        {dataFetchResults
          .slice(
            getOffset() * ITEMS_PER_PAGE,
            getOffset() * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
          )
          .map((data) => (
            <SajeonVocabCard key={data.ID} data={data} />
          ))}

        {MIN_PAGINATION_RESULTS  && (
          <SajeonPagination
            currentPage={searchParams}
            pages={Math.ceil(dataFetchResults.length / ITEMS_PER_PAGE)}
          />
        )}
      </section>
    </main>
  );
}
