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
export default async function Search({ params, searchParams }: SearchProps) {
  // pretend fetch to database
  const dataFetchResults = dataMock;
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
