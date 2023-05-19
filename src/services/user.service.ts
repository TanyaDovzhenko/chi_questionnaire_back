import { User } from "../db/db-schemas.js";


class UserService {
    async getUserById(id: string) {
        return User.findById(id).catch(() => null);
    }

    async getUserByLogin(login: string) {
        return User.findOne({ login }).catch(() => null);
    }
}

export const userService = new UserService();