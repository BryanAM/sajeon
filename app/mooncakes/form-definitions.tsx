"use client";
import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { TrashIcon } from "@radix-ui/react-icons";
import { SajeonDataModelType } from "@/types/SajeonTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function FormDefinitions({
  word,
}: {
  word: SajeonDataModelType;
}) {
  const generateUniqueId = () =>
    `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const [definitions, setDefinitions] = useState(
    word.definitions.map((def) => ({
      id: generateUniqueId(),
      text: def,
    })),
  );

  const addDefinition = (): void => {
    const newDefinition = { id: generateUniqueId(), text: "" };
    setDefinitions([...definitions, newDefinition]);
  };

  const deleteDefinition = (id: string): void => {
    setDefinitions(definitions.filter((def) => def.id !== id));
  };

  return (
    <div className="grid grid-cols-1 items-center gap-4">
      {definitions.map(({ id, text }, index) => (
        <Label key={id} htmlFor="definition" className="col-span-1 text-left">
          {`Definition ${index + 1}`}
          <div className="mt-1 flex items-center gap-2">
            <Input
              id={`${text}-${index}`}
              name="definition"
              value={text}
              onChange={(e) =>
                setDefinitions(
                  definitions.map((def) =>
                    def.id === id ? { ...def, text: e.target.value } : def,
                  ),
                )
              }
            />
            <Button
              className={`${index === 0 && "hidden"}`}
              type="button"
              size="smIcon"
              variant="destructive"
              title="delete"
              aria-label="delete icon"
              onClick={() => deleteDefinition(id)}
            >
              <TrashIcon />
            </Button>
          </div>
        </Label>
      ))}
      <Button type="button" variant="secondary" onClick={() => addDefinition()}>
        <PlusIcon height="16" width="16" />
        <span className="ml-1">Add Definition</span>
      </Button>
    </div>
  );
}
