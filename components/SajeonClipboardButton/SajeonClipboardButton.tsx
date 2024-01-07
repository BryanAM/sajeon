"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "@radix-ui/react-icons";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SajeonClipboardButtonProps = {
  copyData: string;
  iconType: string;
  customMessage?: string;
};
function SajeonClipboardButton({
  copyData,
  iconType,
  customMessage,
}: SajeonClipboardButtonProps) {

  const getDefaultMessage = () => {
    return customMessage || `Copied ${copyData}`
  }

  const [open, setOpen] = useState(false);
  const [clipboardContent, setClipboardContent] = useState(getDefaultMessage());



  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyData);
    } catch (err) {
      setClipboardContent("Error copying to clipboard");
    }
  };

  return (
    <Popover open={open}>
      <PopoverContent
        side="top"
        className="w-auto bg-primary px-2 py-1 text-xs text-secondary"
      >
        {clipboardContent}
      </PopoverContent>
      <PopoverTrigger asChild>
        <Button
     
          variant="outline"
          title="Copy to clipboard"
          size="icon"
          onClick={() => {
            setOpen(true);
            setTimeout(() => {
              setOpen(false);
            }, 1000);

            copyToClipboard();
          }}
        >
          {iconType === "clipboard" ? (
            <CopyIcon className="h-4 w-4" />
          ) : (
            <Share2Icon className="h-4 w-4" />
          )}
        </Button>
      </PopoverTrigger>
    </Popover>
  );
}

export default SajeonClipboardButton;
