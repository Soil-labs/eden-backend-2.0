import { Request, Response } from "express";

const init = (req: Request, res: Response) => {
  const BASE_URL = "https://discord.com/api/oauth2/authorize";

  const params = new URLSearchParams();
  params.append("client_id", process.env.DISCORD_CLIENT_ID?.toString() || "");
  params.append(
    "redirect_uri",
    process.env.DISCORD_REDIRECT_URI?.toString() || "http://localhost:5001/auth/login",
  );
  params.append("response_type", "code");
  params.append("scope", "identify");

  res.send({ loginUrl: `${BASE_URL}?${params.toString()}` });
};

export default init;
