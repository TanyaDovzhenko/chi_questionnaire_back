import mongoose from "mongoose";

class DBClient {
    client = mongoose;

    async connect() {
        await this.client.connect(process.env.DB_URL!)
            .then(() => console.log('DB connected'))
            .catch(() => console.log('DB error connection'));
    }
}

export const dbClient = new DBClient();
