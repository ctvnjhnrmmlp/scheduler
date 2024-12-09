import FONTS from '@/configurations/fonts';
import METADATA from '@/configurations/metadata';
import type { Metadata } from 'next';
import Containers from './containers';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${FONTS.alpha.className} antialiased no-scrollbar`}>
				<Providers>
					<Containers>{children}</Containers>
				</Providers>
			</body>
		</html>
	);
}
