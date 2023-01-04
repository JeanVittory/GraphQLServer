import { app } from './app';
import { dbConnection } from './db';
import { env } from './env';

const main = async () => {
	try {
		await dbConnection();
		app.listen(env.APP_PORT, () => console.log(`listen on port ${env.APP_PORT}`));
		app.on('error', (error) => console.log(error));
	} catch (error) {
		console.log(error);
	}
};

main();
