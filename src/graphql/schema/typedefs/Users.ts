import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const userType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: {
			type: GraphQLID,
		},
		name: {
			type: GraphQLString,
		},
		username: {
			type: GraphQLString,
		},
		password: {
			type: GraphQLString,
		},
	},
});

export { userType };
