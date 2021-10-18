const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authrouter = require("./routers/auth");
const userRouter = require("./routers/User");
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_DB_URL)
  .then(console.log("App connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth/", authrouter);
app.use("/api/users/", userRouter);

app.listen("8800", console.log("App running at port 8800"));
