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
    .min(1, {
      message: "Part of speech must be at least 1 characters.",
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
      pos: word.pos || "",
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
          render={({ field }) => (
            <FormItem className="grid grid-cols-6 items-center">
              <FormLabel className="col-span-2 font-normal text-muted-foreground">
                <span className="flex items-start">
                  <List size={14} className="mx-2" /> Part of Speech
                </span>
              </FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="mt-1 text-lg">
                    <SelectValue placeholder="select part of speech" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-80">
                  <SelectItem className="text-lg" value="Noun">
                    Noun
                  </SelectItem>
                  <SelectItem className="text-lg" value="Adjective">
                    Adjective
                  </SelectItem>
                  <SelectItem className="text-lg" value="Verb">
                    Verb
                  </SelectItem>
                  <SelectItem className="text-lg" value="Noun, 하다">
                    Noun / 하다
                  </SelectItem>
                  <SelectItem className="text-lg" value="Adverb">
                    Adverb
                  </SelectItem>
                  <SelectItem className="text-lg" value="Particle">
                    Particle
                  </SelectItem>
                  <SelectItem className="text-lg" value="Pronoun">
                    Pronoun
                  </SelectItem>
                  <SelectItem className="text-lg" value="Determiner">
                    Determiner
                  </SelectItem>
                  <SelectItem className="text-lg" value="Interjection">
                    Interjection
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormDescription className="sr-only">
                This is the hanja for the korean word.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
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
