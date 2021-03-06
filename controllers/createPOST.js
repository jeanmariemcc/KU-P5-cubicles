const fs = require("fs");

// const qs = require("querystring");
// const formidable = require("formidable");
const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	let fields = req.body;
	console.log(fields);
	new Cube({
		name: fields.name,
		description: fields.description,
		imgURL: fields.imgURL,
		difficulty: fields.difficulty,
	})
		.save()
		.then((cube) => {
			console.log(cube._id, cube.name);
		});

	res.redirect("/");
	// otherwise send error to the front end
	// });
};
