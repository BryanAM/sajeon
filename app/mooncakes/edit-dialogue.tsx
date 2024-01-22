import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SajeonDataModelType } from "@/types/SajeonTypes";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { updateDatabase } from "@/app/actions";
import { ToastButton } from "./toast-button";
export default function EditDialogue({ word }: { word: SajeonDataModelType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Pencil1Icon className="mr-2 h-4 w-4" />
          Edit Data
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[768px]">
        <ScrollArea className="h-[600px] w-[470px] md:w-[700px]">
          <DialogHeader className="px-6">
            <DialogTitle>Edit Data for {word.word}</DialogTitle>
            <DialogDescription>
              You can make changes to the word here. After making changes select
              the Save Changes button. If you wish to abandon any change simply
              select the Cancel Changes button.
            </DialogDescription>
          </DialogHeader>
          <form action={updateDatabase}>
            <div className="grid gap-4 px-6 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="_word-id" className="text-right">
                  ID
                </Label>
                <Input
                  id="_word-id"
                  name="_word-id"
                  className="pointer-events-none col-span-3 cursor-not-allowed border-0 text-muted-foreground"
                  spellCheck={false}
                  value={word._id}
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="word" className="col-span-1 text-left">
                  Word
                  <Input
                    className="mt-1"
                    id="word"
                    name="word"
                    defaultValue={word.word}
                  />
                </Label>

                <Label htmlFor="romaja" className="col-span-1 text-left">
                  Romaja
                  <Input
                    className="mt-1"
                    id="romaja"
                    name="romaja"
                    defaultValue={word.romaja}
                  />
                </Label>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="hanja" className="col-span-1 text-left">
                  Hanja
                  <Input
                    className="mt-1"
                    id="hanja"
                    defaultValue={word.hanja}
                  />
                </Label>
                <Label htmlFor="pos" className="col-span-1 text-left">
                  Select Part of Speech
                  <Select defaultValue={word.pos}>
                    <SelectTrigger className="mt-1" id="pos" name="pos">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Part of Speech</SelectLabel>
                        <SelectItem value={word.pos}>{word.pos}</SelectItem>
                        <SelectItem value="noun">Noun</SelectItem>
                        <SelectItem value="adjective">Adjective</SelectItem>
                        <SelectItem value="verb">Verb</SelectItem>
                        <SelectItem value="adverb">Adverb</SelectItem>
                        <SelectItem value="particle">Particle</SelectItem>
                        <SelectItem value="pronoun">Pronoun</SelectItem>
                        <SelectItem value="number">Number</SelectItem>
                        <SelectItem value="determiner">Determiner</SelectItem>
                        <SelectItem value="interjection">
                          Interjection
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Label>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                {word.definitions.map((definition, index) => (
                  <>
                    <Label
                      key={definition}
                      htmlFor="definition"
                      className="col-span-1 text-left"
                    >
                      {`Definition ${index + 1}`}

                      <Input
                        id="definition"
                        name="definition"
                        className="mt-1"
                        defaultValue={definition}
                      />
                    </Label>
                  </>
                ))}
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                {word.sentences.map((sentence, index) => (
                  <>
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
                    <Label
                      htmlFor="english-sentence"
                      className="col-span-1 text-left"
                    >
                      {`English Sentence ${index + 1}`}

                      <Input
                        id={`en-sentence-${index + 1}`}
                        name={`sentence-${index + 1}`}
                        className="mt-1"
                        defaultValue={sentence.en}
                      />
                    </Label>
                  </>
                ))}
              </div>
            </div>

            <DialogFooter className="justify-between gap-2 px-6">
              <DialogClose
                className={buttonVariants({ variant: "destructive" })}
                type="button"
              >
                Cancel Changes
              </DialogClose>
              <ToastButton>Save Changes</ToastButton>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
