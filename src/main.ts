import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.router.js';
import userRouter from './routers/user.router.js';
import { authMiddleware } from './middlewares/auth.middleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(/\/((?!auth).)*/, authMiddleware);

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(port, async () => {
    await mongoose.connect(process.env.DB_URL!)
        .catch(() => console.log('error'));
});