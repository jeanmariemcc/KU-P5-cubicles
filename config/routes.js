//Require Controllers...
// const attach = require("../controllers/attach");

const createAccessoryPOST = require("../controllers/createAccessoryPOST");
const createPOST = require("../controllers/createPOST");
const homeGET = require("../controllers/homeGET");
const detailsGET = require("../controllers/detailsGET");
const attach = require("../controllers/attach");

// const mongoose = require("mongoose");
const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = (app) => {
	app.get("/", homeGET);
	// main page
	app.get("/about", function (req, res) {
		res.render("about");
	});

	app.get("/create/cube", function (req, res) {
		res.render("create");
	});

	app.post("/create/cube", createPOST);

	app.get("/create/accessory", function (req, res) {
		//about page
		res.render("createAccessory");
	});

	app.post("/create/accessory", createAccessoryPOST);

	app.get("/attach/:id", attach.get);

	app.post("/attach/:id", attach.post);

	app.get("/details/:id", detailsGET);

	app.get("/test", function (req, res) {
		Cube.find({}).then((cubes) => {
			console.log(cubes);
		});
		res.render("404");
	});

	app.get("*", function (req, res) {
		res.render("404");
	});
	// 404 page
};
