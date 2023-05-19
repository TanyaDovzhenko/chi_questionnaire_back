import jwt from 'jsonwebtoken';
import { IGenerateTokenPayload } from '../types.js';

class JwtService {
    generateTokens = ({ id, login }: IGenerateTokenPayload) => {
        const accessToken = jwt.sign({ id, login }, process.env.JWT_ACCESS_KEY!, { expiresIn: '40m' });
        const refreshToken = jwt.sign({ id, login }, process.env.JWT_REFRESH_KEY!, { expiresIn: '1d' });
        return { accessToken, refreshToken };
    }
}

export const jwtService = new JwtService();