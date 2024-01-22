'use server';

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
  
}

export async function updateDatabase(formData: FormData) {
  const updated_data = {
    _id: formData.get('_word-id'),
    word: formData.get('word'),
    romaja: formData.get('romaja'),
    hanja: formData.get('hanja'),
    definitions: formData.getAll("definition"),
    // explanation: formData.get('romaja'),
    pos: formData.get('pos'),
    sentences: Array.from(formData.entries()).map((data) => {
      console.log(data);
    })
  }

  console.log('Word ID: ', updated_data);
  
}
