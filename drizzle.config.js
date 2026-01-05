import { defineConfig } from 'drizzle-kit';

require('dotenv').config();

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/db/schema.mjs',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DB_PATH,
  },
});
