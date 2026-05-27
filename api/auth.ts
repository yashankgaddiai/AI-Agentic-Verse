const ADMIN_HEADER = "x-admin-token";

export function isAdminRequest(req: any) {
  const expected = process.env.ADMIN_API_TOKEN;
  if (!expected) return false;

  const headerToken = req.headers?.[ADMIN_HEADER] || req.headers?.[ADMIN_HEADER.toLowerCase()];
  const bearerToken = typeof req.headers?.authorization === "string"
    ? req.headers.authorization.replace(/^Bearer\s+/i, "")
    : "";

  return headerToken === expected || bearerToken === expected;
}

export function requireAdminRequest(req: any, res: any) {
  if (isAdminRequest(req)) return true;

  res.status(403).json({ error: "Admin API token required." });
  return false;
}
