import React from "react";
import { render, screen } from "@testing-library/react";
import MoonCakesDeleteWordDialogue from "../MoonCakesDeleteWordDialogue";
import { databaseDataMock } from "../../../__mocks__/databaseDataMock";

describe("Mooncakes Delete Word Dialogue", () => {
  it("renders trigger button", () => {
    render(<MoonCakesDeleteWordDialogue word={databaseDataMock[0]} />);
    const button = screen.getByText("Delete Word");
    expect(button).toBeInTheDocument();
  });
});
