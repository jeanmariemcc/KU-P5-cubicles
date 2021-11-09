// this is a different method
// one file for both the GET and POST
const fs = require("fs");
const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = {
	get: function (req, res) {
		// console.log(req.params);
		let id;
		id = req.params.id;
		// console.log(`attach ${id}`);

		Cube.findById(id).then((cube) => {
			// console.log(`cube ${cube}`);
			Accessories.find({}).then((accessories) => {
				// console.log(accessories);
				accessories = accessories.map((accessory) => {
					// console.log(`accessory ${accessory}`);
					return {
						id: accessory._id,
						name: accessory.name,
						description: accessory.description,
					}; // end return
				}); // end map
				// console.log(accessories);
				// accessories is an array of objects, the objects are the individual accessories

				let finalAccessories = accessories.filter((accessory) => {
					return !cube.accessories.includes(accessory.id);
				});
				// console.log(finalAccessories);
				let context = {
					id,
					imgURL: cube.imgURL,
					accessories: finalAccessories,
				};
				// console.log(context);
				res.render("attachAccessory", context);
			});
		});
	}, // end get
	post: function (req, res) {
		console.log("attach POST");
		console.log(req.params);
		let cubeid;
		cubeid = req.params.id;
		let fields = req.body;
		console.log(fields);
		Cube.findById(cubeid)
			// .populate("accessories")
			.then((cube) => {
				cube.accessories.push(fields.accessory);
				cube.save();
				Accessories.findById(fields.accessory).then((accessory) => {
					accessory.cubes.push(cubeid);
					accessory.save();
					// let newPage = "/details/" + cubeid;
					// res.redirect(newPage);
					res.redirect("/");
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
