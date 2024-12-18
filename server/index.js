const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/userRoute");
const cors = require("cors");
const challengeRouter = require("./routes/challengeRoutes");

const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5002;

mongoose
  .connect("mongodb://localhost:27017/BurnMetric")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Mongoose connected at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json("hello from the backend");
});

app.get("/fumble", (req, res) => {
  res.json("he fumbelled the bag");
});

app.post("/posting", (req, res) => {
  const { username } = req.body;
  res.json(username);
});

app.use("/api/users", userRouter);

app.use("/api/challenges", challengeRouter);
