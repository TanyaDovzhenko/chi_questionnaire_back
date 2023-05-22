import { User } from "../db/db-schemas.js";


class UserService {
    async getUserById(id: string) {
        return User.findById(id).then((data: any) => data._doc).catch(() => null);
    }

    async getUserByLogin(login: string) {
        return User.findOne({ login }).then((data: any) => data._doc).catch(() => null);
    }
}

export const userService = new UserService();