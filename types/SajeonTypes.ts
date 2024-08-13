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
  _id: string;
  word: string;
  romaja: string;
  hanja: string;
  definitions: Array<string>;
  explanation: string;
  pos: string;
  sentences: Array<SajeonSentenceTranslationType>;
};

export type TeamMemberType = {
  name: string;
  role: string;
  avatarURL: string;
  avatarFallback: string;
  avatarAlt: string;
  intro: string;
  linkedinURL: string;
  githubURL?: string | undefined;
  websiteURL?: string | undefined;
  websiteTag?: string | undefined;
  key: number;
};
