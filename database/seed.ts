import Prisma from './database';

async function main() {
	const users = [
		{
			number: 1,
			email: 'johnrommel.octaviano@gmail.com',
			password: 'hashed_placeholder_password',
			name: 'John Rommel Octaviano',
			position: 'Placeholder Position',
			bachelor: false,
			masteral: false,
			doctorate: false,
		},
		{
			number: 2,
			email: 'abayarirobfritz31@gmail.com',
			password: 'hashed_placeholder_password',
			name: 'Rob Fritz Abayari',
			position: 'Placeholder Position',
			bachelor: false,
			masteral: false,
			doctorate: false,
		},
		{
			number: 3,
			email: 'alinsunurincecille88@gmail.com',
			password: 'hashed_placeholder_password',
			name: 'Cecille Alinsunurin',
			position: 'Placeholder Position',
			bachelor: false,
			masteral: false,
			doctorate: false,
		},
		{
			number: 4,
			email: 'furtobheatricealliah24@gmail.com',
			password: 'hashed_placeholder_password',
			name: 'Beatrice Alliah Furto',
			position: 'Placeholder Position',
			bachelor: false,
			masteral: false,
			doctorate: false,
		},
		{
			number: 5,
			email: 'emnacin.hansneil09@gmail.com',
			password: 'hashed_placeholder_password',
			name: 'Hans Neil Emnacin',
			position: 'Placeholder Position',
			bachelor: false,
			masteral: false,
			doctorate: false,
		},
	];

	for (const user of users) {
		await Prisma.user.create({ data: user });
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await Prisma.$disconnect();
	});
