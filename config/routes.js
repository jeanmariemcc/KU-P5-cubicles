//Require Controllers...
// const attach = require("../controllers/attach");

const createAccessoryPOST = require("../controllers/createAccessoryPOST");
const createPOST = require("../controllers/createPOST");
const homeGET = require("../controllers/homeGET");
const detailsGET = require("../controllers/detailsGET");
const attach = require("../controllers/attach");
const registerPOST = require("../controllers/registerPOST");

// const mongoose = require("mongoose");
const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = (app) => {
	app.get("/", homeGET);
	// main page
	app.get("/about", function (req, res) {
		res.render("about");
	});

	app.get("/login", (req, res) => {
		res.render("loginPage");
	});

	app.post("/login", (req, res) => {
		res.render("loginPage");
	});

	app.get("/register", (req, res) => {
		res.render("registerPage");
	});

	app.post("/register", registerPOST);

	// from express js lecture pg 17
	//Custom Middleware for auth here
	app.use("create/*", (req, res, next) => {
		// handles create cube and accessory
		// TODO
		// check for user login
		// if logged in, then user authorized for any route
		// else they are limited to home, about, register, and login pages
		next();
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
	// --- end create for cube and accessory

	app.use("edit/*", (req, res, next) => {
		// handles edit cube
		// TODO
		// check for user login
		// if logged in, then user authorized for any route
		// else they are limited to home, about, register, and login pages
		next();
	});
	app.get("/edit/cube/:id", (req, res) => {
		res.render("editCubePage");
	});
	app.post("/edit/cube/:id", (req, res) => {
		res.render("editCubePage");
	});
	// end edit routes

	app.use("delete/*", (req, res, next) => {
		// handles delete cube
		// TODO
		// check for user login
		// if logged in, then user authorized for any route
		// else they are limited to home, about, register, and login pages
		next();
	});
	app.get("/delete/cube/:id", (req, res) => {
		res.render("deleteCubePage");
	});
	app.post("/delete/cube/:id", (req, res) => {
		res.render("deleteCubePage");
	});
	// --- end delete routes

	app.use("attach/*", (req, res, next) => {
		// handles attach get and post
		// TODO
		// check for user login
		// if logged in, then user authorized for any route
		// else they are limited to home, about, register, and login pages
		next();
	});
	app.get("/attach/:id", attach.get);
	app.post("/attach/:id", attach.post);
	// --- end attach

	app.use("details/:id", (req, res, next) => {
		// handles details
		// TODO
		// check for user login
		// if logged in, then user authorized for any route
		// else they are limited to home, about, register, and login pages
		next();
	});
	app.get("/details/:id", detailsGET);
	// ---- end details

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
