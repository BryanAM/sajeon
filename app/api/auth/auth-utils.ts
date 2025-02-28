import "server-only";

/**
 *
 * Description: Given a user's token and set of valid premissions
 * return a boolean value whether or not a user has access
 */
export const checkPermissions = (
  token,
  validPermissions: string[],
): boolean => {
  if (!token || !validPermissions) {
    return false;
  }

  const requiredPermissions = new Set(validPermissions);
  const isPermitted = token.permissions.some((permission: string) =>
    requiredPermissions.has(permission),
  );

  return isPermitted;
};
