import { GraphQLString } from 'graphql';

const greeting = {
	type: GraphQLString,
	resolve: () => 'Hello Wrld',
};

export { greeting };
