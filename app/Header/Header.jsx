import '@styles/layout/Header.scss';
import { images } from '@constants';
import { SubHeading } from '@components';
import Image from 'next/image';
import Link from 'next/link';

import { BiDownArrow } from 'react-icons/bi';

const Header = () => (
	<header className='app-header' id='home'>
		<div className='section__wrapper'>
			<div className='app-header__info'>
				<SubHeading
					title='Chase the new flavor'
					align='flex-start'
					fontStyle='small_sub_heading'
				/>
				<h1>The Key To Fine Dining</h1>
				<p>
					Sit tellus lobortis sed senectus vivamus molestie. Condimentum
					volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
					aliquam amet tellus
				</p>
				<Link href='/' type='button' className='gold__button'>
					Explore menu
				</Link>
			</div>
			<div className='app-header__image'>
				<Image
					src={images.welcome613}
					placeholder='blur'
					alt='Welcome picture'
					as='image'
					loading='lazy'
				/>
			</div>
		</div>
		<Link className='scroll-down-link' href='#about'>
			<BiDownArrow className='scroll-down-link__arrow scroll-down-link__arrow--1' />
			<span>Scroll</span>
			<BiDownArrow className='scroll-down-link__arrow scroll-down-link__arrow--2' />
		</Link>
	</header>
);

export default Header;
