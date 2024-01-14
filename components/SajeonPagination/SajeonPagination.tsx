import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type SajeonPaginationProps = {
  pages: number;
  currentPage: { [key: string]: string | string[] }
};

function SajeonPagination({ pages, currentPage }: SajeonPaginationProps) {
 

  const isLastPage = () => +currentPage.page === pages;
  const isFirstPage = () => +currentPage.page === 1 || !+currentPage.page;
  

  function getNextPage(): string {
    if(Object.hasOwn(currentPage, 'page')) {
      const currPage: number = +currentPage.page;
      return currPage < pages ? String(currPage + 1) : String(pages);
    } else {
      return '2';
    }
  }

  function getPreviousPage(): string {
    if(Object.hasOwn(currentPage, 'page')) {
      const currPage: number = +currentPage.page;
      return currPage > 1 ? String(currPage - 1) : '1';
    } else {
      return '1';
    }
  }


  function getAdjustedStartPage(): number {
    if (pages <= 3) {
      return 1;
    }
     // Calculate the total number of layers
    const totalLayers = Math.ceil(pages / 3);
    const currentLayerStart = 3 * getCurrentLevel() + 1;
    const pageRemainder = Math.abs((+currentPage.page % 3) - 3);
    const hangingPages = (getCurrentLevel() + 1) === totalLayers && pageRemainder > 0 ? pageRemainder : 0;
    // return offset if we have any hanging pages
    return  currentLayerStart - hangingPages
  }

  function getCurrentLevel(): number {
    if (Object.hasOwn(currentPage, 'page')) {
      const currPage: number = +currentPage.page;
      return Math.floor((currPage - 1) / 3);
    } else {
      return 0;
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious className={cn(`${isFirstPage() && 'pointer-events-none opacity-[0.25]'}`)} href={`?page=${getPreviousPage()}`} aria-disabled={isFirstPage()} />
        {Array.from({ length: Math.min(pages, 3) }, (_, index: number) => getAdjustedStartPage() + index).map(
          (item) => (
            <PaginationLink key={item} href={`?page=${item}`} isActive={+currentPage.page === item || !+currentPage.page && item === 1}>{item}</PaginationLink>
          ),
        )}
        <PaginationNext className={cn(`${isLastPage() && 'pointer-events-none opacity-[0.25]'}`)} href={`?page=${getNextPage()}`} aria-disabled={isLastPage()}/>
      </PaginationContent>
    </Pagination>
  );
}

export default SajeonPagination;
