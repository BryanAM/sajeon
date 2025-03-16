import "server-only";
import { KindeAccessToken } from "@kinde-oss/kinde-auth-nextjs/types";

/**
 *
 * Description: Given a user's token and set of valid premissions
 * return a boolean value whether or not a user has access
 * RBAC - Role Based Access Control
 *
 */
export const checkPermissions = (
  token: KindeAccessToken | undefined,
  validPermissions: string[],
): boolean => {
  if (!token || validPermissions.length < 1) {
    return false;
  }
  const requiredPermissions = new Set(validPermissions);
  const isPermitted = token.permissions.some((permission: string) =>
    requiredPermissions.has(permission),
  );

  return isPermitted;
};
