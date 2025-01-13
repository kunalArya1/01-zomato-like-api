import { AsyncHandler } from "../utils/AsyncHandler.js";

export const landingPage = AsyncHandler((req, res, next) => {
  res.send("Landing page of user");
});


export const signUp = AsyncHandler((req, res, next) => {
  // get data from body
  // validate the data
  // check whether the user is already registed
  // if not then create user
  // handle the if the user is create or not
  // if yes then send the respone else throw error
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
