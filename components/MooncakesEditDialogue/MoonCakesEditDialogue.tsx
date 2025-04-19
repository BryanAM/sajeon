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
import { DictionaryEntryType } from "@/types/SajeonTypes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SajeonToastButton } from "@/components/SajeonToastButton/SajeonToastButton";
import { MooncakesEditForm } from "../MooncakesEditForm/MooncakesEditForm";

export default function MooncakesEditDialogue({
  word,
  trigger,
}: {
  word: DictionaryEntryType;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-full min-w-full overflow-y-auto pb-12 md:h-[75%]  md:min-w-[90%] md:py-4 ">
        <ScrollArea className="px-2 sm:w-full  md:min-w-fit">
          <DialogHeader className="py-6">
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

          <DialogFooter className="justify-between gap-2 px-4 pt-6">
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
