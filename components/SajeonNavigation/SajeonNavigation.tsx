import React from "react";
import Link from "next/link";
import { SajeonThemeSelector } from "../SajeonThemeSelector/SajeonThemeSelector";

function SajeonNavigation() {
  return (
    <nav
      aria-label="Main"
      data-orientation="horizontal"
      dir="ltr"
      className="fixed  left-0 right-0 top-0 z-10 border-b-[1px]  border-b-border bg-background/95 pb-2 pl-6 pr-6 pt-2 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <ul
        data-orientation="horizontal"
        className="flex list-none justify-between"
        dir="ltr"
      >
        <li className="flex items-center">
          <Link
            className=" inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href="/"
          >
            <span className="text-lg">❀</span>사전
          </Link>
          <Link
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href="/about"
          >
            About
          </Link>
        </li>

        <li>
          <SajeonThemeSelector />
        </li>
      </ul>
    </nav>
  );
}

export default SajeonNavigation;
