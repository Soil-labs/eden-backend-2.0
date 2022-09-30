import axios from "axios";
import { ClientRequest } from "http";
import QueryString from "qs";

const fetchDiscordUser = async (code: string, redirect_uri: string) => {
  if (!code) throw new Error("Invalid Code supplied");

  let data = QueryString.stringify({
    client_id: process.env.DISCORD_CLIENT_ID?.toString() || "",
    client_secret: process.env.DISCORD_CLIENT_SECRET?.toString() || "",
    grant_type: "authorization_code",
    code: code as string,
    scope: "identify",
    redirect_uri: redirect_uri,
  });

  const config = {
    method: "post",
    url: "https://discord.com/api/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const response = await axios(config)
    .then(res => res.data)
    .catch((err: any) => {
      console.error(err.response.data);
      throw new Error(`Failed to get token: ${err?.response?.data?.error_description}`);
    });

  let { token_type, access_token } = response;

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
