import { Router } from "express";
import init from "./init";
import login from "./login";

const authRoutes = () => {
  const router = Router();

  router.post("/login", login);
  router.get("/init", init);

  return router;
};

export default authRoutes;
