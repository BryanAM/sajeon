import React from "react";
import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";
import SajeonVocabCard from "@/components/SajeonVocabCard/SajeonVocabCard";

// TEMP MOCK DATA
import { dataMock } from "@/__mocks__/dataMock";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";


type SearchProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] }
}
export default async function Search({ params, searchParams }: SearchProps) {

  // pretend fetch to database
  const dataFetchResults = dataMock;
  console.log(searchParams);
  

  return (
    <main>
      <SajeonSearch
        formAction={formAction}
        inputValue={decodeURIComponent(params.slug)}
      />
      <section className="mt-4 max-w-xl m-auto">
        <h2 className="mb-4 text-2xl font-semibold">Results</h2>
        {dataFetchResults.slice(0, 10).map((data) => (
           <SajeonVocabCard key={data.ID} data={data} />
        ))}
        <SajeonPagination currentPage={searchParams} pages={Math.ceil(dataFetchResults.length / 10)}/>
      </section>
    </main>
  );
}
