import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1 className="text-shadow-inverted pb-3 text-7xl font-extrabold text-transparent md:text-9xl">
        Studying Korean made simple{" "}
        <SajeonTitle text="Sajeon" className="inline-block" />
      </h1>
      <p>
        Sajeon is a user centered Korean English diciontary built by people who
        love to study language. We are building a dictionary that we want to
        use.
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>User Experience (UX)</AccordionTrigger>
          <AccordionContent>
            We are building Sajeon to have an exceptional user experience. Not only are we building Sajeon to be responsive, adapting from mobile to desktop views, we aim to make our user journey easy to navigate, intuitive to use, and feature packed without cluttering our UI. You can find out more about <Link className={   ` ${buttonVariants({ variant: "link" })} px-0 py-0 pt-0 pb-0 h-auto`  } href="/how-to">How To</Link> use Sajeon.  
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
