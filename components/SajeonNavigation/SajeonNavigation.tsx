import Link from "next/link";
import { SajeonThemeSelector } from "../SajeonThemeSelector/SajeonThemeSelector";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShieldUserIcon, UserPenIcon } from "lucide-react";

async function SajeonNavigation() {
  const { isAuthenticated, getRoles } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  const roles = await getRoles();

  const getUserRole = () => {
    if (!roles || roles.length === 0) {
      return {
        name: "User",
        key: "user",
        id: `${crypto.randomUUID()}`,
      };
    }

    return roles[0];
  };
  const userRole = getUserRole();

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

            {isLoggedIn && (
              <li>
                <Link
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="/mooncakes"
                >
                  Mooncakes
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <LogoutLink className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Logout
                </LogoutLink>
              </li>
            )}
          </ul>
        </li>

        <li>
          <ul className="flex items-center text-sm font-semibold">
            <li className="mr-2 flex">
              {isLoggedIn && (
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
}

export default SajeonNavigation;
