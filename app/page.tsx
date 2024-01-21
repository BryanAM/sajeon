import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";
import { formAction } from "@/app/actions";

export default function Home() {
  return (
    <main>
      <h1 className="sajeon-branded-text text-center mb-4">Sajeon</h1>
      <SajeonSearch formAction={formAction}/>
      <h2 className="mb-2 mt-8 pb-3 text-4xl font-extrabold text-shadow-inverted md:text-5xl lg:text-6xl">A simple and easy to use online Korean English Dictionary.</h2>
      <p className="text-xl">Get started by entering a word into the search bar and pressing the search button!</p>
    </main>
  )
}