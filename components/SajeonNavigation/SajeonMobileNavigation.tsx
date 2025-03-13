"use client";

import Link from "next/link";
import { SajeonThemeSelector } from "../SajeonThemeSelector/SajeonThemeSelector";
import { ShieldUserIcon, UserPenIcon } from "lucide-react";
import SajeonAuthButtons from "../SajeonAuthButtons/SajeonAuthButtons";
import { NavigationPropTypes } from "@/types/SajeonTypes";
import { hasClientPermissions } from "@/lib/client-auth-utils";
import { MOONCAKE_PERMISSIONS } from "@/app/api/auth/app-permissions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SajeonMobileNavigation = ({
  userRole,
  isAuthenticated,
  accessToken,
}: NavigationPropTypes) => {
  return (
    <div className="flex justify-between px-4 sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>

        <SheetContent>
          {isAuthenticated && (
            <SheetHeader>
              <SheetTitle className="flex items-center justify-center gap-2">
                {userRole?.name}{" "}
                {userRole?.key === "admin" ? (
                  <ShieldUserIcon size={18} />
                ) : (
                  <UserPenIcon size={18} />
                )}
              </SheetTitle>
              <SheetDescription>Welcome back to Sajeon ❀</SheetDescription>
            </SheetHeader>
          )}
          <nav
            aria-label="Main"
            aria-orientation="vertical"
            dir="auto"
            className="bg-background/95 pb-2 pl-6 pr-6 pt-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 "
          >
            <ul
              data-orientation="vertical"
              className="flex list-none flex-col justify-between"
            >
              <li>
                <Link
                  className=" inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="/"
                >
                  <span className="text-lg"></span>Home
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="/about"
                >
                  About
                </Link>
              </li>

              {userRole &&
                hasClientPermissions(accessToken, [
                  MOONCAKE_PERMISSIONS.edit,
                  MOONCAKE_PERMISSIONS.view,
                ]) && (
                  <li>
                    <Link
                      className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      href="/mooncakes"
                    >
                      Mooncakes
                    </Link>
                  </li>
                )}
              {isAuthenticated && (
                <li>
                  <SajeonAuthButtons className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" />
                </li>
              )}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
      <SajeonThemeSelector />
    </div>
  );
};
