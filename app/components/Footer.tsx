'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';

const socialLinks = [
	{ href: 'https://discord.com/', icon: <FaDiscord /> },
	{ href: 'https://twitter.com', icon: <FaTwitter /> },
	{ href: 'https://youtube.com', icon: <FaYoutube /> },
	{ href: 'https://medium.com', icon: <FaMedium /> },
];

const Footer = () => {
	const quotes = [
		'Life is short.',
		'Be yourself.',
		'Stay positive.',
		'Work hard.',
		'Keep learning.',
		'Be kind.',
		'Dream big.',
		'Smile often.',
		'Stay humble.',
		'Love more.',
	];

	const [quote, setQuote] = useState('');

	const generateRandomQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[randomIndex]);
	};

	useEffect(() => {
		generateRandomQuote();
	}, []);

	const fullYear = new Date().getFullYear();

	return (
		<footer className='w-screen bg-[#5542ff] py-4 text-black'>
			<div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
				<p className='text-center text-sm font-light md:text-left flex justify-stretch'>
					<span>Rakib {fullYear}. No copy right & </span>

					<span className='font-bold ml-1'> {quote}</span>
				</p>

				<div className='flex justify-center gap-4  md:justify-start'>
					{socialLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='text-black transition-colors duration-500 ease-in-out hover:text-white'
						>
							{link.icon}
						</Link>
					))}
				</div>

				<a
					href='#privacy-policy'
					className='text-center text-sm font-light hover:underline md:text-right '
				>
					Privacy Policy
				</a>
			</div>
		</footer>
	);
};

export default Footer;
