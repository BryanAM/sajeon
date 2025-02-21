import { MAX_QUERY_LENGTH } from "@/lib/constants";
import dbConnect from "@/lib/mongodb";
import Word from "@/models/Word";

export async function getData(cleanedQuery: string) {
  try {
    await dbConnect();
  } catch {
    throw Error("We couldn't connect to the database. Try again!");
  }

  try {
    // Limit query length to prevent abuse
    if (cleanedQuery.length > MAX_QUERY_LENGTH) {
      throw Error("Search query is too long.");
    }

    const koreanCharsRegex = /[\uAC00-\uD7A3]/;
    const tokens = cleanedQuery.split(/\s+/).filter(Boolean);

    /*
    each token will be search either in Korean or English 
    e.g. 평화 book => [평화, book] where 평화 => { word: 평화 } 
    {definitions: book} or { romaja: book}
     */
    const conditions = tokens.map((token) => {
      const tokenRegex = new RegExp(token, "i");
      return koreanCharsRegex.test(token)
        ? { word: tokenRegex }
        : { $or: [{ definitions: tokenRegex }, { romaja: tokenRegex }] };
    });

    /**
     * If we have a compound allow results from each token so
     * 평화 book will return restuls from either the first or second
     */
    const query = { $or: conditions };

    const words = await Word.find(query).limit(100).lean(); // Updated query
    return new Response(JSON.stringify(words), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw Error("We ran into an issue fetching your results. Try again!");
  }
}
