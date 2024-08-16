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
import MooncakesEditDialogue from "@/components/MooncakesEditDialogue/MoonCakesEditDialogue";
import MooncakesDeleteWordDialogue from '@/components/MooncakesDeleteWordDialogue/MooncakesDeleteWordDialogue';
import { Button } from "../ui/button";

export default function MooncakesDataCard({
  word,
}: {
  word: SajeonDataModelType;
}) {
  return (
    <Card className="flex w-auto flex-col justify-between">
      <CardHeader className="grid grid-cols-2 space-y-0 border-b">
        <div className="col-span-1">
          <CardTitle className="text-4xl">{word.word}</CardTitle>
          <CardDescription className="col-span-1">
            {word.romaja}
          </CardDescription>
        </div>
        <div className="col-span-1 mt-0">
          <p className="font-semibold">
            POS: <span className="font-normal">{word.pos || "No Value"}</span>
          </p>
          <p className="font-semibold">
            Hanja:{" "}
            <span className="font-normal">{word.hanja || "No Value"}</span>
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mt-2 font-semibold">Definitions</p>
        <ol>
          {word.definitions.map((def) => (
            <li className="mx-6 list-decimal" key={def}>
              {def}
            </li>
          ))}
        </ol>
        <p className="mt-2 font-semibold">Sentences</p>
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
        <MooncakesEditDialogue word={word} />
        <MooncakesDeleteWordDialogue word={word} />
      </CardFooter>
    </Card>
  );
}
