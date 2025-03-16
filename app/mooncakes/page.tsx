import dbConnect from "@/lib/mongodb";
import Word from "@/models/Word";
import { DictionaryEntryType, SearchProps } from "@/types/SajeonTypes";
import MooncakesDataCard from "@/components/MooncakesDataCard/MooncakesDataCard";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "@radix-ui/react-icons";
import { Trash2Icon } from "lucide-react";

/**
 * TEMPORAY, to be updated when we refacor and re-do this page
 * Also, note we have a words api route that does something simialr we might want to remove
 * or update
 *
 */
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

export default async function MoonCakes({ searchParams }: SearchProps) {
  const data = await getData();
  const words = await data.json();
  const { page } = await searchParams;
  const dataFetchResults = words;

  const ITEMS_PER_PAGE = 24;
  const MIN_PAGINATION_RESULTS = dataFetchResults.length > ITEMS_PER_PAGE;
  function getOffset(): number {
    // not on the first page
    if (page) {
      return Number(page) - 1;
    } else {
      // we are on the first page ie no paramater
      return 0;
    }
  }

  return (
    <main className="flex flex-col">
      <div className="grid grid-cols-4">
        <h1 className="col-span-4 mb-4 text-4xl font-extrabold text-shadow-inverted md:col-span-4">
          Contributing to Sajeon
        </h1>
        <h2 className="text-md col-span-4 mb-6 text-muted-foreground md:col-span-3 md:text-lg">
          Welcome to the mooncakes editor. Here, you can search, add, edit, and
          manage words in our Korean-English dictionary, helping to refine and
          expand our database. Your contributions make this resource more
          accurate and valuable for language learners and enthusiasts alike.
        </h2>
      </div>

      <ol className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {dataFetchResults
          .slice(
            getOffset() * ITEMS_PER_PAGE,
            getOffset() * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
          )
          .map((word: DictionaryEntryType) => (
            <MooncakesDataCard key={word._id} word={word} />
          ))}
      </ol>
      {MIN_PAGINATION_RESULTS && (
        <SajeonPagination
          currentPage={page ? Number(page) : 1}
          totalPages={Math.ceil(dataFetchResults.length / ITEMS_PER_PAGE)}
        />
      )}
    </main>
  );
}
