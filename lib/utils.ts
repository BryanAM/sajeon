import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param query
 * @returns string
 *
 * ✅ Remove any unexpected characters (only allow Korean, English, numbers, spaces, and hyphens)
 * ✅ Supports fully-formed Hangul (e.g., "학교", "공부")
 * ✅ Supports Jamo (e.g., "ㅎㅏㄴㄱㅡㄹ")
 * ✅ Supports Hanja (e.g., "學校", "法律", "韓國")
 * ✅ Keeps English, numbers, spaces, hyphens, and apostrophes
 * ✅ Removes any unexpected or unsafe symbols
 */
export function safeQuery(query: string) {
  return query
    .normalize("NFC") // Normalize Unicode (fixes different forms of Hangul)
    .replace(/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9\u4E00-\u9FFF\s'-]/g, "");
}
