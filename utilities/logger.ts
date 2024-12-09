import pino, { Logger as PinoLogger } from 'pino';

const Logger: PinoLogger =
	process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
		? pino({ level: 'warn' })
		: pino({
				transport: {
					target: 'pino-pretty',
					options: {
						colorize: true,
					},
					level: 'debug',
				},
		  });

export default Logger;
