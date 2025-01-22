import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  forgotPasswordLink,
  landingPage,
  profile,
  signIn,
  signUp,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/").get(landingPage);
router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/change-password").post(changePassword);
router.route("/forgot-password").post(forgotPassword);
router.route("forgot-password-link").get(forgotPasswordLink);
router.route("/profile").get(profile);

export default router;
