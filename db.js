const pgp = require('pg-promise')({
	// Initialization Options
});

// Preparing the connection details:
const cn = 'postgres://oguz:@localhost:5432/test';

// Creating a new database instance from the connection details:
const db = pgp(cn);
// Exporting the database object for shared use:
module.exports = db;