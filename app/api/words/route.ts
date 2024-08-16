import Word from "@/models/Word";
import dbConnect from "@/lib/mongodb";

export async function GET() {
  await dbConnect();
  try {
    const words = await Word.find({}).limit(100);
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
