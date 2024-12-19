const express = require("express");

const challengeRouter = express.Router();

const { createChallenge } = require("../controllers/challengeController");

const requireAuth = require("../middleware/authMiddleware");

challengeRouter.post("/create", requireAuth, createChallenge);

module.exports = challengeRouter;
