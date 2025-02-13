import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DictionaryEntryType } from "@/types/SajeonTypes";

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

/**
 * Compute a relevance score for a document based on the query.
 * Prioritizes an exact match in Korean (word) or romaja over definitions.
 *
 * word - A word with fields such as `word`, `romaja`, and `definitions`
 * query - The full user query (e.g., "평화 coffee")
 *  A numeric score representing how relevant the document is.
 */
export function computeRelevanceScore(
  word: Pick<DictionaryEntryType, "word" | "romaja" | "definitions">,
  query: string,
) {
  let score = 0;
  const normalizedQuery = query.trim().toLowerCase();

  // --- Exact match on the full query for Korean (word) and romaja ---
  if (word.word && word.word.toLowerCase() === normalizedQuery) {
    score += 1000; // Highest priority for exact Korean match
  }
  if (word.romaja && word.romaja.toLowerCase() === normalizedQuery) {
    score += 1000; // Exact romaja match gets slightly lower than word exact match
  }

  // Tokenize the query for finer-grained scoring.
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  tokens.forEach((token) => {
    // --- Korean (word) field scoring ---
    if (word.word) {
      const wordLower = word.word.toLowerCase();
      if (wordLower === token) {
        score += 70; // Exact token match in Korean field
      } else if (wordLower.includes(token)) {
        score += 40; // Partial match in Korean field
      }
    }

    // --- Romaja field scoring ---
    if (word.romaja) {
      const romajaLower = word.romaja.toLowerCase();
      if (romajaLower === token) {
        score += 60; // Exact token match in romaja
      } else if (romajaLower.includes(token)) {
        score += 30; // Partial match in romaja
      }
    }

    // --- Definitions field scoring ---
    if (word.definitions && Array.isArray(word.definitions)) {
      word.definitions.forEach((def) => {
        const defLower = def.toLowerCase();
        if (defLower === token) {
          score += 40; // Exact match in definitions (lower priority)
        } else if (defLower.includes(token)) {
          score += 20; // Partial match in definitions
        }
      });
    }
  });

  return score;
}

/**
 * Sorts documents based on the computed relevance score.
 *
 * words - Array of words to be sorted.
 * query - The user query to score relevance against.
 * Sorted array of documents (highest scoring first).
 */
export function sortDocumentsByRelevance(
  words: DictionaryEntryType[],
  query: string,
) {
  return words.sort((a, b) => {
    const scoreA = computeRelevanceScore(a, query);
    const scoreB = computeRelevanceScore(b, query);
    return scoreB - scoreA; // Descending order: higher scores come first.
  });
}
