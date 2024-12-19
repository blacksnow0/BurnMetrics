const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    age: { type: Number, default: null },
    height: { type: Number, default: null },
    weight: { type: Number, default: null },
    fitnessGoal: { type: String, default: null },
  },
});

// Static Method: Register User
userSchema.statics.register = async function (
  username,
  email,
  password,
  profile = {}
) {
  // Check if username or email already exists
  const userExists = await this.findOne({ $or: [{ username }, { email }] });
  if (userExists) {
    throw Error("Username or Email already exists");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const user = await this.create({
    username,
    email,
    password: hashedPassword,
    profile: {
      age: profile.age || null,
      height: profile.height || null,
      weight: profile.weight || null,
      fitnessGoal: profile.fitnessGoal || null,
    },
  });

  return user;
};

// Static Method: Login User
userSchema.statics.login = async function (usernameOrEmail, password) {
  // Find user by username or email
  const user = await this.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });

  if (!user) {
    throw Error("User does not exist");
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("Invalid password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
