import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className={cn("pt-10")}>
      <h2 className={cn("pb-3 text-2xl font-extrabold text-shadow-inverted md:text-4xl ")}>
        Oops no matches were found.
        <br />
        Try a new search or use explore top searches.
      </h2>

      <h3 className={cn("my-4 text-xl")}>Top Words</h3>

      <Link
        className={cn(buttonVariants({ variant: "outline" }), "text-2xl p-10 m-2")}
        href="/search/food"
      >
        food
      </Link>

      <Link
        className={cn(buttonVariants({ variant: "outline" }), "text-2xl p-10 m-2")}
        href="/search/good"
      >
        good
      </Link>


      <Link
        className={cn(buttonVariants({ variant: "outline" }), "text-2xl p-10 m-2")}
        href="/search/cool"
      >
        cool
      </Link>


      <Link
        className={cn(buttonVariants({ variant: "outline" }), "text-2xl p-10 m-2")}
        href="/search/fun"
      >
        fun
      </Link>

      <Link
        className={cn(buttonVariants({ variant: "outline" }), "text-2xl p-10 m-2")}
        href="/search/rice"
      >
        rice
      </Link>
    </main>
  );
}
