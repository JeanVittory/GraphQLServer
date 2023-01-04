import { DataSource } from 'typeorm';
import { Users } from '../entities/users';
import { env } from '../env';

const appDataSource = new DataSource({
	type: 'mysql',
	host: env.APP_HOST,
	username: env.DB_USERNAME,
	password: env.DB_PASSWORD,
	port: Number(env.DB_PORT),
	database: env.DB_NAME,
	entities: [Users],
	synchronize: true,
	ssl: false,
});

const dbConnection = async () => {
	try {
		await appDataSource.initialize();
		console.log('DB CONNECTED');
	} catch (error) {
		console.log(`Error in bd connection: ${error}`);
	}
};

export { dbConnection };
