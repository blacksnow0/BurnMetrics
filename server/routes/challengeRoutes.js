const express = require("express");

const challengeRouter = express.Router();

const {
  createChallenge,
  hello,
} = require("../controllers/challengeController");

const requireAuth = require("../middleware/authMiddleware");

challengeRouter.get("/hello", requireAuth, hello);

challengeRouter.post("/create", requireAuth, createChallenge);

module.exports = challengeRouter;
