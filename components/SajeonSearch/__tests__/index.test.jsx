import { render } from "@testing-library/react";
import SajeonSearch from "../SajeonSearch";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Sajeon Title", () => {
  it("renders with text", () => {
    const results = render(<SajeonSearch />);

    const element = results.container.querySelector("#search");
    expect(element).toBeInTheDocument();
  });

  it("sets input value is props", () => {
    const results = render(<SajeonSearch inputValue="search item" />);

    const input = results.container.querySelector("input");
    expect(input.value).toBe("search item");
  });
});
