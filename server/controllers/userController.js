const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

// Function to create a JWT token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

const fetchProfile = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById({ _id });
    if (!user) {
      return res.status(404).json("user not found");
    }
    res.status(200).json({ user });
  } catch (err) {
    console.log("this error was triggered", err.message);
  }
};

// Login User
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Attempt login with username or email
    const user = await User.login(username, password);

    // Generate token
    const token = createToken(user._id);

    // Respond with user details and token
    res.status(200).json({
      username: user.username,
      email: user.email,
      profile: user.profile, // Includes optional details like height, weight, and fitnessGoal
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Register User
const registerUser = async (req, res) => {
  const { username, email, password, age, height, weight, fitnessGoal } =
    req.body;

  try {
    // Register a new user with optional profile data
    const profile = {
      age: age || null,
      height: height || null,
      weight: weight || null,
      fitnessGoal: fitnessGoal || null,
    };

    const user = await User.register(username, email, password, profile);

    // Generate token
    const token = createToken(user._id);

    // Respond with user details and token
    res.status(200).json({
      username: user.username,
      email: user.email,
      profile: user.profile, // Includes optional details
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  const { _id } = req.user; // Extracted from token in middleware
  const { age, height, weight, fitnessGoal } = req.body;

  try {
    // Find the user by ID and update their profile
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          ...(age !== "undefined" && { "profile.age": age }),
          ...(height !== "undefined" && { "profile.height": height }),
          ...(weight !== "undefined" && { "profile.weight": weight }),
          ...(fitnessGoal !== "undefined" && {
            "profile.fitnessGoal": fitnessGoal,
          }),
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { loginUser, registerUser, updateProfile, fetchProfile };
