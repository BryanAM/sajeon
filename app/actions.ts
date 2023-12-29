'use server';

import { redirect } from 'next/navigation'

/**
 *
 * @param formData
 * @description handles a user's search query from any Sajeon Search component. If we have some complicated things 
 *
 */
export async function formAction(formData: FormData) {
  // do something with the query if we need to on the backend like tally frequency
  const _searchQuery: FormDataEntryValue | null = formData.get("search");
  const queryString = String(_searchQuery).trim();

  // Navigate to the new post page
  // EncodeURIComponent to handle ALL special characters e.g. " ; @" 
  if(queryString) {
    redirect(`/search/${encodeURIComponent(queryString)}`)
  }
}
