import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { db } from './db/db.mjs';
import { specs, swaggerUi } from './swagger/swagger.mjs';

const app = express();
const userRouter = await import('./routes/user.route.mjs');

app.use(cors({ origin: process.env.ORIGIN_URL }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(userRouter.default);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
  console.log('db', db);
});
