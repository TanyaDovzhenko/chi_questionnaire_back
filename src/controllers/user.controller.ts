import { Request, Response } from 'express';
import { userService } from '../services/user.service.js';

class UserController {
    async getUserIfno(req: Request, res: Response) {
        const { userId } = req.body;
        const user = await userService.getUserById(userId);
        if (!user) return res.json({ error: 'User not found' }).status(404);
        return res.json({ ...user });
    }
}

export const userController = new UserController();