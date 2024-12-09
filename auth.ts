import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { ZodError } from 'zod';
import { signInSchema } from './libraries/zod';
import { findUserByEmail } from './services/scheduler/user';

export const { handlers, signIn, signOut, auth } = NextAuth({
	pages: {
		signIn: '/signin',
	},
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				try {
					console.log(credentials);
					// const { email } = await signInSchema.parseAsync(credentials);
					// const user = await findUserByEmail(email);

					// if (!user) {
					// 	throw new Error();
					// }

					// return user;
				} catch (error) {
					if (error instanceof ZodError) {
						return null;
					}
				}
			},
		}),
	],
});
