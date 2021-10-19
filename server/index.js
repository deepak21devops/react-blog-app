const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authrouter = require("./routers/auth");
const userRouter = require("./routers/User");
const postRouter = require("./routers/Post");
const catRouter = require("./routers/Category");

const multer = require("multer");
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_DB_URL)
  .then(console.log("App connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/images/");
  },
  filename: (req, file, cb) => {
    cb(null, "bride.jpeg");
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File Uploaded Succefullys");
});

app.use("/api/auth/", authrouter);
app.use("/api/users/", userRouter);
app.use("/api/posts/", postRouter);
app.use("/api/category/", catRouter);

app.listen("8800", console.log("App running at port 8800"));
