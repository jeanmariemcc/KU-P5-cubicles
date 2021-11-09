const fs = require("fs");
const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	console.log("Update cube with accessories");
	let fields = req.body;

	console.log(fields);
	let id;
	id = req.params.id;
	console.log(`attach ${id}`);

	new Cube({
		name: fields.name,
		description: fields.description,
		imgURL: fields.imgURL,
		difficulty: fields.difficulty,
		accessories: fields.accessories,
		// accessories is an aray of strings - id's
	})
		.save()
		.then((cube) => {
			console.log(cube._id, cube.name);
		});

	res.redirect("/");
};
