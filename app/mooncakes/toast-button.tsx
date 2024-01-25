"use client";

import { toast } from "sonner";
import { DialogClose } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";

export function ToastButton({ children }: { children: React.ReactNode }) {
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
      className={buttonVariants({ variant: "default" })}
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
