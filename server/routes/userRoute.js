const express = require("express");
const userRouter = express.Router();

const {
  loginUser,
  registerUser,
  updateProfile,
  fetchProfile,
} = require("../controllers/userController");
const requireAuth = require("../middleware/authMiddleware");

userRouter.get("/", requireAuth, fetchProfile);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/updateProfile", requireAuth, updateProfile);

module.exports = userRouter;
