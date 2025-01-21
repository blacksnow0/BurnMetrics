const Challenge = require("../models/ChallengesModel");

const getChallenge = async (req, res) => {
  const { challengeId } = req.query;
  const { _id } = req.user;

  const userId = _id;

  try {
    if (challengeId) {
      const challenge = await Challenge.findById(challengeId).populate(
        "user_id"
      );
      if (!challenge) {
        return res.status(404).json({ message: "Challenge not found" });
      }
      return res.status(200).json(challenge);
    }
    if (userId) {
      const challenges = await Challenge.find({ user_id: userId }).populate(
        "user_id"
      );
      if (!challenges.length) {
        return res
          .status(400)
          .json({ message: "No challenges found for this user" });
      }
      return res.status(200).json(challenges);
    }
  } catch (error) {
    console.error("Error fetching challenge(s): ", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const createChallenge = async (req, res) => {
  const { _id } = req.user;
  const { challengeName, description, goalValue } = req.body;

  try {
    if (!challengeName || !goalValue) {
      return res
        .status(400)
        .json({ error: "Challenge name and goal value are required" });
    }
    const challenge = new Challenge({
      user_id: _id,
      challengeName,
      description,
      goalValue,
    });
    await challenge.save();
    res
      .status(200)
      .json({ message: "Challenge created sucessfully.", challenge });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create challenge." });
  }
};

const hello = async (req, res) => {
  res.json("hello from the challenge");
};

module.exports = { createChallenge, hello, getChallenge };
