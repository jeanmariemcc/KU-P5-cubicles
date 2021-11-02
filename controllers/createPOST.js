const fs = require("fs");

// const qs = require("querystring");
// const formidable = require("formidable");
const Cube = require("../models/Cube");

module.exports = function (req, res) {
	// let form = new formidable.IncomingForm();
	// console.log(req.body);
	let fields = req.body;
	console.log(fields);
	let newCube = new Cube(
		fields.name,
		fields.description,
		fields.imgURL,
		fields.difficulty
	);
	console.log(newCube);
	// TO DO

	fs.readFile("./config/database.json", "utf8", (err, data) => {
		if (err) {
			throw err;
		}
		console.log("Uploading Cube Data");
		let allCubes = JSON.parse(data);
		allCubes.push(newCube);
		// console.log(allCubes);
		let json = JSON.stringify(allCubes);
		console.log(json);

		fs.writeFile("./config/database.json", json, (err) => {
			if (err) throw err;
			console.log(`The cube ${fields.name} was successfully added`);
			// res.writeHeader(302, { location: "/" });
			// res.end();
		});
	});

	// validate data
	// fs call
	// set it into the cube object
	// redirect to "/" home route
	res.redirect("/");
	// otherwise send error to the front end
	// });
};
