import { PartOfSpeech } from "@/types/SajeonTypes";

export const MAX_QUERY_LENGTH: number = 50;

// Screen Sizes
// based on tailwind screen size sm
// @docs: https://tailwindcss.com/docs/responsive-design
export const MOBILE_SCREEN_BREAKPOINT: number = 640;

// Currently Defined Parts of Speech
export const PARTS_OF_SPEECH = [
  "Noun",
  "Pronoun",
  "Numeral",
  "Determiner",
  "Verb",
  "Adjective",
  "Adverb",
  "Particle",
  "Auxiliary Verb",
  "Conjunction",
  "Interjection",
  "Onomatopoeia",
  "Counter",
] as const;
