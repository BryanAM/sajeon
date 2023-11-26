import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";
import React from "react";

export default function About() {
  return (
    <>
      <h1 className="text-shadow-inverted pb-3 text-7xl font-extrabold text-transparent md:text-9xl">
        Studying Korean made simple{" "}
        <SajeonTitle text="Sajeon" className="inline-block" />
      </h1>
      <p>Sajeon is a user centered Korean English diciontary built by people who love to study language. We are building a dictionary that we want to use.</p>
      <h2>Simple</h2><h2>Responsive</h2><h2>Accessible</h2>
    </>
  );
}
