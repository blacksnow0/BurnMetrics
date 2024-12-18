const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const progressSchema = new Schema({
  date: { type: Date, required: true },
  progressValue: { type: Number, required: true },
});

const challengeSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  challengeName: { type: String, required: true },
  description: { type: String },
  startDate: {
    type: Date,
    default: Date.now,
  },
  progress: [progressSchema],
  status: {
    type: String,
    enum: ["active", "completed", "failed"],
    default: "active",
  },
  resets: {
    count: { type: Number, default: 0 },
    lastReset: { type: Date },
  },
  goalValue: { type: Number, required: true },
});

module.exports = mongoose.model("Challenge", challengeSchema);
