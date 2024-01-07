import React from "react";
import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";
import SajeonVocabCard from "@/components/SajeonVocabCard/SajeonVocabCard";

// TEMP MOCK DATA
import { dataMock } from "@/__mocks__/dataMock";
export default async function Search({ params }: { params: { slug: string } }) {
  return (
    <main>
      <SajeonSearch
        formAction={formAction}
        inputValue={decodeURIComponent(params.slug)}
      />
      <section className="mt-4 max-w-xl m-auto">
        <h2 className="mb-4 text-2xl font-semibold">Results</h2>
        <SajeonVocabCard data={dataMock[0]} />
        <SajeonVocabCard data={dataMock[1]} />
        <SajeonVocabCard data={dataMock[0]} />
        <SajeonVocabCard data={dataMock[0]} />
      </section>
    </main>
  );
}
