require("dotenv").config();

const Database = require("better-sqlite3");
const { drizzle } = require("drizzle-orm/better-sqlite3");

const sqlite = new Database(process.env.DB_PATH);
const db = drizzle(sqlite);

module.exports = { db };
