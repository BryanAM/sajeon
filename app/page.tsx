import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";
import { formAction } from "@/app/actions";

export default function Home() {
  return (
    <main>
      <SajeonSearch formAction={formAction}/>
    </main>
  )
}