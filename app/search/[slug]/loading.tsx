import { Skeleton } from "@/components/ui/skeleton";
import SajeonVocabCardSkeleton from '@/components/SajeonVocabCardSkeleton/SajeonVocabCardSkeleton';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <section className="m-auto mt-4 max-w-xl">
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
      <SajeonVocabCardSkeleton />
    </section>
  );
}
