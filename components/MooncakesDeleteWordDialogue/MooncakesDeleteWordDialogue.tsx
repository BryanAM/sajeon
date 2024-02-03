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

import { SajeonDataModelType } from "@/types/SajeonTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { deleteWord } from "@/app/actions";
import { SajeonToastButton } from "@/components/SajeonToastButton/SajeonToastButton";
import { Trash2Icon } from "lucide-react";
export default function MooncakesDeleteWordDialogue({
  word,
}: {
  word: SajeonDataModelType;
}) {
  // Helper function to generate unique IDs

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2Icon className="mr-2 h-4 w-4" />
          Delete Word
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[768px]">
        <ScrollArea className="h-auto sm:w-[470px] md:w-[700px]">
          <DialogHeader className="px-2">
            <DialogTitle className="text-4xl">
              Are you sure you want to permanently delete <span className="underline underline-offset-4">{word.word}</span>?
            </DialogTitle>
            <DialogDescription>
              If you delete the word {word.word}, it will be completely removed
              from the database.
            </DialogDescription>
          </DialogHeader>
          <form action={deleteWord}>
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
              <h4 className="font-semibold">Word Details</h4>
              <div className="grid grid-cols-2 items-center gap-4">
                <p>Word: {word.word}</p>
                <p>Part of Speech: {word.pos || "No Value"}</p>
                <p>Hanja: {word.hanja || "No Value"}</p>
                <p>Definitions: {word.definitions.join(", ")}</p>
              </div>
            </div>

            <DialogFooter className="justify-between gap-2 px-4">
              <DialogClose
                className={buttonVariants({ variant: "outline" })}
                type="button"
              >
                Discard Changes
              </DialogClose>

              <SajeonToastButton variant="destructive">
                Delete Word
              </SajeonToastButton>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
