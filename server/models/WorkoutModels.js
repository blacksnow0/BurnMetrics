const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number },
  reps: { type: Number },
  weight: { type: Number },
});

const daySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  exercises: [exerciseSchema],
  selectedBodyPart: { type: String },
});

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  days: [daySchema],
  createdAt: { type: Date, default: Date.now },
  shared: { type: Boolean, default: false },
});

module.exports = mongoose.model("Workout", workoutSchema);
