import { AuthenticationError } from "apollo-server";
import { Response } from "express";
import jwt from "jsonwebtoken";
import { EdenJWTPayload, EdenRequest } from "./types";

const contextResolver = ({ req, req: { headers }, res }: { req: EdenRequest; res: Response }) => {
  try {
    if (headers.authorization) {
      headers.authorization.replace(/[&#,+()$~%.:*?<>]/g, "");
      const contextPayload = <EdenJWTPayload>(
        jwt.verify(headers.authorization.replace("Bearer ", ""), process.env.JWT_SECRET || "")
      );

      if (
        !(
          contextPayload &&
          contextPayload._id &&
          contextPayload.discordID &&
          contextPayload.accessLevel
        )
      )
        throw new AuthenticationError("Invalid Access token provided");

      req.user = contextPayload;
    } else {
      throw new Error("Authorization header is missing");
    }
  } catch (err: any) {
    console.error(err);
    throw new AuthenticationError(err.message);
  }

  return { req };
};

export default contextResolver;
