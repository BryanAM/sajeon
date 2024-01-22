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

export type SajeonDataModelType = {
  _id: string,
  word: string,
  romaja: string,
  hanja: string,
  definitions: Array<string>,
  explanation: string,
  pos: string,
  sentences: Array<SajeonSentenceTranslationType>
}