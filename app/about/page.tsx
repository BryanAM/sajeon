import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as Bryan from "../../assets/bryan-img.png";
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1 className="text-shadow-inverted pb-3 text-7xl font-extrabold text-transparent md:text-9xl">
        Studying Korean made simple{" "}
        <SajeonTitle text="Sajeon" className="inline-block" />
      </h1>
      <p>
        Sajeon is a user centered Korean English dictionary built by people who
        love to study language. We are building a dictionary from a language
        learner&apos;s point of view, and one that you will love.
      </p>
      <h2>
        {" "}
        <SajeonTitle
          text="Aim"
          className="mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl"
        />
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>User Experience (UX)</AccordionTrigger>
          <AccordionContent>
            We are building Sajeon to have an exceptional user experience. Not
            only are we building Sajeon to be responsive, adapting from mobile
            to desktop views, we aim to make our user journey easy to navigate,
            intuitive to use, and feature packed without cluttering our UI. You
            can find out more about{" "}
            <Link
              className={` ${buttonVariants({
                variant: "link", size: "bare",
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
                variant: "link", size: "bare",
              })}`}
              href="https://www.radix-ui.com/primitives"
            >
              Radix
            </Link>
            ,{" "}
            <Link
              className={` ${buttonVariants({
                variant: "link", size: "bare",
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
      <h2>
        {" "}
        <SajeonTitle
          text="Meet The Team"
          className="mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl"
        />
      </h2>
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <Card className="flex-1">
          <CardHeader>
            <Avatar>
              <AvatarImage src="/assets/bryan-img.png" alt="@shadcn" />
              <AvatarFallback>BA</AvatarFallback>
            </Avatar>
            <CardTitle>Bryan Aument</CardTitle>
            <CardDescription>Front End / Design</CardDescription>
          </CardHeader>
          <CardContent>
            <p>I build user focused web tools and applications. I&apos;m learning Korean and Japanese, enjoy travel, connecting with people, and a solid cup of coffee sauce.</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer & links</p>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <Avatar>
              <AvatarImage src="/assets/nathan-img.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle>Nathan Knight</CardTitle>
            <CardDescription>Backend / Dev Ops</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac. Leo in vitae turpis massa sed.</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer & links</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
