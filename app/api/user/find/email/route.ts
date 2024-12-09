import { RESPONSE_CODES, RESPONSE_MESSAGES } from '@/constants/response';
import Prisma from '@/database/database';
import Logger from '@/utilities/logger';
import { NextApiRequest } from 'next';

const log = Logger.child({
	module: '/api/user/get/email',
});

export async function POST(req: NextApiRequest) {
	try {
		if (!req.body || !req.body.email) {
			return new Response(RESPONSE_MESSAGES.BAD_REQUEST, {
				status: RESPONSE_CODES.BAD_REQUEST,
			});
		}

		const user = await Prisma.user.findUnique({
			where: {
				email: req.body.email,
			},
		});

		if (!user) {
			return new Response(RESPONSE_MESSAGES.NOT_FOUND, {
				status: RESPONSE_CODES.NOT_FOUND,
			});
		}

		return Response.json({ message: 'Success', user });
	} catch (error) {
		log.error(error);
		return new Response(RESPONSE_MESSAGES.INTERNAL, {
			status: RESPONSE_CODES.INTERNAL,
		});
	}
}
