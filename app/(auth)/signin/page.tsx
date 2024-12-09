'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

export default function Page() {
	const { data: session } = useSession();

	if (session?.user) {
		redirect('/');
	}

	return (
		<main className='flex flex-col items-center justify-center w-full lg:py-8'>
			<section>
				<div className='min-h-screen flex flex-col items-center justify-center space-y-6'>
					<Card className='w-96 h-68'>
						<CardHeader>
							<CardTitle className='text-center'>Sign In</CardTitle>
						</CardHeader>
						<CardContent>
							<Button className='w-full' onClick={() => signIn('google')}>
								<FcGoogle /> Continue with Google
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
