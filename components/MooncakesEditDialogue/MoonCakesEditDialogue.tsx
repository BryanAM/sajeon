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
import { ScrollArea } from "@/components/ui/scroll-area";
import { updateDatabase } from "@/app/actions";
import { SajeonToastButton } from "@/components/SajeonToastButton/SajeonToastButton";
import MooncakesFormDefinitions from "@/components/MooncakesFormDefinitions/MooncakesFormDefinitions";
import MooncakesFormSentences from "@/components/MooncakesFormSentences/MooncakesFormSentences";
import { MooncakesEditForm } from "../MooncakesEditForm/MooncakesEditForm";

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
          <MooncakesEditForm word={word} />
          <form action={updateDatabase}>
            <div className="grid gap-4 px-4 py-4">
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
