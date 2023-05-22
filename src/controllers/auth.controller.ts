import { Request, Response } from 'express';
import { userService } from '../services/user.service.js';
import { hash } from '../utils/hash.js';
import { generateTokens } from '../utils/jwt.js';


class AuthController {
    async signIn(req: Request, res: Response) {
        const { login, password } = req.body;

        const user = await userService.getUserByLogin(login);
        if (!user) return res.json({ error: "User doesn't exist" }).status(404);

        if (hash(password) !== user.password) {
            return res.json({ error: 'Incorrect password' }).status(401);
        }

        const tokens = generateTokens({ id: user._id.toString(), login });
        return res.json({ ...tokens });
    }
}

export const authController = new AuthController();