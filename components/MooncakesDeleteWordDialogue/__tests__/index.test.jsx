import { render, screen } from "@testing-library/react";
import MoonCakesDeleteWordDialogue from "../MoonCakesDeleteWordDialogue";
import { databaseDataMock } from "../../../__mocks__/databaseDataMock";

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(), // Provide a no-op or custom mock implementation
}));

describe("Mooncakes Delete Word Dialogue", () => {
  it("renders trigger button", () => {
    render(<MoonCakesDeleteWordDialogue word={databaseDataMock[0]} />);
    const button = screen.getByText("Delete Word");
    expect(button).toBeInTheDocument();
  });
});
