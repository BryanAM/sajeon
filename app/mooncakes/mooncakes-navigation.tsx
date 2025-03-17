"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const MooncakesNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="">
      <ul className="flex gap-2 py-4">
        <li
          className={`p-1 text-sm transition-all duration-500 ease-in-out 
            ${pathname === "/mooncakes" ? "scale-105 rounded-sm bg-muted font-semibold opacity-100" : "scale-100 opacity-80"}`}
        >
          <Link href="/mooncakes">Dashboard</Link>
        </li>
        <li
          className={`p-1 text-sm transition-all duration-500 ease-in-out 
            ${pathname === "/mooncakes/edit" ? "scale-105 rounded-sm bg-muted font-semibold opacity-100" : "scale-100 opacity-80"}`}
        >
          <Link href="/mooncakes/edit">Edit Words</Link>
        </li>
        <li
          className={`p-1 text-sm transition-all duration-500 ease-in-out 
            ${pathname === "/mooncakes/feedback" ? "scale-105 rounded-sm bg-muted font-semibold opacity-100" : "scale-100 opacity-80"}`}
        >
          <Link href="/mooncakes/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
};
