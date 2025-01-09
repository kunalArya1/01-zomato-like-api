import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
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

app.listen(3000, () => {
  console.log(`App is runnig on port ${process.env.PORT}`);
});
