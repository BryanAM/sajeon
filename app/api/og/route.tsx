// Import required modules and constants
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
// Route segment config
export const runtime = "edge";

// Define a function to handle GET requests
export async function GET(req: NextRequest) {
  // Extract title from query parameters
  const { searchParams } = req.nextUrl;
  const _description: string | null = searchParams.get("description");
  const postDescription: string | null =
    _description && _description[0].toUpperCase() + _description.substring(1);

  // Fetch the Outfit font from the specified URL
  const interSemiBold: Promise<ArrayBuffer> = fetch(
    new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const fontData: ArrayBuffer = await interSemiBold;

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
          { postDescription || "An online Korean English dictionary" }
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M185.438 22.977c-39.455 7.523-58.683 44.753-46.778 90.572 1.825 7.027 4.277 13.293 10.125 25.877l2.892 6.224-10.065-9.739C98.181 93.884 37.963 100.195 20.488 148.604c-15.157 41.987 6.672 79.461 51.588 88.56 12.663 2.565 37.422 2.101 49.408-.927.86-.217-2.304 1.769-7.031 4.413-30.416 17.016-46.287 35.03-52.031 59.055-11.899 49.78 43.437 94.441 89.852 72.518 24.001-11.336 38.128-32.501 44.915-67.291l2.563-13.135.973 5.859c4.959 29.867 11.167 44.232 25.766 59.619 26.21 27.625 66.646 27.458 93.535-.387 34.256-35.473 19.942-85.497-32.815-114.681-5.806-3.212-10.49-5.885-10.407-5.94.082-.055 4.544.572 9.915 1.394 57.736 8.834 101.914-23.729 96.179-70.893-7.622-62.691-75.947-79.331-125.649-30.599-10.303 10.101-10.475 10.065-4.895-1.034 31.703-63.053-4.675-124.025-66.916-112.158m26.281 31.063c28.676 6.744 41.838 40.925 29.993 77.894-1.963 6.128-10.171 23.349-12.607 26.451l-1.371 1.745-4.183-1.942c-2.301-1.068-6.168-2.511-8.594-3.207-2.425-.697-4.481-1.324-4.569-1.394-.087-.071-.711-6.092-1.388-13.381-2.595-27.982-5.421-39.425-9.738-39.425-4.455 0-6.902 8.587-8.574 30.078-.434 5.586-1.01 13.008-1.279 16.494l-.49 6.337-4.439 1.234c-2.442.679-6.365 2.128-8.718 3.22l-4.278 1.986-1.337-1.745c-5.828-7.601-13.717-27.136-15.813-39.155-7.54-43.24 19.603-74.075 57.385-65.19m-104.258 78.372c15.23 3.864 29.983 12.901 43.859 26.866 9.482 9.543 9.175 8.232 3.563 15.234-2.471 3.082-5.02 6.383-5.664 7.335l-1.172 1.731-10.938-2.658c-33.987-8.258-43.359-8.711-43.359-2.095 0 3.765 12.137 10.517 36.118 20.095l11.508 4.596.024 6.64c.013 3.653.235 7.921.494 9.485l.47 2.844-7.315 1.75c-47.541 11.375-91.03-13.183-88.712-50.096 1.967-31.334 29.093-49.852 61.124-41.727m211.102-.767c34.22 8.068 46.155 52.736 20.61 77.138-16.195 15.47-48.539 22.168-75.009 15.534l-7.321-1.835.485-3.538c.266-1.945.491-6.213.499-9.483l.015-5.945 11.509-4.607c23.162-9.271 36.118-16.549 36.118-20.29 0-6.26-8.405-5.96-39.453 1.406a6016.317 6016.317 0 0 1-13.374 3.163c-1.324.307-2.235-.491-4.562-3.996-1.599-2.408-4.286-5.875-5.972-7.703l-3.064-3.324 8.447-8.497c22.702-22.836 49.035-33.219 71.072-28.023M149.185 240.443c1.321 2.478 3.721 5.95 5.335 7.715l2.934 3.21-8.403 13.574c-15.348 24.795-18.353 32.162-14.636 35.879 3.863 3.864 11.422-2.732 33.172-28.946 6.676-8.045 6.398-7.93 13.202-5.472 2.54.918 6.314 1.87 8.387 2.115 3.318.393 3.729.644 3.439 2.097-.181.908-.54 3.76-.797 6.338-5.557 55.583-48.095 87.936-84.125 63.983-30.865-20.519-26.248-62.089 9.885-88.997 7.906-5.887 25.899-15.791 29.056-15.992.082-.005 1.23 2.018 2.551 4.496m117.221 1.868c49.67 26.653 60.951 76.84 22.5 100.091-36.583 22.12-76.617-11.94-82.101-69.849l-.342-3.62 3.431-.47c1.887-.259 6.104-1.368 9.37-2.464 3.267-1.097 6.005-1.893 6.084-1.77 1.489 2.297 19.14 23.194 23.556 27.888 9.963 10.591 15.9 12.728 17.112 6.161.859-4.655-3.105-12.997-16.514-34.756-8.56-13.89-7.975-11.803-4.478-15.987 1.561-1.867 3.871-5.225 5.134-7.463l2.297-4.068 4.046 1.582c2.225.869 6.683 2.996 9.905 4.725" fill-rule="evenodd"/></svg>
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
