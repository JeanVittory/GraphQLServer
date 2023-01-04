import { userType } from '../typedefs/Users';
import { Users } from '../../../entities/users';
import { GraphQLList, GraphQLString } from 'graphql';

const getUsers = {
	type: new GraphQLList(userType),
	resolve: async () => await Users.find(),
};

const getUser = {
	type: userType,
	args: {
		name: {
			type: GraphQLString,
		},
	},
	resolve: async (_: any, args: any) => {
		const { name } = args;
		const result = await Users.findOne({
			where: {
				name: name,
			},
		});
		return result;
	},
};

export { getUsers, getUser };
