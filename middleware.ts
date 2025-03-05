import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { KindeAccessToken } from "@kinde-oss/kinde-auth-nextjs/types";
import type { NextRequest } from "next/server";
import { MOONCAKE_PERMISSIONS } from "./app/api/auth/app-permissions";
import { checkPermissions } from "./app/api/auth/auth-utils";

export default withAuth(async function middleware(req: NextRequest) {}, {
  // Middleware will allow non-authenticated users of the following routes
  publicPaths: ["/search", "/about", "/"],
  isAuthorized: ({
    token,
    req,
  }: {
    token: KindeAccessToken;
    req: NextRequest;
  }) => {
    const path = req.nextUrl.pathname;
    if (path === "/mooncakes") {
      return checkPermissions(token, [
        MOONCAKE_PERMISSIONS.edit,
        MOONCAKE_PERMISSIONS.view,
      ]);
    }

    return true;
  },
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
