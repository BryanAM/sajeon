import SajeonNavigation from "@/components/SajeonNavigation/SajeonNavigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import SajeonFooter from "@/components/SajeonFooter/SajeonFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description:
    "Search for Korean and English words online with Sajeon, a sleek, responsive, and beautiful dictionary.",
  keywords: ["korean dictionary", "korean english dictionary", "study korean", "learn korean", "korean words"],
  metadataBase: new URL(`${process.env.BASE_URL}`),
  openGraph: {
    images: ["/api/og"],
  },
  title: "Sleek and Intuitive Korean Dictionary For Korean Learners.",
  twitter: {
    // shows large image on twitter
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className}`}>
        <div className="m-auto max-w-5xl">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SajeonNavigation />
            <div className="mt-[88px] p-6">{children}</div>
            <SajeonFooter />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
