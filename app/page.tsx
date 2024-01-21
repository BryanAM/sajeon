import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";
import { formAction } from "@/app/actions";

export default function Home() {
  return (
    <main>
      <h1 className="sajeon-branded-text text-center mb-4">Sajeon</h1>
      <SajeonSearch formAction={formAction}/>
    </main>
  )
}