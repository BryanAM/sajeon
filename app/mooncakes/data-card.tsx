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
    <Card className="w-auto flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{word.word}</CardTitle>
        <CardDescription>{word.romaja}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">
          Hanja: <span className="font-normal">{word.hanja || "No Value"}</span>
        </p>
        <p className="font-semibold">
          Part of Speech:{" "}
          <span className="font-normal">{word.pos || "No Value"}</span>
        </p>
        <p className="font-semibold">Definitions</p>
        <ol>
          {word.definitions.map((def) => (
            <li className="mx-6 list-decimal" key={def}>
              {def}
            </li>
          ))}
        </ol>
        <p className="font-semibold">Sentences</p>
        <ScrollArea className="h-[150px] bg-gradient-to-t from-muted from-10% via-background">
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
