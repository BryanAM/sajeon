import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DictionaryEntryType } from "@/types/SajeonTypes";
import { ScrollArea } from "@/components/ui/scroll-area";
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
      <DialogContent className="max-h-full min-w-full overflow-y-auto pb-12 md:h-[75%] md:min-w-[70%] md:py-4 ">
        <ScrollArea className="px-4 sm:w-full md:min-w-fit">
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
