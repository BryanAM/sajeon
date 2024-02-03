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
import { SajeonToastButton } from "@/components/SajeonToastButton/SajeonToastButton";
import MooncakesFormDefinitions from "@/components/MooncakesFormDefinitions/MooncakesFormDefinitions";
import MooncakesFormSentences from "@/components/MooncakesFormSentences/MooncakesFormSentences";
export default function MooncakesEditDialogue({
  word,
}: {
  word: SajeonDataModelType;
}) {
  // Helper function to generate unique IDs

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Pencil1Icon className="mr-2 h-4 w-4" />
          Edit Data
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[768px]">
        <ScrollArea className="h-[600px] sm:w-[470px] md:w-[700px]">
          <DialogHeader className="px-2">
            <DialogTitle className="text-4xl">Editing: {word.word}</DialogTitle>
            <DialogDescription>
              After making changes to {word.word}, submit your changes to the
              database by selecting the &quot;Save Changes&quot; button. You can
              abandon changes by clicking away, clicking the discard changes
              button, or the exit dialoge button.
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
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="word" className="col-span-1 text-left">
                  Word
                  <Input
                    className="mt-1 text-lg"
                    id="word"
                    name="word"
                    defaultValue={word.word}
                  />
                </Label>

                <Label htmlFor="romaja" className="col-span-1 text-left">
                  Romaja
                  <Input
                    className="mt-1 text-lg"
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
                    className="mt-1 text-lg"
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

              <SajeonToastButton>Save Changes</SajeonToastButton>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
