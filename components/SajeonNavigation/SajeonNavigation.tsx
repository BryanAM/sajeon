import React from "react";
import Link from "next/link";

function SajeonNavigation() {
  return (
    <div>
      <nav
        aria-label="Main"
        data-orientation="horizontal"
        dir="ltr"
        className="flex max-w-max flex-1 items-center justify-center"
      >
        <ul
          data-orientation="horizontal"
          className="group flex flex-1 list-none items-center justify-center space-x-1"
          dir="ltr"
        >
          <li>
            <Link
              className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SajeonNavigation;
