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
  pages: number;
  currentPage: { [key: string]: string | string[] };
};

function SajeonPagination({ pages, currentPage }: SajeonPaginationProps) {


  const ITEMS_PER_LAYER: number = 3;
  const isLastPage = () => +currentPage.page === pages;
  const isFirstPage = () => +currentPage.page === 1 || !+currentPage.page;

  function getCurrentPage(): number {
    return Object.hasOwn(currentPage, "page") ? +currentPage.page : 1;
  }

  function getNextPage(): string {
    if (Object.hasOwn(currentPage, "page")) {
      const currPage: number = +currentPage.page;
      return currPage < pages ? String(currPage + 1) : String(pages);
    } else {
      return "2";
    }
  }

  function getPreviousPage(): string {
    if (Object.hasOwn(currentPage, "page")) {
      const currPage: number = +currentPage.page;
      return currPage > 1 ? String(currPage - 1) : "1";
    } else {
      return "1";
    }
  }

  /**
   * 
   * @returns total possible layers
   * e.g. 7 pages = 3 layers 
   * 1, 2, 3
   * 4, 5, 6
   * 7 ....
   */
  function getTotalLayers(): number {
    return Math.ceil(pages / 3);
  }

    /**
   *
   * @returns current layer number
   *  pages 1, 2, 3 = layer 1
   *  pages 4, 5, 6 = layer 2
   *  pages 7, 8, 9 = layer 3
   */
    function getCurrentLayer(): number {
      return Math.floor((getCurrentPage() - 1) / 3) + 1;
    }


  /**
   *
   * @returns number
   * @description when loading data we need to handle several cases for how many pages we render
   * case 1: pages = 1, no pagination
   * case 2: pages = 3, 6, 9, even pagination 1 to 3 xyz
   * case 3: uneaven pagiantion = e.g.4, 5, 7, 8 where we need to "backtrack" handing pages and update the offset
   */
  function getAdjustedStartPage(): number {
    // If there are 3 or fewer pages, always start pagination at 1
    if (pages <= 3) {
      return 0;
    }

    const startOffset = (getCurrentLayer() - 1) * 3;


    return startOffset;
  }



  function displayEllipsisAfter(): boolean {
    return !isLastPage() && getCurrentLayer() < getTotalLayers();
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
        {Array.from(
          { length: Math.min(pages, 3) },
          (_, index: number) => getAdjustedStartPage() + index + 1,
        ).map((item) => (
          <PaginationLink
            key={item}
            href={`?page=${item}`}
            isActive={
              +currentPage.page === item || (!+currentPage.page && item === 1)
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
