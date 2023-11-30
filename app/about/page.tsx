import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BuiltWithCards from "./built-with-cards";
import { korean_data } from "./korean_data";
import "./about.css";

export default function About() {
  return (
    <>
      <h1 className="pb-3 text-7xl font-extrabold text-transparent text-shadow-inverted md:text-9xl">
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
              <AvatarImage src="/assets/bryan-img.png" alt="@bryanam" />
              <AvatarFallback>BA</AvatarFallback>
            </Avatar>
            <CardTitle>Bryan Aument</CardTitle>
            <CardDescription>Front End / Design</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I build user focused web tools and applications. I&apos;m learning
              Korean and Japanese, enjoy travel, connecting with people, and a
              solid cup of coffee sauce.
            </p>
          </CardContent>
          <CardFooter>
            <ul className="flex flex-wrap">
              <li>
                <Link
                  className={` ${buttonVariants({
                    variant: "link",
                  })}`}
                  href="https://www.linkedin.com/in/bryanaument/"
                >
                  <LinkedInLogoIcon />
                  <span className="px-2">Linkedin</span>
                </Link>
              </li>
              <li>
                <Link
                  className={` ${buttonVariants({
                    variant: "link",
                  })}`}
                  href="https://github.com/BryanAM"
                >
                  <GitHubLogoIcon />
                  <span className="px-2">Github</span>
                </Link>
              </li>
              <li>
                <Link
                  className={` ${buttonVariants({
                    variant: "link",
                  })}`}
                  href="https://itsbryan.me"
                >
                  <span className="px-2">@itsbryan</span>
                </Link>
              </li>
            </ul>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <Avatar>
              <AvatarImage src="/assets/nathan-img.png" alt="@knightxthyme" />
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <CardTitle>Nathan Knight</CardTitle>
            <CardDescription>Backend / Dev Ops</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Hendrerit gravida rutrum quisque non tellus orci ac. Leo in vitae
              turpis massa sed.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <h2>
        {" "}
        <SajeonTitle
          text="Built With"
          className="mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl"
        />
      </h2>
      <p>
        Sajeon was made possible thanks to the following tools and creators.
      </p>
      <BuiltWithCards />

      <h2>
        {" "}
        <SajeonTitle
          text="Join Us"
          className="mt-12 text-6xl text-shadow md:text-6xl lg:text-6xl"
        />
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
