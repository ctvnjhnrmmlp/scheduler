'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInSchema } from '@/libraries/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function Page() {
	const { data: session } = useSession();

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	function onSubmit(values: z.infer<typeof signInSchema>) {
		signIn('credentials', values);
	}

	if (session?.user) {
		redirect('/');
	}

	return (
		<main className='flex flex-col items-center justify-center w-full lg:py-8'>
			<section className='min-h-screen flex flex-col items-center justify-center space-y-6'>
				<div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder='shadcn' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder='shadcn' type='password' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit'>Submit</Button>
						</form>
					</Form>
				</div>
			</section>
			{/* <section>
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
			</section> */}
		</main>
	);
}
