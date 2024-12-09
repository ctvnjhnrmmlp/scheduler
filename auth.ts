import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { findUserByEmail } from './services/scheduler/user';

export const { handlers, signIn, signOut, auth } = NextAuth({
	pages: {
		signIn: '/signin',
	},
	providers: [
		Credentials({
			credentials: {
				email: {
					label: 'email',
					type: 'string',
				},
				password: {
					label: 'password',
					type: 'string',
				},
			},
			authorize: async (credentials) => {
				let user = null;

				user = await findUserByEmail(credentials.email.label);

				return user;
			},
		}),
	],
});
