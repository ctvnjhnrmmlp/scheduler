import { User } from '@prisma/client';
import NextAuth from 'next-auth';

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string;
		}
	}

	interface UserStore {
		user: User | null;
		setUser: (user: User) => void;
		clearUser: () => void;
	}
}

declare module 'next-auth' {
	interface Session {
		user: User & DefaultSession['user'];
		role: string;
	}
}
