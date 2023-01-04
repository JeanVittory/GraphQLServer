import { GraphQLBoolean, GraphQLID, GraphQLString } from 'graphql';
import { Users } from '../../../entities/users';
import { userType } from '../typedefs/Users';
import { eventMessage } from '../typedefs/eventsMessage';
import bcrypt from 'bcryptjs';

const createUsers = {
	type: userType,
	args: {
		name: { type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	},
	resolve: async (_: any, args: any) => {
		const { name, username, password } = args;
		const pwd = await bcrypt.hash(password, 10);
		const result = await Users.insert({
			name: name,
			username: username,
			password: pwd,
		});
		return { ...args, id: result.identifiers[0].id, password: pwd };
	},
};

const deleteUser = {
	type: GraphQLString,
	args: {
		name: {
			type: GraphQLString,
		},
	},
	resolve: async (_: any, args: any) => {
		const { name } = args;
		await Users.delete({
			name: name,
		});
		return `User deleted`;
	},
};

const updateUser = {
	type: eventMessage,
	args: {
		id: {
			type: GraphQLID,
		},
		name: {
			type: GraphQLString,
		},
		username: {
			type: GraphQLString,
		},
		oldPassword: {
			type: GraphQLString,
		},
		newPassword: {
			type: GraphQLString,
		},
	},
	resolve: async (_: any, args: any) => {
		const { id, name, username, oldPassword, newPassword } = args;
		const isUser = await Users.findOne({ where: { id: id } });
		if (!isUser) return { success: false, message: 'Not user found' };
		const isAuth = await bcrypt.compare(oldPassword, isUser.password);
		if (!isAuth) return { success: false, message: 'Wrong password' };
		const newPwd = await bcrypt.hash(newPassword, 10);
		const response = await Users.update({ id }, { name, username, password: newPwd });
		if (!response.affected) return { success: false, message: 'Internal server error' };
		return {
			success: true,
			message: 'User updated',
		};
	},
};

export { createUsers, deleteUser, updateUser };
