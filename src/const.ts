// Constantes locais (antes vinham de @shared/const)
export const COOKIE_NAME = "seguroplay_auth";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

export const UNAUTHED_ERR_MSG = "Usuário não autenticado";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;

  if (!oauthPortalUrl || !appId) {
    throw new Error("VITE_OAUTH_PORTAL_URL ou VITE_APP_ID não definidos");
  }

  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
