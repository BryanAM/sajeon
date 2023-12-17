import SajeonNavigation from "@/components/SajeonNavigation/SajeonNavigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajeon",
  description: "Sleek and easy to use online Korean dictionary.",
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
            <div className="p-6 mt-[88px]">{children}</div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
