const mongoose = require("mongoose");
const Cube = require("./Cube");

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
});
module.exports = mongoose.model("User", userSchema);
