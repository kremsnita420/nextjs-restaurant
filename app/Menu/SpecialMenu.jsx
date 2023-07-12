import '@styles/layout/SpecialMenu.scss';
import { SubHeading } from '@components';
import { data } from '@constants';
import { images } from '@constants';
import Link from 'next/link';
import Image from 'next/image';

const SpecialMenu = () => (
	<div className='app-special-menu' id='menu'>
		<div className='section__wrapper'>
			<SubHeading
				title='Menu that fits your palette'
				align='center'
				fontStyle='small_sub_heading'
			/>
			<div className='large_sub_heading'>
				<h2>Today’s Special</h2>
			</div>
			<div className='app-special-menu__wrapper'>
				<div className='app-special-menu__wrapper__left'>
					<h3>Wine & beer</h3>
				</div>
				<div className='app-special-menu__wrapper__middle'>
					<Image
						className='app-aboutus__middle__knife'
						src={images.menu}
						alt='Knife'
						as='image'
					/>
				</div>
				<div className='app-special-menu__wrapper__right'>
					<h3>Coctails</h3>
				</div>
			</div>

			<Link href='/' type='button' className='gold__button'>
				View more
			</Link>
		</div>
	</div>
);

export default SpecialMenu;
