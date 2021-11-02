const fs = require("fs");
const Cube = require("../models/Cube");

module.exports = function (req, res) {
	console.log(req.params);
	let id;
	if (Number(req.params.id)) {
		id = req.params.id;
		console.log(id);
	}

	fs.readFile("./config/database.json", "utf8", (err, data) => {
		if (err) throw err;
		let cubes = JSON.parse(data);
		let cube = cubes.find((cube) => cube.id == id);
		let context = {
			...cube,
		};
		res.render("details", context);
	});
};

// let cube = {
// 	id: "1",
// 	name: "test",
// 	description: "my description",
// 	imgURL: "imgURL",
// 	difficulty: "3",
// };

// let context = {
// 	...cube,
// };

// res.render("details", context);
