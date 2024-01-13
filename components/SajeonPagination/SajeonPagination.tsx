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

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious className={cn(`${isFirstPage() && 'pointer-events-none opacity-[0.25]'}`)} href={`?page=${getPreviousPage()}`} aria-disabled={isFirstPage()} />
        {Array.from({ length: pages }, (_, index: number) => index + 1).map(
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
