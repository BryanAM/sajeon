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
 * Removed Empty space on ends of string
 * All queries should be lower case
 */
export function cleanQuery(query: string) {
  return query.trim().toLowerCase();
}
