import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { db } from './db/db.mjs';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
  }),
);
app.use(express.json());

const userRouter = await import('./routes/user.route.mjs');
app.use(userRouter.default);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
  console.log('db', db);
});
