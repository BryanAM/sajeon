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
import { Pencil1Icon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
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
          <form>
            <div className="grid gap-4 px-6 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Word
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  defaultValue={word.word}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Romaja
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                  defaultValue={word.romaja}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Hanja
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                  defaultValue={word.hanja}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Part of Speech
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                  defaultValue={word.pos}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                {word.definitions.map((definition, index) => (
                  <>
                    <Label
                      key={definition}
                      htmlFor="username"
                      className="text-right"
                    >
                      {`Definition ${index + 1}`}
                    </Label>
                    <Input
                      id="username"
                      className="col-span-3"
                      defaultValue={definition}
                    />
                  </>
                ))}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                {word.sentences.map((sentence, index) => (
                  <>
                    <Label htmlFor="username" className="text-right">
                      {`Korean Sentence ${index + 1}`}
                    </Label>
                    <Input
                      id="username"
                      className="col-span-3"
                      defaultValue={sentence.kr}
                    />
                    <Label htmlFor="username" className="text-right">
                      {`English Sentence ${index + 1}`}
                    </Label>
                    <Input
                      id="username"
                      className="col-span-3"
                      defaultValue={sentence.en}
                    />
                  </>
                ))}
              </div>
            </div>
          </form>
          <DialogFooter className="justify-between gap-2 px-6">
            <DialogClose
              className={buttonVariants({ variant: "destructive" })}
              type="button"
            >
              Cancel Changes
            </DialogClose>
            <ToastButton>Save Changes</ToastButton>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
