import '@styles/layout/SpecialMenu.scss';
import { SubHeading } from '@components';
import { data } from '@constants';
import { images } from '@constants';
import Link from 'next/link';
import Image from 'next/image';
import { SpecialMenuItem } from '@components';

const SpecialMenu = () => (
	<section className='app-special-menu' id='menu'>
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
					{data.wines.map((wine, i) => (
						<SpecialMenuItem
							key={`wine-#${i}`}
							title={wine.title}
							price={wine.price}
							tags={wine.tags}
						/>
					))}
				</div>
				<div className='app-special-menu__wrapper__middle'>
					<Image
						className='app-aboutus__middle__knife'
						src={images.menu}
						alt='Knife'
						as='image'
						placeholder='blur'
						loading='lazy'
					/>
				</div>
				<div className='app-special-menu__wrapper__right'>
					<h3>Cocktails</h3>
					{data.cocktails.map((cocktail, i) => (
						<SpecialMenuItem
							key={`cocktail-#${i}`}
							title={cocktail.title}
							price={cocktail.price}
							tags={cocktail.tags}
						/>
					))}
				</div>
			</div>

			<Link href='/' type='button' className='gold__button'>
				View more
			</Link>
		</div>
	</section>
);

export default SpecialMenu;
