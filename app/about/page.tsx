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
      <h2> <SajeonTitle text="Aim" className="text-shadow mt-10 text-6xl md:text-6xl" /></h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>User Experience (UX)</AccordionTrigger>
          <AccordionContent>
            We are building Sajeon to have an exceptional user experience. Not only are we building Sajeon to be responsive, adapting from mobile to desktop views, we aim to make our user journey easy to navigate, intuitive to use, and feature packed without cluttering our UI. You can find out more about <Link className={   ` ${buttonVariants({ variant: "link" })} px-0 py-0 pt-0 pb-0 h-auto`  } href="/how-to">How To</Link> use Sajeon.  
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accessibility</AccordionTrigger>
          <AccordionContent>
            Sajeon aims to make learning Korean accessible by adhereing to WACG standards. Sajeon and it's components are a composite of <Link className={   ` ${buttonVariants({ variant: "link" })} px-0 py-0 pt-0 pb-0 h-auto`  } href="https://www.radix-ui.com/primitives">Radix</Link>, <Link className={   ` ${buttonVariants({ variant: "link" })} px-0 py-0 pt-0 pb-0 h-auto`  } href="https://ui.shadcn.com">shadcn's re-usable components</Link> and custom components. 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
