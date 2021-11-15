let bcrypt = require("bcrypt");
const saltConfig = require("../config/config").saltRounds;
const User = require("../models/User");

module.exports = (req, res) => {
	console.log(req.body);
	let username = req.body.username;
	let password = req.body.password;
	let repeatPassword = req.body.repeatPassword;

	if (password == repeatPassword) {
		// TODO regex check for valid password
		// encrypt
		bcrypt.genSalt(saltConfig, (err, salt) => {
			bcrypt.hash(password, salt, (err, hash) => {
				console.log(hash);
				//create a new user in the db
				new User({
					username,
					password: hash,
				})
					.save()
					.then((user) => {
						res.status(201);
						console.log(`User was created successfully!`);
						console.log(user);
						res.cookie("status", {
							type: "success",
							message: "User created!",
						});

						res.redirect("/login");
						//res.end();
					})
					.catch((err) => {
						console.log(err);
					});
			});
		});
		//if valid add user to database
	} else {
		// send error back to front end
	}
};
