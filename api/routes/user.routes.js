import { Router } from "express";
import {
  home,
  landingPage,
  signIn,
  signUp,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/").get(landingPage);
router.route("/sing-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/home").get(home);

export default router;
