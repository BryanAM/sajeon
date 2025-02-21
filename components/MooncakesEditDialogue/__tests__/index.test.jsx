import { render, screen } from "@testing-library/react";
import MoonCakesEditDialogue from "../MoonCakesEditDialogue";
import userEvent from "@testing-library/user-event";
import { databaseDataMock } from "../../../__mocks__/databaseDataMock";

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(), // Provide a no-op or custom mock implementation
}));

describe("Mooncakes Edit Dialogue", () => {
  it("renders trigger button", () => {
    render(<MoonCakesEditDialogue word={databaseDataMock[0]} />);
    const title = screen.getByText("Edit Data");
    expect(title).toBeInTheDocument();
  });

  it("opens dialouge", async () => {
    render(<MoonCakesEditDialogue word={databaseDataMock[0]} />);
    const dialogueTrigger = screen.getByRole("button", { name: "Edit Data" });

    await userEvent.click(dialogueTrigger);

    const dialogueTitle = screen.getByText("Editing: 사랑");
    expect(dialogueTitle).toBeInTheDocument();

    const title = screen.getByText("Editing: 사랑");
    expect(title).toBeInTheDocument();
  });

  it("dialogue renders data into fields  ", async () => {
    render(<MoonCakesEditDialogue word={databaseDataMock[0]} />);
    const dialogueTrigger = screen.getByRole("button", { name: "Edit Data" });

    await userEvent.click(dialogueTrigger);

    const wordInput = screen.getByDisplayValue("사랑");
    expect(wordInput.value).toBe("사랑");

    const romajaInput = screen.getByDisplayValue("sarang");
    expect(romajaInput.value).toBe("sarang");

    const hanjaInput = screen.getByDisplayValue("愛");
    expect(hanjaInput.value).toBe("愛");

    const definitionInput = screen.getByDisplayValue("test");
    expect(definitionInput.value).toBe("test");

    const sentenceInput =
      screen.getByDisplayValue("그녀는 그에게 사랑을 고백했다.");
    expect(sentenceInput.value).toBe("그녀는 그에게 사랑을 고백했다.");
  });
});
