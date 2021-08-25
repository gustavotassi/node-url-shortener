import dotenv from 'dotenv';

dotenv.config();

const config = process.env;

export default {
    port: config.PORT ?? 3000,
    host: config.HOST ?? 'localhost',
    user: config.USER ?? '',
    dbUri: config.DB_URI ?? '',
    password: config.PASSWORD ?? '',
    database: config.DATABASE ?? '',
};
