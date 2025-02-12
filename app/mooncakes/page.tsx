import dbConnect from "@/lib/mongodb";
import Word from "@/models/Word";
import { DictionaryEntryType } from "@/types/SajeonTypes";
import MooncakesDataCard from "@/components/MooncakesDataCard/MooncakesDataCard";
import SajeonPagination from "@/components/SajeonPagination/SajeonPagination";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "@radix-ui/react-icons";
import { Trash2Icon } from "lucide-react";

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
      // we are on the first page ie no paramater
      return 0;
    }
  }

  return (
    <main className="flex flex-col">
      <h1 className="sajeon-branded-text  mb-4 text-center text-5xl md:text-8xl lg:text-9xl">
        Sajeon Word Wizardry 🪄
      </h1>
      <h2 className="mb-6 text-2xl font-extrabold text-shadow-inverted md:text-5xl lg:text-4xl">
        Update or modify existing words and details in the Sajeon database.
      </h2>
      <h3 className="mb-6 text-xl font-extrabold text-shadow-inverted md:text-5xl lg:text-2xl">
        Directions
      </h3>
      <p className="mb-4">
        Each card below is a single entry in the sajeon database. Each entry
        contains the <i>korean word</i>, <i>romaja</i>, <i>part of speech</i>{" "}
        (POS), <i>hanaja</i>, any <i>definitions</i>, and a set of{" "}
        <i>korean and english</i> sentences.
      </p>
      <ol className="mb-6 space-y-3">
        <li className="mx-6 list-decimal">
          To modify an entry select the button to open the edit dialogue. <br />
          <Button className="!opacity-100" disabled>
            <Pencil1Icon className="mr-2 h-4 w-4" />
            Edit Data
          </Button>
        </li>
        <li className="mx-6 list-decimal">
          Once the dialogue is opened, you can modify any of the fields.
        </li>
        <li className="mx-6 list-decimal">
          You can add definitions or sentences using the buttons below each
          section. <br />
          <Button
            tabIndex={-1}
            className="pointer-events-none"
            type="button"
            variant="secondary"
          >
            <PlusIcon height="16" width="16" />
            <span className="ml-1">Add ...</span>
          </Button>
        </li>
        <li className="mx-6 list-decimal">
          To delete use the trash can icon button. <br />
          <Button
            className="pointer-events-none"
            type="button"
            size="smIcon"
            variant="destructive"
            tabIndex={-1}
          >
            <Trash2Icon />
          </Button>
        </li>
      </ol>
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
          currentPage={searchParams}
          pages={Math.ceil(dataFetchResults.length / ITEMS_PER_PAGE)}
        />
      )}
    </main>
  );
}
