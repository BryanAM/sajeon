import SajeonNavigation from "@/components/SajeonNavigation/SajeonNavigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import SajeonFooter from "@/components/SajeonFooter/SajeonFooter";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description:
    "Search for Korean and English words online with Sajeon, a sleek, responsive, and beautiful dictionary.",
  keywords: [
    "korean dictionary",
    "korean english dictionary",
    "study korean",
    "learn korean",
    "korean words",
  ],
  metadataBase: new URL(`${process.env.BASE_URL}`),
  openGraph: {
    images: ["/api/og"],
  },
  title: "Sleek and Intuitive Korean Dictionary For Korean Learners.",
  twitter: {
    // shows large image on twitter
    card: "summary_large_image",
  },
  appleWebApp: {
    capable: true,
    title: "Sajeon",
    statusBarStyle: "black-translucent",
    startupImage: `${process.env.BASE_URL}/apple-touch-icon-180x180.png`,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon-57x57.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon-60x60.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon-76x76.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon-120x120.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon-152x152.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "167x167",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon-167x167.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      type: "image/png",
      url: `${process.env.BASE_URL}/apple-touch-icon-180x180.png`,
    },
    {
      rel: "icon",
      url: `${process.env.BASE_URL}/favicon.ico`,
      type: "image/x-icon",
      sizes: "16x16",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="relative flex min-h-full flex-col"
      lang="en"
      suppressHydrationWarning={true}
    >
      <body className={`sajeon-body mb-[112px] grow ${inter.className}`}>
        <div className="m-auto max-w-5xl">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SajeonNavigation />
            <div className="mt-[88px] min-h-[100svh]  p-6">{children}</div>
          </ThemeProvider>
        </div>
        <SajeonFooter />
        <Toaster />
      </body>
    </html>
  );
}
