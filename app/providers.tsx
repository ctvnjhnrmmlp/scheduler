'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<SessionProvider>
			<QueryClientProvider client={queryClient}>
				<NextThemesProvider
					disableTransitionOnChange
					attribute='class'
					defaultTheme='light'
				>
					<SidebarProvider>{children}</SidebarProvider>
				</NextThemesProvider>
			</QueryClientProvider>
		</SessionProvider>
	);
}
