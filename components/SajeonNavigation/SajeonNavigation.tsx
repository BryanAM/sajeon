"use client";

import Link from "next/link";
import { SajeonThemeSelector } from "../SajeonThemeSelector/SajeonThemeSelector";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { ShieldUserIcon, UserPenIcon } from "lucide-react";
import { UserRoleType, NavigationPropTypes } from "@/types/SajeonTypes";
import SajeonAuthButtons from "../SajeonAuthButtons/SajeonAuthButtons";
import { hasClientPermissions } from "@/lib/client-auth-utils";
import { MOONCAKE_PERMISSIONS } from "@/app/api/auth/app-permissions";
import { SajeonMobileNavigation } from "./SajeonMobileNavigation";

const SajeonDesktopNavigation = ({
  userRole,
  isAuthenticated,
  accessToken,
}: NavigationPropTypes) => {
  return (
    <nav
      aria-label="Main"
      aria-orientation="horizontal"
      dir="ltr"
      className="fixed left-0 right-0  top-0 z-10 hidden border-b-[1px] border-b-border  bg-background/95 pb-2 pl-6 pr-6 pt-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:block"
    >
      <ul
        aria-orientation="horizontal"
        className="flex list-none justify-between"
        dir="ltr"
      >
        <li className="flex items-center">
          <ul className="flex">
            <li>
              <Link
                className=" inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                href="/"
              >
                <span className="text-lg">❀</span>사전
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
              <SajeonAuthButtons className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" />
            )}
          </ul>
        </li>

        <li>
          <ul className="flex items-center text-sm font-semibold">
            <li className="mr-2 flex">
              {userRole && (
                <>
                  <span className="mr-1">{userRole.name}</span>
                  {userRole.key === "admin" ? (
                    <ShieldUserIcon size={18} />
                  ) : (
                    <UserPenIcon size={18} />
                  )}
                </>
              )}
            </li>

            <li>
              <SajeonThemeSelector />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

function SajeonNavigation() {
  const { isAuthenticated, accessToken } = useKindeAuth();

  const getUserRole: () => UserRoleType = () => {
    if (isAuthenticated && accessToken) {
      const roles = accessToken.roles;
      if (!roles || roles.length === 0) {
        return {
          name: "User",
          key: "user",
          id: `${crypto.randomUUID()}`,
        };
      }

      return roles[0];
    } else {
      return null;
    }
  };

  const userRole: UserRoleType = getUserRole();

  return (
    <>
      <SajeonDesktopNavigation
        userRole={userRole}
        isAuthenticated={isAuthenticated}
        accessToken={accessToken}
      />

      <SajeonMobileNavigation
        userRole={userRole}
        isAuthenticated={isAuthenticated}
        accessToken={accessToken}
      />
    </>
  );
}

export default SajeonNavigation;
