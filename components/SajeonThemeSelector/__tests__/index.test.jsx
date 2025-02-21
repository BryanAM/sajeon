import { render, screen } from "@testing-library/react";
import { SajeonThemeSelector } from "../SajeonThemeSelector";

describe("Sajeon Theme Selector", () => {
  it("renders in screen", () => {
    render(<SajeonThemeSelector />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("menu is closed by default", () => {
    render(<SajeonThemeSelector />);
    const menu = screen.queryByRole("menu");
    expect(menu).toBeNull();
  });

  it("aria-expanded false by default", () => {
    render(<SajeonThemeSelector />);
    const button = screen.getByRole("button");
    const expanded = button.getAttribute("aria-expanded");
    expect(expanded).toBe("false");
  });

  it("data-state closed by default", () => {
    render(<SajeonThemeSelector />);
    const button = screen.getByRole("button");
    const dataState = button.getAttribute("data-state");
    expect(dataState).toBe("closed");
  });
});
