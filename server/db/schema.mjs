import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  seq: integer('seq').primaryKey({ autoIncrement: true }),
  id: text('id').unique(),
  name: text('name').notNull(),
  birth: text('birth').notNull(),
  ath_no: text('ath_no').unique(),
  sex: integer('sex').notNull(),
});
