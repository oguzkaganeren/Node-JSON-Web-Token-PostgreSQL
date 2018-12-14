const jwt = require('jwt-simple');
const config = require('../config');
const {
	createUser
} = require('../actions/signUp');
const bcrypt = require('bcrypt');

const tokenForUser = (user) => {
	const timestamp = new Date().getTime();
	//console.log(user);
	return jwt.encode({
		sub: user.id,
		iat: timestamp
	}, config.secret);
}
const signin = (req, res, next) => {
	console.log(req.user);
	res.send({

		token: tokenForUser(req.user)
	});
}
const signup = (req, res, next) => {
	const {
		name,
		email,
		password
	} = req.body;
	const saltRounds = 12;
	if (!email || !password) {
		res.status(422).send({
			error: 'You must provide an email and a password'
		});
	}
	bcrypt.hash(password, saltRounds).then((hash) => {
		return createUser(name, email, hash)
			.then((newUser) => {
				res.json({
					token: tokenForUser(newUser)
				})
			})
	}).catch((err) => {
		return next(err)
	})
}
module.exports = {
	signup,
	signin
}