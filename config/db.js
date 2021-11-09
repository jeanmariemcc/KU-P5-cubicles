const mongoose = require("mongoose");
// opens the connection to our db server
module.exports = (app) => {
	mongoose.connect("mongodb://localhost:27017/cubes");
};
