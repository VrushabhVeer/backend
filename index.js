const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/register.routes.js");
const { connection } = require("./config/db.js");
require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/user", userRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("conected to db");
  } catch (error) {
    console.log(error);
  }
  console.log(`server is running on ${port}`);
});
