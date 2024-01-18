import dbConnect from "@/lib/mongodb";
import Word from "@/models/Word";

export async function GET() {
  await dbConnect();

  // try {
  //   const words = await Word.find({}).limit(1);
  //   console.log(words);
  //   return new Response(JSON.stringify(words, null, 2), {
  //     status: 200,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // } catch (error) {
  //   return new Response(
  //     JSON.stringify({ message: (error as any).message }, null, 2),
  //     {
  //       status: 500,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   );
  // }
  try {
    // Extract query parameter from the request URL
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get('q') || '';

    let query = {};
    if (searchQuery) {
      // Use a regular expression for a simple text search
      query.text = { $regex: searchQuery, $options: 'i' };
    }

    const words = await Word.find(query).limit(5); // Updated query
    console.log(words);

    return new Response(JSON.stringify(words, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: (error as any).message }, null, 2),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
