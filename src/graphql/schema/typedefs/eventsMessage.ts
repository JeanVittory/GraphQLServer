import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';

const eventMessage = new GraphQLObjectType({
	name: 'eventMessage',
	fields: {
		success: {
			type: GraphQLBoolean,
		},
		message: {
			type: GraphQLString,
		},
	},
});

export { eventMessage };
