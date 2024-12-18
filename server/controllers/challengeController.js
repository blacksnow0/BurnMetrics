const Challenge = require("../models/ChallengesModel");

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

module.exports = { createChallenge, hello };
