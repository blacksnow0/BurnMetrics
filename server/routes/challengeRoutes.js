const express = require("express");

const challengeRouter = express.Router();

const {
  createChallenge,
  hello,
  getChallenge,
} = require("../controllers/challengeController");

const requireAuth = require("../middleware/authMiddleware");

challengeRouter.post("/create", requireAuth, createChallenge);

challengeRouter.get("/hello", hello);

challengeRouter.get("/get", requireAuth, getChallenge);

module.exports = challengeRouter;
