"use client";

import { SajeonDataModelType } from "@/types/SajeonTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
export default function FormSentences({ word }: { word: SajeonDataModelType }) {
  const generateUniqueId = () =>
    `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const [sentences, setSentences] = useState(
    word.sentences.map((sentence) => ({
      id: generateUniqueId(),
      kr: sentence.kr,
      en: sentence.en,
    })),
  );

  const addSentence = (): void => {
    const newSentences = { id: generateUniqueId(), kr: "", en: "" };
    setSentences([...sentences, newSentences]);
  };

  const deleteSentence = (id: string): void => {
    setSentences(sentences.filter((sentence) => sentence.id !== id));
  };

  return (
    <div className="grid grid-cols-2 items-center gap-4">
      {sentences.map((sentence, index) => (
        <div
          className="rounded-tr-sm border-r border-t border-solid border-muted-foreground/50 p-4"
          key={sentence.id}
        >
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Sentence {index + 1}</h4>
            <Button
              className={`${index === 0 && "hidden"}`}
              type="button"
              size="smIcon"
              variant="destructive"
              title="delete"
              aria-label="delete icon"
              onClick={() => deleteSentence(sentence.id)}
            >
              <TrashIcon />
            </Button>
          </div>
          <Label
            htmlFor={`sentence-${index + 1}`}
            className="col-span-1 text-left font-normal"
          >
            Korean
            <Input
              id={`kr-sentence-${index + 1}`}
              name={`sentence-${index + 1}`}
              className="mt-1"
              defaultValue={sentence.kr}
            />
          </Label>
          <Label
            htmlFor="english-sentence"
            className="col-span-1 text-left font-normal"
          >
            English
            <Input
              id={`en-sentence-${index + 1}`}
              name={`sentence-${index + 1}`}
              className="mt-1"
              defaultValue={sentence.en}
            />
          </Label>
        </div>
      ))}
      <Button
        className="col-span-2"
        type="button"
        variant="secondary"
        onClick={() => addSentence()}
      >
        <PlusIcon height="16" width="16" />
        <span className="ml-1">Add Sentence</span>
      </Button>
    </div>
  );
}
