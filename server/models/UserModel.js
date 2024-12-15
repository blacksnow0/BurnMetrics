const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.register = async function (username, password) {
  const exists = await this.findOne({ username });
  if (exists) {
    throw Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = this.create({
    username,
    password: hashedPassword,
  });

  return user;
};

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (!user) {
    throw Error("User does not exists");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("Invalid password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
