"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DictionaryEntryType } from "@/types/SajeonTypes";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const columnHelper = createColumnHelper<DictionaryEntryType>();

export const columns: ColumnDef<DictionaryEntryType>[] = [
  columnHelper.display({
    id: "word",
    header: "Korean",
  }),
  columnHelper.display({
    id: "romaja",
    header: "Romaja",
  }),
  columnHelper.display({
    id: "hanja",
    header: "Hanja",
  }),
  columnHelper.display({
    id: "pos",
    header: "Part of Speech",
  }),
  columnHelper.display({
    id: "sentences",
    header: "Sentences",
  }),
  columnHelper.display({
    id: "topik_level",
    header: "Topik Level",
  }),
  columnHelper.display({
    id: "frequency_score",
    header: "Frequency Score",
  }),
  columnHelper.display({
    id: "validation",
    header: "Validation",
  }),
];
