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

/**
 * Compute a relevance score for a document based on the query.
 * Prioritizes an exact match in Korean (word) or romaja over definitions.
 *
 * @param {Object} doc - A document with fields such as `word`, `romaja`, and `definitions`
 * @param {string} query - The full user query (e.g., "평화 coffee")
 * @returns {number} A numeric score representing how relevant the document is.
 */
export function computeRelevanceScore(doc, query) {
  let score = 0;
  const normalizedQuery = query.trim().toLowerCase();

  // --- Exact match on the full query for Korean (word) and romaja ---
  if (doc.word && doc.word.toLowerCase() === normalizedQuery) {
    score += 100; // Highest priority for exact Korean match
  }
  if (doc.romaja && doc.romaja.toLowerCase() === normalizedQuery) {
    score += 90; // Exact romaja match gets slightly lower than word exact match
  }

  // Tokenize the query for finer-grained scoring.
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  tokens.forEach((token) => {
    // --- Korean (word) field scoring ---
    if (doc.word) {
      const wordLower = doc.word.toLowerCase();
      if (wordLower === token) {
        score += 70; // Exact token match in Korean field
      } else if (wordLower.includes(token)) {
        score += 40; // Partial match in Korean field
      }
    }

    // --- Romaja field scoring ---
    if (doc.romaja) {
      const romajaLower = doc.romaja.toLowerCase();
      if (romajaLower === token) {
        score += 60; // Exact token match in romaja
      } else if (romajaLower.includes(token)) {
        score += 30; // Partial match in romaja
      }
    }

    // --- Definitions field scoring ---
    if (doc.definitions && Array.isArray(doc.definitions)) {
      doc.definitions.forEach((def) => {
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
 * @param {Array} docs - Array of documents to be sorted.
 * @param {string} query - The user query to score relevance against.
 * @returns {Array} Sorted array of documents (highest scoring first).
 */
export function sortDocumentsByRelevance(docs, query) {
  return docs.sort((a, b) => {
    const scoreA = computeRelevanceScore(a, query);
    const scoreB = computeRelevanceScore(b, query);
    return scoreB - scoreA; // Descending order: higher scores come first.
  });
}
