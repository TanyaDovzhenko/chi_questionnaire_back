import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/jwt.js';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { accessToken } = req.cookies;
    const tokenValidation: any = validateToken(accessToken);
    if (tokenValidation.error) return res.json({ ...tokenValidation }).status(401);
    req.body.userId = tokenValidation.id;
    next();
}
