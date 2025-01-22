import { AsyncHandler } from "../utils/AsyncHandler.js";
import User from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const landingPage = AsyncHandler((req, res, next) => {
  res.send("Landing page of user");
});

export const signUp = AsyncHandler(async (req, res) => {
  // get data from body
  const { name, email, password } = req.body;
  // validate the data
  if (!name || !email || !password) {
    return res.json({
      message: "Please provide all details ",
    });
  }
  // check whether the user is already registed
  const user = await User.findOne({ email });

  if (user) {
    return res.status(404).json({
      message: "User Already registered! Please Login.",
    });
  }

  // if not then create user
  const newUser = new User({
    name,
    email,
    password,
  });

  newUser.save();
  // handle the if the user is create or not

  if (!newUser) {
    return res.status(501).json({
      message: "Error while creating user!",
    });
  }
  // if yes then send the respone else throw error
  res.status(201).json({
    message: "user sign-up successfully",
  });
});

export const signIn = AsyncHandler(async (req, res, next) => {
  // get the emial and passsword form the req body
  const { email, password } = req.body;
  // validate the data
  if (!email || !password) {
    return res.json({
      message: "Please provide all the detials ",
    });
  }
  // check whteher user is registred or not
  const registredUser = await User.findOne({ email });
  // if not throw error
  if (!registredUser) {
    return res.json({
      message: "user not found! Please sign-up first",
    });
  }
  // if yes then valildate the password
  const passswordCorrect = await registredUser.isPasswordCorrect(password);

  // if password is wrong then throw error
  if (!passswordCorrect) {
    return res.json({
      message: "Invalid Credentials!",
    });
  }
  // if password is correct then create jwt token
  const jwtToken = await jwt.sign({ email: email }, "kunal", {
    expiresIn: "1h",
  });
  if (!jwtToken) {
    return res.json({
      message: "Error while genreting jwt token",
    });
  }
  // now send the jwt token to the user
  res.status(200).json({
    message: "You are signed in succesfully!",
    token: jwtToken,
  });
});

export const changePassword = AsyncHandler(async (req, res) => {});

export const forgotPassword = AsyncHandler(async (req, res) => {});
export const forgotPasswordLink = AsyncHandler(async (req, res) => {});
export const profile = AsyncHandler((req, res, next) => {});
