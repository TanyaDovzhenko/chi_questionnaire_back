import jwt from 'jsonwebtoken';
import { IGenerateTokenPayload } from '../types.js';

function generateTokens({ id, login }: IGenerateTokenPayload) {
    const accessToken = jwt.sign({ id, login }, process.env.JWT_ACCESS_KEY!, { expiresIn: '40m' });
    const refreshToken = jwt.sign({ id, login }, process.env.JWT_REFRESH_KEY!, { expiresIn: '1d' });
    return { accessToken, refreshToken };
}

function validateToken(token: string){
    const decodedToken: any = jwt.decode(token);
    try {
        if (decodedToken.exp * 1000 < new Date().getTime()) {
            return { error: 'Token expired' };
        }
    } catch {
        return { error: 'Token validation error' };
    }
    const tokenValidation = jwt.verify(token, process.env.JWT_ACCESS_KEY);
    return tokenValidation;
}


export { generateTokens, validateToken };