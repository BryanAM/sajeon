"use client";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function SajeonAuthButtons({ className }: { className?: string }) {
  const { isAuthenticated } = useKindeBrowserClient();
  const isLoggedIn = isAuthenticated;

  return (
    <>
      {isLoggedIn ? (
        <RegisterLink className={className}>Logout</RegisterLink>
      ) : (
        <LoginLink className={className}>Sign in</LoginLink>
      )}
    </>
  );
}

export default SajeonAuthButtons;
