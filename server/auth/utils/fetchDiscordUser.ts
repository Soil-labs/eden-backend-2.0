import axios from "axios";

const fetchDiscordUser = async (code: string, redirect_uri: string) => {
  if (!code) throw new Error("Invalid Code supplied");

  const params = new URLSearchParams();
  params.append("client_id", process.env.DISCORD_CLIENT_ID?.toString() || "");
  params.append("client_secret", process.env.DISCORD_CLIENT_SECRET?.toString() || "");
  params.append("grant_type", "authorization_code");
  params.append("code", code as string);
  params.append("scope", "identify");
  params.append("redirect_uri", redirect_uri);

  const response = await axios
    .post(`https://discord.com/api/oauth2/token`, params.toString())
    .catch((err: any) => {
      console.error(err);
      throw new Error("Failed to get token");
    });

  let { token_type, access_token } = response?.data;

  const authResponse = await axios
    .get(`https://discord.com/api/oauth2/@me`, {
      headers: {
        authorization: `${token_type} ${access_token}`,
      },
    })
    .catch((err: any) => {
      console.error(err);
      throw new Error("Failed to get user");
    });

  let { user } = authResponse?.data;

  return user;
};

export default fetchDiscordUser;
