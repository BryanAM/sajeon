"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { z } from "zod";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

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
import { DictionaryEntryType } from "@/types/SajeonTypes";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Text, PencilOff, List, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { PARTS_OF_SPEECH } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";

// CJK Unified Ideographs = Hanja
const hanjaRegex = /^[\u4E00-\u9FFF]+$/;
const hangulRegex = /^[가-힣\s]+$/;
/**
 * safeInputRegex:
 *  - Ensures the string does NOT contain any of these unsafe characters:
 *      <   (less‑than)
 *      >   (greater‑than)
 *      `   (backtick)
 *      \   (backslash)
 *  - Allows everything else (letters, digits, punctuation, quotes, semicolons, slashes, emojis, whitespace, newlines, etc.).
 */
const safeInputRegex = /^(?![\s\S]*[<>`\\])[\s\S]*$/;

const formSchema = z.object({
  _wordId: z.string(),
  word: z
    .string()
    .min(1, {
      message: "Korean requires at least 1 character",
    })
    .regex(hangulRegex, { message: "Only Korean characters are allowed." })
    .regex(safeInputRegex, { message: "Remove any <, >, `, \\" }),
  romaja: z
    .string()
    .min(1, {
      message: "Romaja must be at least 1 character.",
    })
    .regex(safeInputRegex, { message: "Remove any <, >, `, \\" }),
  hanja: z
    .string()
    .regex(safeInputRegex, { message: "Remove any <, >, `, \\" })
    .optional()
    .refine(
      (val) =>
        val === undefined || val === null || val === "" || hanjaRegex.test(val),
      {
        message: "Hanja must be valid Chinese characters.",
      },
    ),
  pos: z.enum(PARTS_OF_SPEECH, {
    errorMap: () => ({ message: "Please select a part of speech." }),
  }),
  definitions: z
    .array(
      z.object({
        value: z
          .string()
          .regex(safeInputRegex, { message: "Remove any <, >, `, \\" })
          .min(1, { message: "Definitions require at least 1 character." }),
      }),
    )
    .min(1, {
      message: "At least 1 definition is required.",
    }),
  sentences: z
    .array(
      z.object({
        kr: z
          .string()
          .regex(safeInputRegex, { message: "Remove any <, >, `, \\" })
          .min(1, { message: "Definitions require at least 1 character." }),
        en: z
          .string()
          .regex(safeInputRegex, { message: "Remove any <, >, `, \\" })
          .min(1, { message: "Definitions require at least 1 character." }),
      }),
    )
    .min(1, {
      message: "At least 1 setences is required.",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export function MooncakesEditForm({ word }: { word: DictionaryEntryType }) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _wordId: word._id,
      word: word.word || "",
      romaja: word.romaja || "",
      hanja: word.hanja || "",
      pos: word.pos || "",
      definitions: (word.definitions || []).map((def) => ({ value: def })),
      sentences: word.sentences || [],
    },
  });

  // useFieldArray hook for dynamic definitions.
  const {
    fields: definitionsFields,
    append: definitionsAppend,
    remove: definitionsRemove,
  } = useFieldArray({
    control: form.control,
    name: "definitions",
  });

  const {
    fields: sentenceFields,
    append: sentenceAppend,
    remove: sentenceRemove,
  } = useFieldArray({
    control: form.control,
    name: "sentences",
  });

  // 2. Define a submit handler.
  function onValid(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validaated.
    const payload = {
      ...data,
      definitions: data.definitions.map((def) => def.value),
    };
    console.log("submit called", payload);

    // might be better to POST get the return and then write the approprate toast
  }

  function onInvalid(errors: FieldErrors<FormSchema>) {
    console.log("error: ", errors);
  }

  return (
    <>
      {form.formState.isDirty && (
        <Badge className="fixed right-10 top-[13px]">Unsaved Changes</Badge>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onValid, onInvalid)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="_wordId"
            render={({ field }) => (
              <FormItem className="grid grid-cols-6 items-center">
                <FormLabel className="col-span-2 font-normal text-muted-foreground md:col-span-1">
                  <span className="flex items-start">
                    <PencilOff size={14} className="mx-2" /> ID
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="col-span-4 mt-0 font-normal md:col-span-5"
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
                <FormMessage className="col-span-4 col-start-3 pl-2 md:col-span-5 md:col-start-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="word"
            render={({ field, fieldState }) => (
              <FormItem className="grid grid-cols-6 items-center">
                <FormLabel className="col-span-2 font-normal text-muted-foreground md:col-span-1">
                  <span className="flex items-start">
                    <Text size={14} className="mx-2" /> Korean
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="col-span-4 mt-0 font-light md:col-span-5"
                    placeholder="+ add hangul"
                    variant={!!fieldState.error ? "nakedError" : "naked"}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  This is the korean word written in hangul
                </FormDescription>
                <FormMessage className="col-span-4 col-start-3 pl-2 md:col-span-5 md:col-start-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="romaja"
            render={({ field, fieldState }) => (
              <FormItem className="grid grid-cols-6 items-center">
                <FormLabel className="col-span-2 font-normal text-muted-foreground md:col-span-1">
                  <span className="flex items-start">
                    <Text size={14} className="mx-2" /> Romaja
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="col-span-4 mt-0 font-light md:col-span-5"
                    placeholder="+ add romaja"
                    variant={!!fieldState.error ? "nakedError" : "naked"}
                    spellCheck={false}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  This is the romaja for the korean word.
                </FormDescription>
                <FormMessage className="col-span-4 col-start-3 pl-2 md:col-span-5 md:col-start-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hanja"
            render={({ field, fieldState }) => (
              <FormItem className="grid grid-cols-6 items-center">
                <FormLabel className="col-span-2 font-normal text-muted-foreground md:col-span-1">
                  <span className="flex items-start">
                    <Text size={14} className="mx-2" /> Hanja
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="col-span-4 mt-0 font-light md:col-span-5"
                    placeholder="+ add hanja"
                    spellCheck={false}
                    variant={!!fieldState.error ? "nakedError" : "naked"}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  This is the hanja for the korean word.
                </FormDescription>
                <FormMessage className="col-span-4 col-start-3 pl-2 md:col-span-5 md:col-start-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pos"
            render={({ field, fieldState }) => {
              const isValidValue = PARTS_OF_SPEECH.includes(field.value);
              const posValue = field.value ? field.value : "";

              return (
                <FormItem className="grid grid-cols-6 items-center">
                  <FormLabel className="col-span-2 font-normal text-muted-foreground md:col-span-1">
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
                        className={`
                        col-span-4 mt-1
                        border ${fieldState.error ? "border-destructive" : "border-transparent"}
                        font-light ring-0
                        hover:bg-muted
                        focus:border focus:border-muted-heavy focus:bg-background focus:shadow-md focus:ring-0 focus:ring-offset-0 focus-visible:outline-none
                        md:col-span-5
                      `}
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

                      {PARTS_OF_SPEECH.map((pos) => (
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
                  <FormMessage className="col-span-4  col-start-3 pl-2 md:col-span-5 md:col-start-2" />
                </FormItem>
              );
            }}
          />
          {/* DEFINITIONS */}
          <div className="grid grid-cols-6 items-center gap-2">
            <FormLabel className="col-span-2 font-normal text-muted-foreground md:col-span-1">
              <span className="flex items-start">
                <Text size={14} className="mx-2" /> Definitions
              </span>
            </FormLabel>
            {definitionsFields.map((field, index) => (
              <div
                key={field.id}
                className="col-span-4 col-start-3 flex font-light md:col-span-5 md:col-start-2"
              >
                <FormField
                  control={form.control}
                  name={`definitions.${index}.value`}
                  render={({ field, fieldState }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          className="font-light"
                          variant={!!fieldState.error ? "nakedError" : "naked"}
                          placeholder={`Enter definition ${index + 1}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="col-span-4 col-start-3 pl-2 md:col-span-5 md:col-start-2" />
                    </FormItem>
                  )}
                />

                {index >= 1 && (
                  <button
                    type="button"
                    onClick={() => definitionsRemove(index)}
                    className="px-2 text-sm text-muted-foreground"
                  >
                    <Trash2
                      size={16}
                      aria-label={`delete definition ${field}`}
                    />
                  </button>
                )}
              </div>
            ))}

            <Button
              type="button"
              variant="ghost"
              onClick={() => definitionsAppend({ value: "" })}
              className="col-start-3 w-max justify-start text-muted-foreground md:col-start-2"
            >
              + Add Definition
            </Button>
          </div>
          {/* SENTENCES */}
          <div className=" grid grid-cols-6 items-center gap-4">
            <FormLabel className="col-span-2 self-start pt-3 font-normal text-muted-foreground md:col-span-1">
              <span className="flex items-start">
                <Text size={14} className="mx-2" /> Sentences
              </span>
            </FormLabel>
            {sentenceFields.map((field, index) => (
              <div
                key={field.id}
                className="col-span-4 col-start-3 grid grid-cols-12 gap-2 font-light md:col-span-5 md:col-start-2"
              >
                <div className="col-span-11 flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name={`sentences.${index}.kr`}
                    render={({ field, fieldState }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            {...field}
                            className="font-light focus:inset-0 focus:-top-10 md:focus:static md:focus:top-0"
                            variant={
                              !!fieldState.error ? "nakedError" : "naked"
                            }
                            placeholder={`Enter korean sentence ${index + 1}`}
                          />
                        </FormControl>
                        <FormMessage className="col-span-4 col-start-3 pl-2 md:col-span-5 md:col-start-2" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`sentences.${index}.en`}
                    render={({ field, fieldState }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            className="font-light focus:inset-0 focus:-top-10 md:focus:static md:focus:top-0"
                            variant={
                              !!fieldState.error ? "nakedError" : "naked"
                            }
                            placeholder={`Enter english sentence ${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="col-span-4 col-start-3 pl-2 md:col-span-5 md:col-start-2" />
                      </FormItem>
                    )}
                  />
                </div>
                {index >= 1 && (
                  <button
                    type="button"
                    onClick={() => sentenceRemove(index)}
                    className="col-span-1 justify-self-end px-2 text-sm text-muted-foreground"
                  >
                    <Trash2
                      size={16}
                      aria-label={`delete sentence ${field.en}}`}
                    />
                  </button>
                )}
                <Separator className="col-span-full md:hidden" />
              </div>
            ))}

            <Button
              type="button"
              variant="ghost"
              onClick={() => sentenceAppend({ kr: "", en: "" })}
              className="col-start-3 w-max justify-start text-muted-foreground md:col-start-2"
            >
              + Add Sentence
            </Button>
          </div>
          <DialogFooter className="justify-between gap-2 px-4 pt-6">
            <DialogClose
              className={buttonVariants({ variant: "outline" })}
              type="button"
            >
              Discard Changes
            </DialogClose>

            <Button>Save Changes</Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
