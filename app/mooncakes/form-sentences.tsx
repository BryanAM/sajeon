'use client';

import { SajeonDataModelType } from "@/types/SajeonTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { TrashIcon } from "@radix-ui/react-icons";
import {useState} from 'react';
export default function FormSentences({ word }: { word: SajeonDataModelType }) {
  const generateUniqueId = () => `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

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
    <div className="grid grid-cols-2 items-center gap-4">
      {word.sentences.map((sentence, index) => (
        <div key={sentence.kr + index}>
          <Label
            htmlFor={`sentence-${index + 1}`}
            className="col-span-1 text-left"
          >
            {`Korean Sentence ${index + 1}`}

            <Input
              id={`kr-sentence-${index + 1}`}
              name={`sentence-${index + 1}`}
              className="mt-1"
              defaultValue={sentence.kr}
            />
          </Label>
          <Label htmlFor="english-sentence" className="col-span-1 text-left">
            {`English Sentence ${index + 1}`}

            <Input
              id={`en-sentence-${index + 1}`}
              name={`sentence-${index + 1}`}
              className="mt-1"
              defaultValue={sentence.en}
            />
          </Label>
          {/* <Button
              className={`${index === 0 && "hidden"}`}
              type="button"
              size="smIcon"
              variant="destructive"
              title="delete"
              aria-label="delete icon"
              onClick={() => deleteDefinition(id)}
            >
              <TrashIcon />
            </Button> */}
         
        </div>

      ))}
       <Button className="col-span-2" type="button" variant="secondary" onClick={() => addDefinition()}>
        <PlusIcon height="16" width="16" />
        <span className="ml-1">Add Sentence</span>
      </Button>
    </div>
  );
}
