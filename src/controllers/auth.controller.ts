import { Request, Response } from 'express';
import { userService } from '../services/user.service.js';
import { hashService } from '../services/hash.service.js';
import { jwtService } from '../services/jwt.service.js';


class AuthController {
    async signIn(req: Request, res: Response) {
        const { login, password } = req.body;

        const user = await userService.getUserByLogin(login);
        if (!user) return res.json({ error: "User doesn't exist" }).status(404);

        const comparePassword = hashService.hash(password);
        if (comparePassword !== user.password) {
            return res.json({ error: 'Incorrect password' }).status(401);
        }

        const tokens = jwtService.generateTokens({ id: user._id.toString(), login });
        return res.json({ ...tokens });
    }
}

export const authController = new AuthController();