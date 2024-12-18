const express = require("express");
const userRouter = express.Router();

const {
  loginUser,
  registerUser,
  updateProfile,
} = require("../controllers/userController");
const requireAuth = require("../middleware/authMiddleware");

userRouter.get("/", (req, res) => {
  res.json("howdy");
});

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/updateProfile", requireAuth, updateProfile);

module.exports = userRouter;
