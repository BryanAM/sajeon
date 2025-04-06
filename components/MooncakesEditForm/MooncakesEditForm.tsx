"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DictionaryEntryType, SentenceType } from "@/types/SajeonTypes";
import { Input } from "@/components/ui/input";
import { Text, PencilOff, List, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

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
  definitions: z
    .array(z.object({ id: z.string(), value: z.string() }))
    .optional(),
  sentences: z
    .array(z.object({ id: z.string(), kr: z.string(), en: z.string() }))
    .default([]),
});

// A helper to generate unique IDs.
const generateUniqueId = () =>
  `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

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
      definitions: (word.definitions || []).map((def) => ({
        id: generateUniqueId(),
        value: def,
      })),
      sentences: (word.sentences || []).map((sentence: SentenceType) => ({
        id: generateUniqueId(),
        kr: sentence.kr,
        en: sentence.en,
      })),
    },
  });

  // Use the useFieldArray hook for dynamic definitions.
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "definitions",
  });

  // Use the useFieldArray hook for dynamic definitions.
  const {
    fields: sentenceFields,
    append: sentenceAppend,
    remove: sentenceRemove,
  } = useFieldArray({
    control: form.control,
    name: "sentences",
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validaated.
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
            const isValidValue = PART_OF_SPEECH.includes(field.value);
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
        {/* DEFINITIONS */}
        <div className="grid grid-cols-6 items-center gap-2">
          <FormLabel className="col-span-2 font-normal text-muted-foreground">
            <span className="flex items-start">
              <Text size={14} className="mx-2" /> Definitions
            </span>
          </FormLabel>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="col-span-4 col-start-3 flex font-light"
            >
              <FormField
                control={form.control}
                name={`definitions.${index}.value`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="font-light"
                        variant="naked"
                        placeholder={`Enter definition ${index + 1}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-2 text-sm text-muted-foreground"
              >
                <Trash2
                  size={16}
                  aria-label={`delete definition ${field.value}`}
                />
              </button>
            </div>
          ))}

          <Button
            type="button"
            variant="ghost"
            onClick={() => append({ value: "", id: generateUniqueId() })}
            className="col-start-3 w-max justify-start text-muted-foreground"
          >
            + Add Definition
          </Button>
        </div>

        {/* SENTENCES */}
        <div className="relative grid grid-cols-6 items-center gap-2">
          <FormLabel className="col-span-2 font-normal text-muted-foreground">
            <span className="flex items-start">
              <Text size={14} className="mx-2" /> Sentences
            </span>
          </FormLabel>
          {sentenceFields.map((field, index) => (
            <div
              key={field.id}
              className="col-span-4 col-start-3 flex font-light"
            >
              <FormField
                control={form.control}
                name={`sentences.${index}.kr`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...field}
                        className="font-light focus:absolute focus:inset-0 focus:-top-10 md:focus:static md:focus:top-0"
                        variant="naked"
                        placeholder={`Enter korean sentence ${index + 1}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`sentences.${index}.en`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="font-light focus:absolute focus:inset-0 focus:-top-10 md:focus:static md:focus:top-0"
                        variant="naked"
                        placeholder={`Enter english sentence ${index + 1}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="button"
                onClick={() => sentenceRemove(index)}
                className="px-2 text-sm text-muted-foreground"
              >
                <Trash2
                  size={16}
                  aria-label={`delete definition ${field.en}}`}
                />
              </button>
            </div>
          ))}

          <Button
            type="button"
            variant="ghost"
            onClick={() =>
              sentenceAppend({ id: generateUniqueId(), kr: "", en: "" })
            }
            className="col-start-3 w-max justify-start text-muted-foreground"
          >
            + Add Sentence
          </Button>
        </div>
      </form>
    </Form>
  );
}
