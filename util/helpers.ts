import Cookies from "universal-cookie";

interface CookiesPayload {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpireDate: string;
  accessTokenExpireDate: string;
  username: string;
  remember?: number;
}

const cookies = new Cookies();

export const setCookies = ({
  accessToken,
  refreshToken,
  username,
  refreshTokenExpireDate,
  accessTokenExpireDate,
  remember,
}: CookiesPayload): void => {
  cookies.set("username", username);
  cookies.set("accessToken", accessToken);
  cookies.set("accessTokenExpireDate", accessTokenExpireDate);
  cookies.set("refreshToken", refreshToken);
  cookies.set("refreshTokenExpireDate", refreshTokenExpireDate);
  if (remember) cookies.set("remember", remember);
};

export const removeCookies = (): void => {
  cookies.remove("username");
  cookies.remove("accessToken");
  cookies.remove("accessTokenExpireDate");
  cookies.remove("refreshToken");
  cookies.remove("refreshTokenExpireDate");
  cookies.remove("remember");
};
