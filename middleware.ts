import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import type { NextRequest } from "next/server";

export default withAuth(async function middleware(req: NextRequest) {}, {
  // Middleware will allow non-authenticated users of the following routes
  publicPaths: ["/search", "/about", "/"],
  isAuthorized: ({ token, req }: { token: any; req: NextRequest }) => {
    const path = req.nextUrl.pathname;
    if (path === "/mooncakes") {
      const requiredPermissions = new Set(["view:mooncakes", "edit:mooncakes"]);
      return token.permissions.some((permission: string) =>
        requiredPermissions.has(permission),
      );
    }

    return true;
  },
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
