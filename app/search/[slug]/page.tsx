import React from "react";
import SajeonVocabCard from "@/components/SajeonVocabCard/SajeonVocabCard";
import { SearchProps, DictionaryEntryType } from "../../../types/SajeonTypes";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";
import { notFound } from "next/navigation";
import { safeQuery, sortDocumentsByRelevance } from "@/lib/utils";
import { getData } from "@/queries/searchQueries";

export default async function Search({ params, searchParams }: SearchProps) {
  const decodedQuery = decodeURIComponent(params.slug || "").trim();
  const cleanedQuery: string = safeQuery(decodedQuery);

  const data = await getData(cleanedQuery);
  const words: DictionaryEntryType[] = await data.json();

  /**
   * Return not-found page if we don't have results
   */
  if (words.length === 0) {
    notFound();
  }

  const sortedResults = sortDocumentsByRelevance(words, cleanedQuery);

  const ITEMS_PER_PAGE = 10;
  const MIN_PAGINATION_RESULTS = sortedResults.length > ITEMS_PER_PAGE;
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
        {sortedResults
          .slice(
            getOffset() * ITEMS_PER_PAGE,
            getOffset() * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
          )
          .map((data: DictionaryEntryType, index: number) => (
            <SajeonVocabCard key={data._id || index} data={data} />
          ))}

        {MIN_PAGINATION_RESULTS && (
          <SajeonPagination
            currentPage={searchParams}
            totalPages={Math.ceil(sortedResults.length / ITEMS_PER_PAGE)}
          />
        )}
      </section>
    </main>
  );
}
