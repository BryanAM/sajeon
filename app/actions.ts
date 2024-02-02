"use server";

import Word from "@/models/Word";
import dbConnect from "@/lib/mongodb";

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

/**
 *
 * @param formData
 * @description when a authorized user changes the data in mooncakes, a form action is fired
 * that will update the database and respective word.
 */
export async function updateDatabase(formData: FormData) {
  /**
   *
   * @returns an array of sentences to replace the DB entry.
   */
  const formatSentenceObject = (): { kr: string; en: string }[] => {
    let updatedSentences: { kr: string; en: string }[] = [];
    for (const [key, val] of formData.entries()) {
      // target sentences only
      if (key.includes("kr") || key.includes("en")) {
        const _strSentenceIndex: string | undefined = key.split("-").pop();
        const sentenceIndex: number = Number(_strSentenceIndex) - 1;

        // if that entry doesn't exist, create item in array before we push values
        if (!updatedSentences[sentenceIndex]) {
          updatedSentences.push({ kr: "", en: "" });
        }

        if (key.includes("kr")) {
          updatedSentences[sentenceIndex].kr = String(val);
        } else {
          updatedSentences[sentenceIndex].en = String(val);
        }
      }
    }

    return updatedSentences;
  };

  const updatedData = {
    _id: formData.get("_word-id"),
    word: formData.get("word"),
    romaja: formData.get("romaja"),
    hanja: formData.get("hanja"),
    definitions: formData.getAll("definition"),
    // explanation: formData.get('romaja'),
    pos: formData.get("pos"),
    sentences: formatSentenceObject(),
  };

  await dbConnect();
  try {
    // Find the Word record by ID and update it in the DB
    await Word.findByIdAndUpdate(updatedData._id, updatedData);
    console.log(`Succesfully updated record ${updatedData}`);
  } catch (error) {
    return new Response(JSON.stringify({ message: (error as any).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
