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
import { DictionaryEntryType } from "@/types/SajeonTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { updateDatabase } from "@/app/actions";
import { SajeonToastButton } from "@/components/SajeonToastButton/SajeonToastButton";
import MooncakesFormDefinitions from "@/components/MooncakesFormDefinitions/MooncakesFormDefinitions";
import MooncakesFormSentences from "@/components/MooncakesFormSentences/MooncakesFormSentences";

export default function MooncakesEditDialogue({
  word,
  trigger,
}: {
  word: DictionaryEntryType;
  trigger: React.ReactNode;
}) {
  // Helper function to generate unique IDs

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="h-full min-w-full md:h-[75%] md:min-w-[90%]">
        <ScrollArea className="sm:w-full  md:min-w-fit">
          <DialogHeader className="px-4 pt-4">
            <DialogTitle className="text-left md:text-2xl">
              Editing Vocabulary - {word.word}
            </DialogTitle>
            <DialogDescription className="text-left">
              Update the word's details below. You can edit, add, or remove
              definitions and example sentences. Changes won't be saved until
              you click 'Save'.
            </DialogDescription>
          </DialogHeader>
          <form action={updateDatabase}>
            <div className="grid gap-4 px-4 py-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="_word-id" className="text-right">
                  ID
                </Label>
                <Input
                  id="_word-id"
                  name="_word-id"
                  className="pointer-events-none cursor-not-allowed border-0 text-muted-foreground"
                  spellCheck={false}
                  value={word._id}
                  readOnly
                  tabIndex={-1}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="word" className="col-span-1 text-left">
                  Word
                  <Input
                    className="col-span-3 mt-1 text-lg"
                    variant="naked"
                    id="word"
                    name="word"
                    defaultValue={word.word}
                  />
                </Label>

                <Label htmlFor="romaja" className="col-span-1 text-left">
                  Romaja
                  <Input
                    className="col-span-3 mt-1 text-lg"
                    variant="naked"
                    id="romaja"
                    name="romaja"
                    defaultValue={word.romaja}
                  />
                </Label>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="hanja" className="col-span-1 text-left">
                  Hanja
                  <Input
                    className="mt-1 text-lg"
                    variant="naked"
                    id="hanja"
                    name="hanja"
                    defaultValue={word.hanja}
                  />
                </Label>
                <Label htmlFor="pos" className="col-span-1 text-left">
                  Part of Speech
                  <Select name="pos" defaultValue={word.pos}>
                    <SelectTrigger className="mt-1 text-lg">
                      <SelectValue placeholder={word.pos} />
                    </SelectTrigger>
                    <SelectContent className="max-h-80">
                      <SelectGroup>
                        <SelectLabel>Part of Speech</SelectLabel>
                        <SelectItem className="text-lg" value="Noun">
                          Noun
                        </SelectItem>
                        <SelectItem className="text-lg" value="Adjective">
                          Adjective
                        </SelectItem>
                        <SelectItem className="text-lg" value="Verb">
                          Verb
                        </SelectItem>
                        <SelectItem className="text-lg" value="Noun, 하다">
                          Noun / 하다
                        </SelectItem>
                        <SelectItem className="text-lg" value="Adverb">
                          Adverb
                        </SelectItem>
                        <SelectItem className="text-lg" value="Particle">
                          Particle
                        </SelectItem>
                        <SelectItem className="text-lg" value="Pronoun">
                          Pronoun
                        </SelectItem>
                        <SelectItem className="text-lg" value="Determiner">
                          Determiner
                        </SelectItem>
                        <SelectItem className="text-lg" value="Interjection">
                          Interjection
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Label>
              </div>

              <MooncakesFormDefinitions word={word} />
              <MooncakesFormSentences word={word} />
            </div>

            <DialogFooter className="justify-between gap-2 px-4">
              <DialogClose
                className={buttonVariants({ variant: "outline" })}
                type="button"
              >
                Discard Changes
              </DialogClose>

              <SajeonToastButton variant="default">
                Save Changes
              </SajeonToastButton>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
