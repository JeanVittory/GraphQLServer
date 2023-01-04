import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';

const app = express();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

export { app };
