import { SajeonDataModelType } from "@/types/SajeonTypes";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditDialogue from "./edit-dialogue";

export default function DataCard({ word }: { word: SajeonDataModelType }) {
  return (
    <Card className="flex w-auto flex-col justify-between">
      <CardHeader className="grid grid-cols-2 border-b space-y-0">
        <div className="col-span-1">
          <CardTitle className="text-4xl">{word.word}</CardTitle>
          <CardDescription className="col-span-1">
            {word.romaja}
          </CardDescription>
        </div>
        <div className="col-span-1 mt-0">
          <p className="font-semibold">
            POS:{" "}
            <span className="font-normal">{word.pos || "No Value"}</span>
          </p>
          <p className="font-semibold">
            Hanja:{" "}
            <span className="font-normal">{word.hanja || "No Value"}</span>
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-semibold mt-2">Definitions</p>
        <ol>
          {word.definitions.map((def) => (
            <li className="mx-6 list-decimal" key={def}>
              {def}
            </li>
          ))}
        </ol>
        <p className="font-semibold mt-2">Sentences</p>
        <ScrollArea className="h-[150px]">
          <ol>
            {word.sentences.map((sentence) => (
              <li className="mx-6 list-decimal" key={sentence.kr}>
                <p>Korean: {sentence.kr || "No Value"}</p>
                <p className="text-muted-foreground">
                  English: {sentence.en || "No Value"}
                </p>
              </li>
            ))}
          </ol>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-between ">
        <EditDialogue word={word} />
      </CardFooter>
    </Card>
  );
}
