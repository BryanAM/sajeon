import React from "react";
import { Button } from "@/components/ui/button"


import { MagnifyingGlassIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";

function SajeonSearch() {
  return (
    <form className="flex flex-row items-end justify-center gap-2">
      <Button>Sajeon Search</Button>
      {/* <label className="flex max-w-md grow flex-col gap-2 text-center">
        <Text as="label" size="8">
          Sajeon
        </Text>
        <TextFieldRoot>
          <TextFieldSlot className="md:hidden">
            <IconButton size="1">
              <MagnifyingGlassIcon height="12" width="12" />
            </IconButton>
          </TextFieldSlot>
          <TextFieldSlot className="hidden md:flex">
            <MagnifyingGlassIcon height="16" width="16" />
          </TextFieldSlot>
          <TextFieldInput
            type="search"
            enterKeyHint="search"
            maxLength={200}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            size="3"
          />
        </TextFieldRoot>
      </label>
      <Button className="hidden md:block" size="3">
        Sajeon Search
      </Button> */}
    </form>
  );
}

export default SajeonSearch;
