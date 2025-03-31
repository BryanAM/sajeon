"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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

import { Text, PencilOff, List } from "lucide-react";

const PART_OF_SPEECH = [
  "Noun",
  "Adjective",
  "Verb",
  "Noun, 하다",
  "Adverb",
  "Particle",
  "Pronoun",
  "Determiner",
  "Interjection",
] as const;

export type PartOfSpeech = (typeof PART_OF_SPEECH)[number];

const formSchema = z.object({
  _wordId: z.string(),
  word: z.string().min(1, {
    message: "Hangul must be at least 1 characters.",
  }),
  romaja: z
    .string()
    .min(1, {
      message: "Romaja must be at least 1 characters.",
    })
    .optional(),
  hanja: z
    .string()
    .min(1, {
      message: "Hanja must be at least 1 characters.",
    })
    .optional(),
  pos: z
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .refine((val) => !val || PART_OF_SPEECH.includes(val as PartOfSpeech), {
      message: "Please select a valid part of speech.",
    })
    .optional(),
});

export function MooncakesEditForm({ word }: { word: DictionaryEntryType }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _wordId: word._id,
      word: word.word || "",
      romaja: word.romaja || "",
      hanja: word.hanja || "",
      pos: typeof word.pos === "string" ? word.pos : "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="_wordId"
          render={({ field }) => (
            <FormItem className="grid grid-cols-6 items-center">
              <FormLabel className="col-span-2 font-normal text-muted-foreground">
                <span className="flex items-start">
                  <PencilOff size={14} className="mx-2" /> ID
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  className="col-span-4 mt-0 font-normal"
                  placeholder="+ add hangul"
                  variant="naked"
                  spellCheck={false}
                  readOnly
                  tabIndex={-1}
                  disabled
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is word ID. It can't be modified.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="word"
          render={({ field }) => (
            <FormItem className="grid grid-cols-6 items-center">
              <FormLabel className="col-span-2 font-normal text-muted-foreground">
                <span className="flex items-start">
                  <Text size={14} className="mx-2" /> Korean
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  className="col-span-4 mt-0 font-light"
                  placeholder="+ add hangul"
                  variant="naked"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is the korean word written in hangul
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="romaja"
          render={({ field }) => (
            <FormItem className="grid grid-cols-6 items-center">
              <FormLabel className="col-span-2 font-normal text-muted-foreground">
                <span className="flex items-start">
                  <Text size={14} className="mx-2" /> Romaja
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  className="col-span-4 mt-0 font-light"
                  placeholder="+ add romaja"
                  variant="naked"
                  spellCheck={false}
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is the romaja for the korean word.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hanja"
          render={({ field }) => (
            <FormItem className="grid grid-cols-6 items-center">
              <FormLabel className="col-span-2 font-normal text-muted-foreground">
                <span className="flex items-start">
                  <Text size={14} className="mx-2" /> Hanja
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  className="col-span-4 mt-0 font-light"
                  placeholder="+ add hanja"
                  spellCheck={false}
                  variant="naked"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is the hanja for the korean word.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pos"
          render={({ field }) => {
            const isValidValue = PART_OF_SPEECH.includes(String(field.value));
            const posValue = field.value ? field.value : "";

            return (
              <FormItem className="grid grid-cols-6 items-center">
                <FormLabel className="col-span-2 font-normal text-muted-foreground">
                  <span className="flex items-start">
                    <List size={14} className="mx-2" /> Part of Speech
                  </span>
                </FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className="col-span-4 mt-1 border-0 font-light ring-0 hover:bg-muted focus:border-[1px] focus:border-muted-heavy  focus:bg-white focus:shadow-md focus:ring-0 focus:ring-offset-0  focus-visible:outline-none"
                      placeholder="select part of speech"
                    >
                      <SelectValue placeholder="select part of speech" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-80">
                    {!isValidValue && (
                      <SelectItem
                        disabled
                        className="font-light"
                        value={posValue}
                      >
                        {posValue}
                      </SelectItem>
                    )}

                    {PART_OF_SPEECH.map((pos) => (
                      <SelectItem
                        className="text-lg font-light"
                        key={pos}
                        value={pos}
                      >
                        {pos}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormDescription className="sr-only">
                  This is the part of speech for the korean word.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <DialogFooter className="justify-between gap-2 px-4">
          <DialogClose
            className={buttonVariants({ variant: "outline" })}
            type="button"
          >
            Discard Changes
          </DialogClose>

          <SajeonToastButton variant="default">Save Changes</SajeonToastButton>
        </DialogFooter>
      </form>
    </Form>
  );
}
