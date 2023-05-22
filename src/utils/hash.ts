import crypto from 'crypto';

export function hash(string: string) {
    const hashedString = crypto.createHmac(
        process.env.HASH_PASSWORD_ALGORITM!, string).update(string).digest('hex');
    return hashedString;
}
