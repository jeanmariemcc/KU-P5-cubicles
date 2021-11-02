// TODO: Require Controllers...
const createPOST = require("../controllers/createPOST");
const homeGET = require("../controllers/homeGET");
const detailsGET = require("../controllers/detailsGET");

module.exports = (app) => {
	app.get("/", homeGET);
	// main page
	app.get("/about", function (req, res) {
		res.render("about");
	});

	app.get("/create", function (req, res) {
		res.render("create");
	});

	app.post("/create", createPOST);

	app.get("/details/:id", detailsGET);

	app.get("*", function (req, res) {
		res.render("404");
	});
	// 404 page
};
