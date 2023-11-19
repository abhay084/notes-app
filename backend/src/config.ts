//config.ts
import * as dotenv from "dotenv";

dotenv.config();

const MONGO_DB_USER = process.env.MONGO_DB_USER || '';
const NODE_ENV = process.env.NODE_ENV || '';
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.xgqwh.mongodb.net/${process.env.DB_TO_USE}`;
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
const MONGO_URL_LOCAL = `mongodb://127.0.0.1:27017/${process.env.DB_TO_USE}`;

interface Config {
    mongo: {
        url: string;
    };
    server: {
        port: number;
    };
}

//CREATE CONFIG OBJECT
const config: Config = {
    mongo: {
        url: NODE_ENV === 'production' ? MONGO_URL : MONGO_URL_LOCAL,
    },
    server: {
        port: SERVER_PORT,
    },
};
console.log(MONGO_URL_LOCAL)
export default config;
