import { config } from 'dotenv';

config();

const env = {
	APP_PORT: process.env.APP_PORT || 4000,
	APP_HOST: process.env.APP_HOST,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_PORT: process.env.DB_PORT,
	DB_NAME: process.env.DB_NAME,
};

export { env };
