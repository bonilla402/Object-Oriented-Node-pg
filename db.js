/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://bonilla402:123456@localhost:5432/lunchly");


db.connect();

module.exports = db;
