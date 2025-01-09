import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import { connectDb } from "./config/db.connection.js";
import userRouter from "./routes/user.routes.js";
import { generatedErrors } from "./utils/Error.js";

const app = express();

dotenv.config({
  path: "./.env",
});

// app level middleware
app.use(express.json());
app.use(logger("dev"));

// Root Route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Routes for different
app.use("/user", userRouter);

connectDb()
  .then(() => {
    app.listen(3000, () => {
      console.log(`App is runnig on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database Connection Error", error.message);
  });

app.use(generatedErrors);
