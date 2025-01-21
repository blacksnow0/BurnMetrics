const mongoose = require("mongoose");

const SeventyFiveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Challenge",
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  dailyTasks: {
    type: Map,
    of: Boolean,
    default: {
      workoutSession: false,
      updateGithub: false,
      drinkWater: false,
      readBook: false,
      runningExercise: false,
    },
  },
  history: {
    type: [Boolean],
    default: Array(75).fill(false),
  },
  completedDays: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("SeventyFive", SeventyFiveSchema);
