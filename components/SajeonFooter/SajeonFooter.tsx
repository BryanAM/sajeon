import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function SajeonFooter() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  return (
    <footer className="absolute inset-x-0 bottom-0 bg-muted p-6">
      <div className="m-auto max-w-5xl text-muted-foreground">
        <h2 className="pb-3 text-xl">❀ Sajeon</h2>
        <div className="flex justify-between">
          <p>© 2022 Sajeon - All Rights Reserved</p>
          {isLoggedIn ? (
            <LogoutLink className="hover:underline focus:underline">
              Logout
            </LogoutLink>
          ) : (
            <LoginLink className="hover:underline focus:underline">
              Sign in
            </LoginLink>
          )}
        </div>
      </div>
    </footer>
  );
}

export default SajeonFooter;
