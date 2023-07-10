'use client';
import '@styles/components/Navbar.scss';
import images from '@constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<Image src={images.gericht} alt='Site logo' width={120} height={30} />
			</div>
			<ul className='app__navbar-links'>
				<li className='p__opensans'>
					<Link href='#home'>Home</Link>
				</li>
				<li className='p__opensans'>
					<Link href='#about'>About</Link>
				</li>
				<li className='p__opensans'>
					<Link href='#menu'>Menu</Link>
				</li>
				<li className='p__opensans'>
					<Link href='#awards'>Awards</Link>
				</li>
				<li className='p__opensans'>
					<Link href='#contact'>Contact</Link>
				</li>
			</ul>
			<div className='app__navbar-login'>
				<Link className='p__opensans' href='#login'>
					Log in / Register
				</Link>
				<div />
				<Link className='p__opensans' href='#book'>
					Book Table
				</Link>
			</div>
			<div className='app__navbar-smallscreen'>
				<GiHamburgerMenu
					color='#fff'
					fontSize={27}
					onClick={() => setToggleMenu(!toggleMenu)}
				/>

				{toggleMenu && (
					<div className='app__navbar-smallscreen__overlay flex__center slide-bottom'>
						<MdRestaurantMenu
							fontSize={27}
							onClick={() => setToggleMenu(!toggleMenu)}
							className='overlay__close'
						/>
						<ul className='app__navbar-smallscreen-links'>
							<li className='p__opensans'>
								<Link href='#home'>Home</Link>
							</li>
							<li className='p__opensans'>
								<Link href='#about'>About</Link>
							</li>
							<li className='p__opensans'>
								<Link href='#menu'>Menu</Link>
							</li>
							<li className='p__opensans'>
								<Link href='#awards'>Awards</Link>
							</li>
							<li className='p__opensans'>
								<Link href='#contact'>Contact</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
