const db = require('../db');
const createUser = (name, email, password) => {
	const query = `
	INSERT INTO users(name, email,password) 
	values ($1, $2, $3) 
	RETURNING *`
	return db.one(query, [name, email, password]);
}
module.exports = {
	createUser
}