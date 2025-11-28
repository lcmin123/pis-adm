const { sqliteTable, integer, text } = require("drizzle-orm/sqlite-core");

const users = sqliteTable("users", {
  seq: integer("seq").primaryKey({ autoIncrement: true }),
  id: text("id"),
  name: text("name"),
  birth: text("birth"),
  ath_no: text("ath_no"),
});

module.exports = { users };
