// Import required modules and constants
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
// Route segment config
export const runtime = "edge";

// Define a function to handle GET requests
export async function GET(req: NextRequest) {
  // Extract title from query parameters
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const postDescription = searchParams.get("description");
  console.log("post", postDescription);

  // Fetch the Outfit font from the specified URL
  const interSemiBold = fetch(
    new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const fontData = await interSemiBold;

  // Create an ImageResponse with dynamic content
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #FFFFFF, #ebebeb)",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingBottom: 112,
            flexDirection: "row",
            alignItems: "center",
            alignContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: 500,
              fontFamily: "Inter",
              letterSpacing: "-0.05em",
              fontStyle: "normal",
              lineHeight: "515px",
              color: "#f5f5f5",
              whiteSpace: "pre-wrap",
              textShadow:
                "-29px 25px #171717, 2px -6px #171717, 4px 4px #171717, -5px -4px #171717, 5px -5px #171717",
            }}
          >
            Sajeon
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontFamily: "Inter",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "black",
            alignItems: "flex-end",
            lineHeight: "100px",
            whiteSpace: "pre-wrap",
          }}
        >
          An online Korean English dictionary
          <img
            width={50}
            height={50}
            src={`${process.env.BASE_URL}/assets/opengraph-icon.png`}
            alt="Sajeon a Korean English Dictionary"
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
