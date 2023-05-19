import crypto from 'crypto';

class HashService {
    hash(string: string) {
        const hashedString = crypto.createHmac(
            process.env.HASH_PASSWORD_ALGORITM!, string).update(string).digest('hex');
        return hashedString;
    }
}

export const hashService = new HashService();