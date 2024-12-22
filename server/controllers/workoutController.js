const { default: mongoose } = require("mongoose");
const Workout = require("../models/WorkoutModels");

const getHello = async (req, res) => {
  console.log(req);
  res.status(200).json("hello from the workout routes");
};

const createWorkout = async (req, res) => {
  try {
    const { name, days } = req.body;
    const user_id = req.user._id;

    const newWorkout = new Workout({ title: name, user_id, days });
    await newWorkout.save();

    res
      .status(200)
      .json({ message: "Workout created sucessfully", workout: newWorkout });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating workout", error: err.message });
  }
};

const getUserWorkouts = async (req, res) => {
  try {
    const userId = req.user._id;

    const workouts = await Workout.find({ user_id: userId }).populate(
      "days.exercises"
    );
    res.status(200).json(workouts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching workouts", error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json("Invalid User");
    }

    const workout = await Workout.findByIdAndDelete({
      _id: id,
      user_id: userId,
    });

    if (!workout) {
      return res.status(400).json("Workout not found or unauthorize");
    }

    return res
      .status(200)
      .json({ message: "Workout deleted sucessfully", workout });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getHello, createWorkout, getUserWorkouts, deleteWorkout };
