import { KindeAccessToken } from "@kinde-oss/kinde-auth-nextjs/types";

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
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export type FormActionType = (formData: FormData) => Promise<void>;

// USER TYPES
export type UserRoleType = {
  name: string;
  key: string;
  id: string;
} | null;

// NAVIGATION TYPES
export type NavigationPropTypes = {
  userRole: UserRoleType;
  isAuthenticated: boolean | null;
  accessToken: KindeAccessToken | null;
};

// KINDE TYPES
