'use client';
import '@styles/layout/Navbar.scss';
import images from '@constants/images';
import Image from 'next/image';
import Link from 'next-intl/link';
import { useEffect, useState } from 'react';

const Navbar = ({ home, contact, about, menu, navSiteLogoAlt, langFlag }) => {
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
					alt={navSiteLogoAlt}
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
					sizes='(max-width: 550px) 8rem, (max-width: 1200px) 10rem, 12rem'
				/>
			</Link>
			<ul className='app__navbar-links'>
				<li>
					<Link href='/'>{home}</Link>
				</li>
				<li>
					<Link href={`/about-us`}>{about}</Link>
				</li>
				<li>
					<Link href='/menu'>{menu}</Link>
				</li>

				<li>
					<Link href='/contact-us'>{contact}</Link>
				</li>
			</ul>
			<div className='app__navbar-language'>
				<ul className='language-switcher'>
					<li>
						<Link href='/' locale='de'>
							<Image width={33} height={33} src={images.DE} alt={langFlag} />
						</Link>
					</li>
					<li>
						<Link href='/' locale='en'>
							<Image width={33} height={33} src={images.UK} alt={langFlag} />
						</Link>
					</li>
				</ul>
			</div>
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
					<div className='app__navbar-smallscreen__overlay slide-bottom'>
						<ul className='app__navbar-smallscreen-links'>
							<li>
								<Link onClick={() => setToggleMenu(!toggleMenu)} href='/'>
									{home}
								</Link>
							</li>
							<li>
								<Link
									onClick={() => setToggleMenu(!toggleMenu)}
									href='/about-us'>
									{about}
								</Link>
							</li>
							<li>
								<Link onClick={() => setToggleMenu(!toggleMenu)} href='/menu'>
									{menu}
								</Link>
							</li>

							<li>
								<Link
									onClick={() => setToggleMenu(!toggleMenu)}
									href='/contact-us'>
									{contact}
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
