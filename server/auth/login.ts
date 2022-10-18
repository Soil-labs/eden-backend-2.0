import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Members } from "../models/memberModel";
import { ACCESS_LEVELS } from "./constants";
import fetchDiscordUser from "./utils/fetchDiscordUser";

const login = async ({ body }: Request, res: Response) => {
  try {
    const { code, redirect_uri } = body;

    // get user from discord
    const user = await fetchDiscordUser(code, redirect_uri);

    // Find if user is in database
    let dbUser = await Members.findOne({ discordId: user.id });
    console.log({ dbUser });

    // if user is not in database, save user to database
    if (!dbUser) {
      dbUser = await Members.create({
        discordID: user.id,
        name: user.name,
        avatar: user.avatar,
        discriminator: user.discriminator,
        registeredAt: new Date(),
      });
    }

    // Generate auth token
    const token = jwt.sign(
      { _id: dbUser._id, discordID: user.id, accessLevel: ACCESS_LEVELS.MEMBER_ACCESS },
      process.env.JWT_SECRET || "",
      {
        expiresIn: "7d",
      },
    );

    // Return user and token
    res.json({ discord_user: user, eden_user: dbUser, token });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
export default login;
