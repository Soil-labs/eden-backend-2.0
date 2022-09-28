import { Router } from "express";
import login from "./login";

const authRoutes = () => {
  const router = Router();

  router.get("/login", login);

  return router;
};

export default authRoutes;
