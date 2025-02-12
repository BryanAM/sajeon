import React from "react";
import SajeonVocabCard from "@/components/SajeonVocabCard/SajeonVocabCard";
import { SajeonVocabCardType, SearchProps } from "../../../types/SajeonTypes";
import Word from "@/models/Word";
import dbConnect from "@/lib/mongodb";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";
import { notFound } from "next/navigation";
import { safeQuery, sortDocumentsByRelevance } from "@/lib/utils";
async function getData(cleanedQuery: string) {
  try {
    await dbConnect();
  } catch {
    throw Error("We couldn't connect to the database. Try again!");
  }

  try {
    // Limit query length to prevent abuse
    if (cleanedQuery.length > 50) {
      throw Error("Search query is too long.");
    }

    const koreanCharsRegex = /[\uAC00-\uD7A3]/;
    const tokens = cleanedQuery.split(/\s+/).filter(Boolean);

    /*
    each token will be search either in Korean or English 
    e.g. 평화 book => [평화, book] where 평화 => { word: 평화 } 
    {definitions: book} or { romaja: book}
     */
    const conditions = tokens.map((token) => {
      const tokenRegex = new RegExp(token, "i");
      return koreanCharsRegex.test(token)
        ? { word: tokenRegex }
        : { $or: [{ definitions: tokenRegex }, { romaja: tokenRegex }] };
    });

    /**
     * If we have a compound allow results from each token so
     * 평화 book will return restuls from either the first or second
     */
    const query = { $or: conditions };

    const words = await Word.find(query).limit(100).lean(); // Updated query
    return new Response(JSON.stringify(words), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw Error("We ran into an issue fetching your results. Try again!");
  }
}

export default async function Search({ params, searchParams }: SearchProps) {
  const decodedQuery = decodeURIComponent(params.slug || "").trim();
  const cleanedQuery: string = safeQuery(decodedQuery);

  const data = await getData(cleanedQuery);
  const words = await data.json();

  /**
   * Return not-found page if we don't have results
   */
  if (words.length < 1) {
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
          .map((data: SajeonVocabCardType, index: number) => (
            <SajeonVocabCard key={data.ID | index} data={data} />
          ))}

        {MIN_PAGINATION_RESULTS && (
          <SajeonPagination
            currentPage={searchParams}
            pages={Math.ceil(sortedResults.length / ITEMS_PER_PAGE)}
          />
        )}
      </section>
    </main>
  );
}
