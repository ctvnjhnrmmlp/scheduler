import Logger from '@/utilities/logger';
import { User } from '@prisma/client';

const api = process.env.NEXT_PUBLIC_SCHEDULER_API_URL;
const log = Logger.child({
	module: '/api/user/get/email',
});

export const findUserByEmail = async (email: string): Promise<User | null> => {
	try {
		const response = await fetch(`${api}/user/find/email`, {
			method: 'POST',
			body: JSON.stringify({
				email,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		console.log(response);

		if (response.ok) {
			const data = await response.json();
			return data;
		}

		throw new Error();
	} catch (error) {
		log.error(error);
		return null;
	}
};
