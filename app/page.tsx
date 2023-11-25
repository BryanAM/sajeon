'use client';
import SajeonNavigation from "@/components/SajeonNavigation/SajeonNavigation";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SajeonNavigation/>
      <SajeonSearch />
    </main>
  )
}