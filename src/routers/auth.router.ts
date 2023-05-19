import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.post('/sign-in', authController.signIn);
//authRouter.post('/validate-token', authController.validateToken);

export default authRouter;