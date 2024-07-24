const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  userName: { type: "String", required: true },
  contact: { type: "Number", required: true },
  photo: { type: "String", required: true },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
