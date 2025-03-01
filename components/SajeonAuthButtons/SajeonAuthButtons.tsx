"use client";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function SajeonAuthButtons({ className }: { className?: string }) {
  const { isAuthenticated } = useKindeBrowserClient();
  const isLoggedIn = isAuthenticated;

  return (
    <>
      {isLoggedIn ? (
        <LogoutLink className={className}>Logout</LogoutLink>
      ) : (
        <LoginLink className={className}>Sign in</LoginLink>
      )}
    </>
  );
}

export default SajeonAuthButtons;
