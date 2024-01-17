export type SajeonSentenceTranslationType = {
  kr: string;
  en: string;
};

export type SajeonVocabCardType = {
  ID: number;
  word: string;
  romaja?: string;
  hanja?: string;
  definitions: Array<string>;
  pos?: Array<string>;
  sentences?: Array<SajeonSentenceTranslationType>;
};
