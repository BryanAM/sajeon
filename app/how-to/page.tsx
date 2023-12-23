import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";
import React from "react";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Korean English Dictionary Search",
  description: "Search for Korean and English words online with Sajeon, a sleek, responsive, and beautiful dictionary.",
  openGraph: {
    images: ['/api/og'],
  },

};

export default function HowTo() {
  return (
    <>
      <h1 className="text-shadow-inverted pb-3 text-7xl font-extrabold text-transparent md:text-9xl">
        How to use{" "}
        <SajeonTitle text="Sajeon" className="inline-block" />
      </h1>

      <p>Get started on how to use Sajeon to search.</p>
    </>
  );
}
