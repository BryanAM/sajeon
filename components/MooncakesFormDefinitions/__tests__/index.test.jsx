import { render, screen } from "@testing-library/react";
import MooncakesFormDefinitions from "../MooncakesFormDefinitions";
import userEvent from "@testing-library/user-event";
import { databaseDataMock } from "../../../__mocks__/databaseDataMock";

describe("Mooncakes Form Definitions", () => {
  it("renders form definitions", () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const defaultDefinition = screen.getByText("Definition 1");
    expect(defaultDefinition).toBeInTheDocument();
  });

  it("renders first definition", () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const firstDef = screen.getByDisplayValue("test");
    expect(firstDef.value).toBe("test");
  });

  it("renders three definitions", () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const definitions = screen.getAllByRole("textbox");
    expect(definitions.length).toBe(3);
  });

  it("renders new definition", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);

    const definitions = screen.getAllByRole("textbox");
    expect(definitions.length).toBe(4);
  });

  it("renders two new definition", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);
    await userEvent.click(addButtonTrigger);

    const definitions = screen.getAllByRole("textbox");
    expect(definitions.length).toBe(5);
  });

  it("deletes a definition", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const deleteButtons = screen.getAllByLabelText("delete icon");
    await userEvent.click(deleteButtons[1]);

    const definitions = screen.getAllByRole("textbox");
    expect(definitions.length).toBe(2);
  });

  it("deletes two definitions", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const deleteButtons = screen.getAllByLabelText("delete icon");
    // first delete button should be disabled
    await userEvent.click(deleteButtons[1]);
    await userEvent.click(deleteButtons[2]);

    const definitions = screen.getAllByRole("textbox");
    expect(definitions.length).toBe(1);
  });

  it("renders new definition then deletes it", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText("delete icon");
    await userEvent.click(deleteButtons[2]);

    const definitions = screen.getAllByRole("textbox");
    expect(definitions.length).toBe(3);
  });

  it("renders new definition then specifically deletes love", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText("delete icon");
    // first elem should be "love"
    await userEvent.click(deleteButtons[1]);

    const definitions = screen.getAllByRole("textbox");
    const validValues = ["test", "affection", ""];
    definitions.forEach((def) => {
      expect(validValues).toContain(def.value);
    });
  });

  it("renders new definition then specifically deletes love and affection", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText("delete icon");
    // first elem should be "love"
    await userEvent.click(deleteButtons[1]);
    await userEvent.click(deleteButtons[2]);

    const definitions = screen.getAllByRole("textbox");
    const validValues = ["test", ""];
    definitions.forEach((def) => {
      expect(validValues).toContain(def.value);
    });
  });

  it("renders new definition then specifically deletes affection", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);

    const deleteButtons = screen.getAllByLabelText("delete icon");
    // first elem should be "love"
    await userEvent.click(deleteButtons[2]);

    const definitions = screen.getAllByRole("textbox");
    const validValues = ["test", "love", ""];
    definitions.forEach((def) => {
      expect(validValues).toContain(def.value);
    });
  });

  it("renders deletes everything but first definition", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);

    const deleteButtons = screen.getAllByLabelText("delete icon");
    // // first elem should be "love"
    await userEvent.click(deleteButtons[1]);
    await userEvent.click(deleteButtons[2]);

    const definitions = screen.getAllByRole("textbox");
    expect(definitions.length).toBe(1);
  });

  it("types in a new definition", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);

    const definitions = screen.getAllByRole("textbox");
    await userEvent.type(
      definitions[definitions.length - 1],
      "last definition",
    );

    expect(definitions[definitions.length - 1]).toHaveValue("last definition");
  });

  it("types in two new definitions", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);
    await userEvent.click(addButtonTrigger);

    const definitions = screen.getAllByRole("textbox");
    await userEvent.type(
      definitions[definitions.length - 1],
      "last definition",
    );
    await userEvent.type(
      definitions[definitions.length - 2],
      "second to last definition",
    );

    expect(definitions[definitions.length - 2]).toHaveValue(
      "second to last definition",
    );
  });

  it("types in two new definitions then deletes second to last one", async () => {
    render(<MooncakesFormDefinitions word={databaseDataMock[0]} />);
    const addButtonTrigger = screen.getByRole("button", {
      name: "Add Definition",
    });
    await userEvent.click(addButtonTrigger);
    await userEvent.click(addButtonTrigger);

    const definitions = screen.getAllByRole("textbox");
    await userEvent.type(
      definitions[definitions.length - 1],
      "last definition",
    );
    await userEvent.type(
      definitions[definitions.length - 2],
      "second to last definition",
    );

    const deleteButtons = screen.getAllByLabelText("delete icon");
    // second to last definition
    await userEvent.click(deleteButtons[deleteButtons.length - 2]);

    const updatedDefinitions = screen.getAllByRole("textbox");
    const validValues = ["test", "love", "affection", "last definition"];
    updatedDefinitions.forEach((def) => {
      expect(validValues).toContain(def.value);
    });
  });
});
