const fs = require("fs");

module.exports = function (req, res) {
	fs.readFile("./config/database.json", "utf8", (err, data) => {
		if (err) throw err;
		let cubes = JSON.parse(data);
		// console.log(cubes);

		let context = {
			cubes,
		};
		res.render("index", context);
	});
};
