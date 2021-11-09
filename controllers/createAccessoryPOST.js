const fs = require("fs");

const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	let fields = req.body;
	console.log(fields);
	new Accessories({
		name: fields.name,
		description: fields.description,
		imgURL: fields.imgURL,
		// difficulty: fields.difficulty,
	})
		.save()
		.then((accessory) => {
			console.log(accessory._id, accessory.name);
		});

	res.redirect("/");
	// otherwise send error to the front end
	// });
};
