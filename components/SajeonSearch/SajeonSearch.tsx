import React from "react";
import {
  Text,
  Button,
  TextFieldInput,
} from "@radix-ui/themes";

function SajeonSearch() {
  return (
    <form>
      <label className="flex flex-col">
        <Text as="label">Sajeon</Text>
        <TextFieldInput />
      </label>
      <Button>Sajeon Search</Button>
    </form>
  );
}

export default SajeonSearch;
