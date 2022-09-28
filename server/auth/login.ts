import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
  res.send("Login");
};
export default login;
