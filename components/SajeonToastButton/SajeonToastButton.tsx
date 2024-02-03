"use client";

import { toast } from "sonner";
import { DialogClose } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";


type variantTypes = "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";

export function SajeonToastButton({ children, variant="default" }: { children: React.ReactNode, variant: variantTypes}) {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  } as Intl.DateTimeFormatOptions);

  return (
    <DialogClose
      className={buttonVariants({ variant: variant  })}
      type="submit"
      onClick={() =>
        toast("Updates Sent, Thank you! ❀", {
          description: formattedDate,
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        })
      }
    >
      {children}
    </DialogClose>
  );
}
