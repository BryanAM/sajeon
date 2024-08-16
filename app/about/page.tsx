import Link from "next/link";
import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BuiltWithCards from "./built-with-cards";
import { korean_data } from "./korean_data";
import "./about.css";
import { teamData } from "./teamData";
import { TeamMemberType } from "@/types/SajeonTypes";
import TeamMember from "./team-member";

export const metadata: Metadata = {
  title: "About Sajeon - Easy and Intuitive Korean Dictionary",
  description:
    "About Sajeon Search - a sleek and intuitive online Korean and English Dictionary.",
  openGraph: {
    images: ["/api/og?description=about+sajeon+search"],
  },
};

export default function About() {
  return (
    <>
      <h1 className="mb-2 pb-3 text-7xl font-extrabold text-shadow-inverted md:text-9xl">
        Studying Korean made simple{" "}
        <span className="sajeon-branded-text">Sajeon</span>
      </h1>
      <p>
        Sajeon is a user centered Korean English dictionary built by people who
        love to study language. We are building a dictionary from a language
        learner&apos;s point of view, and one that you will love.
      </p>
      <h2 className="sajeon-branded-text mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl">
        Aim
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>User Experience</AccordionTrigger>
          <AccordionContent>
            We are building Sajeon to have an exceptional user experience. Not
            only are we building Sajeon to be responsive, adapting from mobile
            to desktop views, we aim to make our user journey easy to navigate,
            intuitive to use, and feature packed without cluttering our UI. You
            can find out more about{" "}
            <Link
              className={` ${buttonVariants({
                variant: "link",
                size: "bare",
              })}`}
              href="/how-to"
            >
              How To
            </Link>{" "}
            use Sajeon.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accessible</AccordionTrigger>
          <AccordionContent>
            Sajeon aims to make learning Korean accessible by adhereing to WACG
            standards. Sajeon and it&apos;s components are a composite of{" "}
            <Link
              className={` ${buttonVariants({
                variant: "link",
                size: "bare",
              })}`}
              href="https://www.radix-ui.com/primitives"
            >
              Radix
            </Link>
            ,{" "}
            <Link
              className={` ${buttonVariants({
                variant: "link",
                size: "bare",
              })}`}
              href="https://ui.shadcn.com"
            >
              shadcn&apos;s re-usable components
            </Link>{" "}
            and custom components.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Collaborative</AccordionTrigger>
          <AccordionContent>
            Behind the shiny UI lies our most difficult task - comprehensive &
            annotated data. As you may imagine, a dictionary annoted with parts
            of speech, accurate definitions, example sentences and so on is no
            small feat. We are working devising a way for interested parties to
            contribute to Sajeon.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Scalable</AccordionTrigger>
          <AccordionContent>
            Over time we aim to scale the scope of Sajeon to include new data
            and features to improve your Korean learning experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h2 className="sajeon-branded-text mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl">
        Meet The Team
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {teamData.map(({ key, ...teamData }: TeamMemberType) => (
          <TeamMember key={key} {...teamData} />
        ))}
      </div>
      <h2 className="sajeon-branded-text mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl">
        Built With
      </h2>
      <p>
        Sajeon was made possible thanks to the following tools and creators.
      </p>
      <BuiltWithCards />

      <h2 className="sajeon-branded-text mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl">
        Join Us
      </h2>
      <p>
        We are constantly looking to improving Sajeon, the data quality, and
        quantity. If you think you&apos;ll be able to assist in building out or
        improving the Korean / English langauage corpus, contact us with a short
        description on how you can help and your background with Korean.
      </p>
      <section className="mt-12 block truncate whitespace-nowrap rounded-sm bg-primary pb-4 pt-4">
        <div className="animate-loop">
          {korean_data.map((word) => (
            <p
              className="inline-block pl-2 pr-2 text-2xl font-bold text-background"
              key={word}
            >
              {word}
              <span className="ml-4">❀</span>
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
