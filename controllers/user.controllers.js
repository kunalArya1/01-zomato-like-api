import { AsyncHandler } from "../utils/AsyncHandler.js";

export const landingPage = AsyncHandler((req, res, next) => {
  res.send("Landing page of user");
});
export const signUp = AsyncHandler((req, res, next) => {});
export const signIn = AsyncHandler((req, res, next) => {});
export const home = AsyncHandler((req, res, next) => {});
