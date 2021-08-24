import dotenv from 'dotenv';

dotenv.config();

const config = process.env;

export default {
    port: config.PORT ?? 3000,
    host: config.HOST ?? 'localhost',
    user: config.USER ?? '',
    password: config.PASSWORD ?? '',
    database: config.DATABASE ?? '',
};
