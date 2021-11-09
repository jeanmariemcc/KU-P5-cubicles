const fs = require("fs");
const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	let id;
	id = req.params.id;
	Cube.findById(id)
		.populate("accessories")
		.then((cube) => {
			// console.log(`cube ${cube}`);
			let accessories = cube.accessories.map((acc) => {
				return {
					id: acc._id,
					name: acc.name,
					imgURL: acc.imgURL,
					description: acc.description,
				};
			});
			let context = {
				id: cube._id,
				name: cube.name,
				description: cube.description,
				imgURL: cube.imgURL,
				difficulty: cube.difficulty,
				accessories: accessories,
			};
			// console.log(context);
			// console.log(context.accessories.imgURL);
			res.render("details", context);
		});
};
