"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { DictionaryEntryType } from "@/types/SajeonTypes";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const columnHelper = createColumnHelper<DictionaryEntryType>();

export const columns = [
  columnHelper.accessor("word", {
    header: "Korean",
    cell: (info) => (
      <span style={{ textWrap: "nowrap" }}>{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("romaja", { header: "Romaja" }),
  columnHelper.accessor("hanja", { header: "Hanja" }),
  columnHelper.accessor("pos", { header: "Part of Speech" }),
  columnHelper.accessor("definitions", {
    header: "Definitions",
    cell: (info) => {
      const defs = info.getValue();
      return (
        <span className="line-clamp-2 overflow-hidden text-ellipsis">
          {defs.join(", ")}
        </span>
      );
    },
  }),
  columnHelper.accessor("sentences", {
    header: "Sentences",
    cell: (info) => {
      const sentences = info.getValue();
      return (
        <div className="relative max-h-[6rem] overflow-hidden overflow-ellipsis">
          {sentences.map((sentence, i) => (
            <span key={i}>
              <span className="block">{sentence.kr}</span>
              <span className="block text-sm text-gray-500">{sentence.en}</span>
            </span>
          ))}
        </div>
      );
    },
  }),
  columnHelper.accessor("explanation", {
    header: "Explanation",
    cell: (info) => (
      <span className="line-clamp-2 overflow-hidden text-ellipsis">
        {info.getValue()}
      </span>
    ),
  }),
];
