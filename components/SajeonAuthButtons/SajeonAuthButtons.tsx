"use client";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

function SajeonAuthButtons({ className }: { className?: string }) {
  const { isAuthenticated } = useKindeAuth();

  return (
    <>
      {isAuthenticated ? (
        <LogoutLink className={className}>Logout</LogoutLink>
      ) : (
        <LoginLink className={className}>Sign in</LoginLink>
      )}
    </>
  );
}

export default SajeonAuthButtons;
