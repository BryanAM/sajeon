import SajeonNavigation from "@/components/SajeonNavigation/SajeonNavigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sleek and Intuitive Korean Dictionary For Korean Learners.",
  description:
    "Search for Korean and English words online with Sajeon, a sleek, responsive, and beautiful dictionary.",
  twitter: {
    // shows large image on twitter
    card: "summary_large_image",
  },
  openGraph: {
    images: ["/api/og"],
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
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
