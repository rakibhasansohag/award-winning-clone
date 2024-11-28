import Hero from './components/Hero';

export default function Home() {
	return (
		<main className='relative min-h-screen w-screen overflow-x-hidden'>
			<Hero />

			<section className='z-10 min-h-screen bg-violet-300' />
		</main>
	);
}
