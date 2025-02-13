import React from "react";
import SajeonPagination from "../SajeonPagination";
import { render, fireEvent, waitFor } from "@testing-library/react";

describe("Sajeon Pagination Basics", () => {
  it("renders the component", () => {
    const results = render(
      <SajeonPagination totalPages={5} currentPage={{ page: 1 }} />,
    );

    const element = results.getByRole("navigation");
    expect(element).toBeInTheDocument();
  });

  it("First page is active by default", () => {
    const results = render(
      <SajeonPagination totalPages={5} currentPage={{ page: 1 }} />,
    );

    const element = results.getByRole("link", { name: "1" });
    expect(element.getAttribute("aria-current")).toBe("page");
  });

  it("Visible links should be 1, 2, 3", () => {
    const results = render(
      <SajeonPagination totalPages={5} currentPage={{ page: 1 }} />,
    );

    const links = results.getAllByRole("link").slice(1, 4);
    links.forEach((link, index) => {
      expect(link.textContent).toBe(String(index + 1));
    });
  });

  it("Expect previous to be disabed on load", () => {
    const results = render(
      <SajeonPagination totalPages={5} currentPage={{ page: 1 }} />,
    );

    const previousLink = results.getByRole("link", {
      name: "Go to previous page",
    });
    expect(previousLink.getAttribute("aria-disabled")).toBe("true");
  });

  it("Expect next page to be enabled on load", () => {
    const results = render(
      <SajeonPagination totalPages={5} currentPage={{ page: 1 }} />,
    );

    const nextLink = results.getByRole("link", { name: "Go to next page" });
    expect(nextLink.getAttribute("aria-disabled")).toBe("false");
  });
});

describe("Sajeon Pagination Ellipsis Testing", () => {
  it("One page, no ellipsis", () => {
    const results = render(
      <SajeonPagination totalPages={1} currentPage={{ page: 1 }} />,
    );

    const span = results.queryByText("More totalPages", { hidden: true });
    expect(span).not.toBeInTheDocument();
  });

  it("Two totalPages, no ellipsis", () => {
    const results = render(
      <SajeonPagination totalPages={2} currentPage={{ page: 1 }} />,
    );

    const span = results.queryByText("More totalPages", { hidden: true });
    expect(span).not.toBeInTheDocument();
  });

  it("Three totalPages, no ellipsis", () => {
    const results = render(
      <SajeonPagination totalPages={3} currentPage={{ page: 1 }} />,
    );

    const span = results.queryByText("More totalPages", { hidden: true });
    expect(span).not.toBeInTheDocument();
  });

  it("Four totalPages, ellipsis found", () => {
    const results = render(
      <SajeonPagination totalPages={4} currentPage={{ page: 1 }} />,
    );

    const span = results.queryByText("More totalPages", { hidden: true });
    expect(span).toBeInTheDocument();
  });

  it("Last page, ellipsis found i.e. because there are previous ones", () => {
    const results = render(
      <SajeonPagination totalPages={7} currentPage={{ page: 7 }} />,
    );

    const span = results.queryByText("More totalPages", { hidden: true });
    expect(span).toBeInTheDocument();
  });
});
