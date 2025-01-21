const SeventyFive = require("../../models/challengeModels/SeventyFive");
const Challenge = require("../../models/ChallengesModel");

const sayHi = async (req, res) => {
  res.json("hello says seventy five route");
};

const createSeventyFiveChallenge = async (req, res) => {
  const { _id } = req.user;
  const userId = _id;

  try {
    const existingChallenge = await SeventyFive.findOne({
      user: userId,
    });

    if (existingChallenge) {
      return res
        .status(400)
        .json({ message: "You have already started this challenge" });
    }

    const seventyFiveChallenge = new SeventyFive({
      user: userId,
    });

    await seventyFiveChallenge.save();

    res.status(201).json({
      message: "75-Hard challenge created sucessfully",
      seventyFiveChallenge,
    });
  } catch (error) {
    console.error("Error creating 75-Hard challenge:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getUserSeventyFiveChallenges = async (req, res) => {
  const { _id } = req.user;
  const userId = _id;

  try {
    const challenges = await SeventyFive.find({ user: userId }).populate(
      "challenge"
    );
    if (!challenges.length) {
      return res.status(404).json({
        message: "Seventy-Five Hard challenge was not found for this user",
      });
    }
    res.status(200).json(challenges);
  } catch (error) {
    console.error("Error fetching seventy five hard for the user", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updateDailyTask = async (req, res) => {
  const { challengeId } = req.params;

  const { tasks } = req.body;

  try {
    const challenge = await SeventyFive.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge Not Found" });
    }

    challenge.dailyTasks = tasks;
    await challenge.save();

    res
      .status(200)
      .json({ message: "Daily tasks updated sucessfully", challenge });
  } catch (error) {
    console.error("Error updaing daily tasks:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  sayHi,
  updateDailyTask,
  createSeventyFiveChallenge,
  getUserSeventyFiveChallenges,
};
