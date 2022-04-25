export function checkPathname(params, pathname) {
  return params.some((p) => p === pathname);
}
