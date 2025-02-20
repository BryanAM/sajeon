import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type SajeonPaginationProps = {
  totalPages: number;
  currentPage: number;
};

const ITEMS_PER_LAYER: number = 4;

function SajeonPagination({ totalPages, currentPage }: SajeonPaginationProps) {
  const isLastPage = () => currentPage === totalPages;
  const isFirstPage = () => currentPage === 1;

  function getNextPage(): number {
    return currentPage < totalPages ? currentPage + 1 : totalPages;
  }

  function getPreviousPage(): number {
    return currentPage > 1 ? currentPage - 1 : 1;
  }

  /**
   *
   * @returns total possible layers
   * e.g. 7 totalPages = 3 layers
   * 1, 2, 3
   * 4, 5, 6
   * 7 ....
   */
  function getTotalLayers(): number {
    return Math.ceil(totalPages / ITEMS_PER_LAYER);
  }

  /**
   *
   * @returns current layer number
   *  totalPages 1, 2, 3 = layer 1
   *  totalPages 4, 5, 6 = layer 2
   *  totalPages 7, 8, 9 = layer 3
   */
  function getCurrentLayer(): number {
    return Math.floor((currentPage - 1) / ITEMS_PER_LAYER) + 1;
  }

  /**
   *
   * @returns number
   * @description when loading data we need to handle several cases for how many totalPages we render
   * case 1: totalPages = 1, no pagination
   * case 2: totalPages = 3, 6, 9, even pagination 1 to 3 xyz
   * case 3: uneaven pagiantion = e.g.4, 5, 7, 8 where we need to "backtrack" handing totalPages and update the offset
   */
  function getAdjustedStartPage(): number {
    // If there are 3 or fewer totalPages, always start pagination at 1
    if (totalPages <= ITEMS_PER_LAYER) {
      return 0;
    }

    // easy case all even numbers so we want to say offsets should be 0, 3, 6, 9 etc...
    const evenOffset = (getCurrentLayer() - 1) * ITEMS_PER_LAYER;

    // if current layer is the last layer, special behavior when we have dangling totalPages
    if (getCurrentLayer() === getTotalLayers()) {
      // Calculate the potential last page of the current layer
      // e.g. if 7 is the last "actual" page the last potential is "9"
      const potentialLastPageOfLayer = evenOffset + ITEMS_PER_LAYER;

      // Calculate how many totalPages we need to backtrack if the current page is in the last layer
      const backtrack =
        potentialLastPageOfLayer > totalPages
          ? potentialLastPageOfLayer - totalPages
          : 0;

      // Adjust the start page for the last layer
      return evenOffset - backtrack;
    } else {
      return evenOffset;
    }
  }

  function displayEllipsisAfter(): boolean {
    return !isLastPage() && getCurrentLayer() < getTotalLayers();
  }

  function displayEllipsisBefore(): boolean {
    return isLastPage() && totalPages > ITEMS_PER_LAYER;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          className={cn(
            `${isFirstPage() && "pointer-events-none opacity-[0.25]"}`,
          )}
          href={`?page=${getPreviousPage()}`}
          aria-disabled={isFirstPage()}
        />
        {displayEllipsisBefore() && <PaginationEllipsis />}
        {Array.from(
          { length: Math.min(totalPages, ITEMS_PER_LAYER) },
          (_, index: number) => getAdjustedStartPage() + index + 1,
        ).map((item) => (
          <PaginationLink
            key={item}
            href={`?page=${item}`}
            isActive={
              Number(currentPage) === item ||
              (!Number(currentPage) && item === 1)
            }
          >
            {item}
          </PaginationLink>
        ))}
        {displayEllipsisAfter() && <PaginationEllipsis />}

        <PaginationNext
          className={cn(
            `${isLastPage() && "pointer-events-none opacity-[0.25]"}`,
          )}
          href={`?page=${getNextPage()}`}
          aria-disabled={isLastPage()}
        />
      </PaginationContent>
    </Pagination>
  );
}

export default SajeonPagination;
