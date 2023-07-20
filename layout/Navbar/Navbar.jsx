'use client';
import '@styles/layout/Navbar.scss';
import images from '@constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// Show and hide navbar on scroll
	const handleScroll = () => {
		const navEl = document.querySelector('.app__navbar');
		const navElHeight = navEl.offsetHeight;
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > navElHeight) {
			navEl.classList.add('app__navbar__transparent-bg');
			navEl.classList.remove('app__navbar__solid-bg');
		} else {
			navEl.classList.remove('app__navbar__transparent-bg');
			navEl.classList.add('app__navbar__solid-bg');
		}

		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Prevent scrolling when mobile nav is open
	useEffect(() => {
		if (document) {
			document.body.style.overflow = toggleMenu ? 'hidden' : 'auto';
		}
	}, [toggleMenu]);

	return (
		<nav
			className={`${
				visible ? 'app__navbar__visible' : 'app__navbar__hidden'
			} app__navbar`}>
			<Link href='/' className='app__navbar-logo'>
				<Image
					src={images.gericht}
					placeholder='blur'
					alt='Site logo'
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
					sizes='(max-width: 550px) 8rem, (max-width: 1200px) 10rem, 12rem'
				/>
			</Link>
			<ul className='app__navbar-links'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about-us'>About</Link>
				</li>
				<li>
					<Link href='#menu'>Menu</Link>
				</li>
				<li>
					<Link href='#awards'>Awards</Link>
				</li>
				<li>
					<Link href='/contact-us'>Contact</Link>
				</li>
			</ul>
			<ul className='app__navbar-login'>
				<li>
					<Link href='#login'>Language</Link>
				</li>
				<div />
				<li>
					<Link href='#book'>Book Table</Link>
				</li>
			</ul>
			<div className='app__navbar-smallscreen'>
				<div
					className={`app__navbar-smallscreen__hamburger ${
						toggleMenu ? 'active' : ''
					}`}
					onClick={() => setToggleMenu(!toggleMenu)}>
					<span className='line line-1'></span>
					<span className='line line-2'></span>
					<span className='line line-3'></span>
				</div>

				{toggleMenu && (
					<div className='app__navbar-smallscreen__overlay flex__center slide-bottom'>
						<ul className='app__navbar-smallscreen-links'>
							<li>
								<Link onClick={() => setToggleMenu(!toggleMenu)} href='/'>
									Home
								</Link>
							</li>
							<li>
								<Link
									onClick={() => setToggleMenu(!toggleMenu)}
									href='/about-us'>
									About
								</Link>
							</li>
							<li>
								<Link onClick={() => setToggleMenu(!toggleMenu)} href='#menu'>
									Menu
								</Link>
							</li>
							<li>
								<Link onClick={() => setToggleMenu(!toggleMenu)} href='#awards'>
									Awards
								</Link>
							</li>
							<li>
								<Link
									onClick={() => setToggleMenu(!toggleMenu)}
									href='/contact-us'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
