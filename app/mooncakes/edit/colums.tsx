"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DictionaryEntryType } from "@/types/SajeonTypes";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const columnHelper = createColumnHelper<DictionaryEntryType>();

export const columns: ColumnDef<DictionaryEntryType>[] = [
  {
    accessorKey: "word",
    header: "Korean",
  },
  {
    accessorKey: "romaja",
    header: "Romaja",
  },
  {
    accessorKey: "hanja",
    header: "Hanja",
  },
  {
    accessorKey: "pos",
    header: "Part of Speech",
  },
  {
    accessorKey: "definitions",
    header: "Definitions",
  },
  {
    accessorKey: "sentences",
    header: "Sentences",
  },
  {
    accessorKey: "explanation",
    header: "explanation",
  },
];
