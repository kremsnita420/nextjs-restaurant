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

	// Prevent scrolling when mobile nav is open
	useEffect(() => {
		if (document) {
			document.body.style.overflow = toggleMenu ? 'hidden' : 'auto';
		}
	}, [toggleMenu]);

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<Image src={images.gericht} alt='Site logo' width={120} height={30} />
			</div>
			<ul className='app__navbar-links'>
				<li>
					<Link href='#home'>Home</Link>
				</li>
				<li>
					<Link href='#about'>About</Link>
				</li>
				<li>
					<Link href='#menu'>Menu</Link>
				</li>
				<li>
					<Link href='#awards'>Awards</Link>
				</li>
				<li>
					<Link href='#contact'>Contact</Link>
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
								<Link onClick={() => setToggleMenu(!toggleMenu)} href='#home'>
									Home
								</Link>
							</li>
							<li>
								<Link onClick={() => setToggleMenu(!toggleMenu)} href='#about'>
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
									href='#contact'>
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
