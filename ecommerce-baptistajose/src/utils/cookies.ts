export const setAuthCookie = (token: string) => {
    document.cookie = `token=${token}; path=/; max-age=3600`;
}

export const removeAuthCookie = () => {
  document.cookie =
    "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};