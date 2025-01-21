import { AsyncHandler } from "../utils/AsyncHandler.js";
import User from "../models/user.models.js";
export const landingPage = AsyncHandler((req, res, next) => {
  res.send("Landing page of user");
});

export const signUp = AsyncHandler(async (req, res) => {
  // get data from body
  const { name, email, password } = req.body;
  // validate the data
  if (!name || !email || password) {
    return res.json({
      message: "Please provide all details ",
    });
  }
  // check whether the user is already registed
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User Not Fonund",
    });
  }

  // if not then create user
  const newUser = new User({
    name,
    email,
    password,
  });

  User.save();
  // handle the if the user is create or not

  if (!user) {
    return res.status(501).json({
      message: "Error while creating user!",
    });
  }
  // if yes then send the respone else throw error
  res.status(201).json({
    message: "user sign-up successfully",
  });
});

export const signIn = AsyncHandler((req, res, next) => {
  // get the emial and passsword form the req body
  // validate the data
  // check whteher user is registred or not
  // if not throw error
  // if yes then valildate the password
  // if password is wrong then throw error
  // if password is correct then create jwt token
  // now send the jwt token to the user
});
export const home = AsyncHandler((req, res, next) => {});
