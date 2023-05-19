import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routers/auth.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/auth', authRouter);

app.listen(port, async () => {
    await mongoose.connect(process.env.DB_URL!)
        .catch(() => console.log('error'));
});