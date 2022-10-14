import { Router } from "express";
import init from "./init";
import login from "./login";
import cors from "cors";

const authRoutes = () => {
  const router = Router();

  router.post(
    "/login",
    cors({
      origin: process.env.NODE_ENV === "production" ? "*.vercel.app" : "*",
    }),
    login,
  );
  router.get("/init", init);

  return router;
};

export default authRoutes;
