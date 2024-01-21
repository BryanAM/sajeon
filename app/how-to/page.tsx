import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Sajeon - Easy and Intuitive Korean Dictionary",
  description:
    "Learn how to use Sajeon Search - a sleek and intuitive online Korean and English Dictionary.",
  openGraph: {
    images: ["/api/og?description=how+to+use+sajeon"],
  },
};

export default function HowTo() {
  return (
    <>
      <h1 className="pb-3 text-7xl font-extrabold text-shadow-inverted md:text-9xl">
        How to use <span className="sajeon-branded-text">Sajeon</span>
      </h1>

      <p>Get started on how to use Sajeon to search.</p>
    </>
  );
}
