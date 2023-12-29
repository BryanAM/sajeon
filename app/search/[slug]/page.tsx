import React from "react";
import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";

export default async function Search({ params }: { params: { slug: string } }) {
  return (
    <main>
      <SajeonSearch
        formAction={formAction}
        inputValue={decodeURIComponent(params.slug)}
      />
    </main>
  );
}
