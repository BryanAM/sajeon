import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "@radix-ui/react-icons";
import { Trash2Icon } from "lucide-react";
export default async function DirectionsDialogue() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="underline text-xl  md:text-4xl lg:text-3xl hover:text-muted-foreground focus:text-muted-foreground">
          Click for Directions
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Updating Sajeon</DialogTitle>
            <DialogDescription>
              Each card is a single entry in the sajeon database. Each entry
              contains the <i>korean word</i>, <i>romaja</i>,{" "}
              <i>part of speech</i> (POS), <i>hanaja</i>, any <i>definitions</i>
              , and a set of <i>korean and english</i> sentences.
            </DialogDescription>
            <ol className="mb-6 space-y-3 text-left">
              <li className="mx-6 list-decimal">
                To modify an entry select the button to open the edit dialogue.{" "}
                <br />
                <Button className="!opacity-100" disabled>
                  <Pencil1Icon className="mr-2 h-4 w-4" />
                  Edit Data
                </Button>
              </li>
              <li className="mx-6 list-decimal">
                Once the dialogue is opened, you can modify any of the fields.
              </li>
              <li className="mx-6 list-decimal">
                You can add definitions or sentences using the buttons below
                each section. <br />
                <Button
                  tabIndex={-1}
                  className="pointer-events-none"
                  type="button"
                  variant="secondary"
                >
                  <PlusIcon height="16" width="16" />
                  <span className="ml-1">Add ...</span>
                </Button>
              </li>
              <li className="mx-6 list-decimal">
                To delete use the trash can icon button. <br />
                <Button
                  className="pointer-events-none"
                  type="button"
                  size="smIcon"
                  variant="destructive"
                  tabIndex={-1}
                >
                  <Trash2Icon />
                </Button>
              </li>
            </ol>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
