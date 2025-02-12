export type SentenceType = {
  kr: string;
  en: string;
};

export type DictionaryEntryType = {
  _id: string;
  word: string;
  romaja: string;
  hanja: string;
  definitions: string[];
  explanation: string;
  pos: string;
  sentences: SentenceType[];
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

export type SearchProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] };
};
