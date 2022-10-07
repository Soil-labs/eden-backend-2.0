import { JwtPayload } from "jsonwebtoken";

export interface EdenHeaders extends Headers {
  authorization: string;
}

export interface EdenRequest extends Request {
  headers: EdenHeaders;
  user: any;
  // TODO: Add type for User Object
}

export interface EdenContext {
  req: EdenRequest;
}

export interface EdenJWTPayload extends JwtPayload {
  _id: string;
  discordID: string;
  accessLevel: number;
}
