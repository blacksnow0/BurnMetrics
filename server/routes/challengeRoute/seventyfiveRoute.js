const express = require("express");
const {
  sayHi,
  updateDailyTask,
  getUserSeventyFiveChallenges,
  createSeventyFiveChallenge,
} = require("../../controllers/challengesController/SeventyFive");

const requireAuth = require("../../middleware/authMiddleware");

const SeventyFiveRouter = express.Router();

SeventyFiveRouter.get("/sayHi", sayHi);

SeventyFiveRouter.put("/update/:challengeId", updateDailyTask);

SeventyFiveRouter.get("/get", requireAuth, getUserSeventyFiveChallenges);

SeventyFiveRouter.post("/create", requireAuth, createSeventyFiveChallenge);

module.exports = SeventyFiveRouter;
