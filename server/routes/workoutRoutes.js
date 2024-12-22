const express = require("express");
const workoutRouter = express.Router();

const requireAuth = require("../middleware/authMiddleware");

const {
  getHello,
  createWorkout,
  getUserWorkouts,
} = require("../controllers/workoutController");

workoutRouter.get("/", requireAuth, getHello);
workoutRouter.get("/getWorkout", requireAuth, getUserWorkouts);
workoutRouter.post("/create", requireAuth, createWorkout);

module.exports = workoutRouter;
