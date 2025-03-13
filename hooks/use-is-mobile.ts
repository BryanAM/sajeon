import { MOBILE_SCREEN_BREAKPOINT } from "@/lib/constants";
import { useState, useEffect } from "react";

/**
 *
 * Returns if screen size is mobile
 * Accounts for if screen is resized
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > MOBILE_SCREEN_BREAKPOINT,
  );

  return isMobile;
};
