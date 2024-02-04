import dbConnect from "@/lib/mongodb";
import Word from "@/models/Word";
import { SajeonDataModelType } from "@/types/SajeonTypes";
import MooncakesDataCard from "@/components/MooncakesDataCard/MooncakesDataCard";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";
import DirectionsDialogue from "./DirectionsDialogue";


async function getData() {
  await dbConnect();
  try {
    const words = await Word.find({}).limit(1000).lean(); // Updated query
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

type SearchProps = {
  searchParams: { [key: string]: string | string[] };
};

export default async function MoonCakes({ searchParams }: SearchProps) {
  const data = await getData();
  const words = await data.json();
  const dataFetchResults = words;

  const ITEMS_PER_PAGE = 24;
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
    <main className="flex flex-col">
      <h1 className="sajeon-branded-text  mb-4 text-center text-5xl md:text-8xl lg:text-9xl">
        Sajeon Editor [mooncakes]
      </h1>
      <h2 className="mb-6 text-2xl font-extrabold text-shadow-inverted md:text-5xl lg:text-4xl">
        Update, modify, add & delete entries and details in the Sajeon database. <DirectionsDialogue />
      </h2>
     
      <ol className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {dataFetchResults
          .slice(
            getOffset() * ITEMS_PER_PAGE,
            getOffset() * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
          )
          .map((word: SajeonDataModelType) => (
            <MooncakesDataCard key={word._id} word={word} />
          ))}
      </ol>
      {MIN_PAGINATION_RESULTS && (
        <SajeonPagination
          currentPage={searchParams}
          pages={Math.ceil(dataFetchResults.length / ITEMS_PER_PAGE)}
        />
      )}
    </main>
  );
}
