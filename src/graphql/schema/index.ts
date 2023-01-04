import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { greeting } from './queries/greeting';
import { createUsers, deleteUser, updateUser } from './mutations/users';
import { getUsers, getUser } from './queries/users';

const rootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		greeting: greeting,
		getUsers: getUsers,
		getUser: getUser,
	},
});

const rootMutation = new GraphQLObjectType({
	name: 'RootMutation',
	fields: {
		createUser: createUsers,
		deleteUser: deleteUser,
		updateUser: updateUser,
	},
});

const schema = new GraphQLSchema({
	query: rootQuery,
	mutation: rootMutation,
});

export { schema };
