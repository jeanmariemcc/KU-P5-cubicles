const fs = require("fs");
const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	Cube.find({}).then((cubes) => {
		let cubeArray = cubes.map((cube) => {
			let subCube = {
				id: cube._id,
				name: cube.name,
				description: cube.description,
				imgURL: cube.imgURL,
				difficulty: cube.difficulty,
				accessories: cube.accessories,
			};
			return subCube;
		});
		// console.log(cubeArray);
		let context = {
			cubes: cubeArray,
		};

		res.render("index", context);
	});
};
