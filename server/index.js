const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB Server"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen("8800", () => {
  console.log("Backend Server is listening at port 8800");
});
