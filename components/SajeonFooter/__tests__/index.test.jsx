import { render, screen } from "@testing-library/react";
import SajeonFooter from "../SajeonFooter";

describe("Sajeon Footer", () => {
  it("renders footer", () => {
    render(<SajeonFooter />);
    expect(
      screen.getByText(/© 2022 Sajeon - All Rights Reserved/),
    ).toBeInTheDocument();
  });
});
