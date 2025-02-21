import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

function SajeonVocabCardSkeleton() {
  return (
    <article className="mb-4">
      <Card>
        <CardHeader className="flex-row">
          <div className="flex flex-col items-start sm:flex-row">
            <div className="flex flex-col items-center">
              <Skeleton className="mb-1 h-24 w-24" />
            </div>
            <div className="my-2 sm:mx-6 sm:my-0">
              <Skeleton className="h-6 w-20" />
              <div className="my-2">
                <Skeleton className="my-1 h-4 w-56" />
                <Skeleton className="my-1 h-4 w-56" />
              </div>
              <div></div>
            </div>
          </div>

          <div className="flex grow justify-end gap-2">
            {/* buttons */}
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="font-semibold">
            {/* Sentences Header */}
            <Skeleton className="h-6 w-28" />
          </div>
          <div>
            {/* Setence Examples */}
            <Skeleton className="my-2 h-8" />
            <Skeleton className="my-2 h-8" />
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export default SajeonVocabCardSkeleton;
