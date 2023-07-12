import '@styles/layout/Header.scss';
import { images } from '@constants';
import { SubHeading } from '@components';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
	<div className='app-header' id='home'>
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
					alt='Welcome picture'
					as='image'
					// width={500} automatically provided
					// height={500} automatically provided
					// blurDataURL="data:..." automatically provided
					// placeholder="blur" // Optional blur-up while loading
				/>
			</div>
		</div>
	</div>
);

export default Header;
