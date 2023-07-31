import '@styles/layout/SpecialMenu.scss';
import { SubHeading } from '@components';
import { data } from '@constants';
import { images } from '@constants';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItem } from '@components';
import { useTranslations } from 'next-intl';

const SpecialMenu = () => {
	const t = useTranslations('special-menu');
	return (
		<section className='app-special-menu' id='menu'>
			<div className='section__wrapper'>
				<SubHeading
					title={t('special-menu-subheading')}
					align='center'
					fontStyle='small_sub_heading'
				/>
				<div className='large_sub_heading'>
					<h2>{t('special-menu-title')}</h2>
				</div>
				<div className='app-special-menu__wrapper'>
					<div className='app-special-menu__wrapper__left'>
						<h3>{t('special-menu-subtitle-left')}</h3>
						{data.wines.map((wine, i) => (
							<MenuItem
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
							alt={t('special-menu-image-alt')}
							as='image'
							placeholder='blur'
							loading='lazy'
						/>
					</div>
					<div className='app-special-menu__wrapper__right'>
						<h3>{t('special-menu-subtitle-right')}</h3>
						{data.cocktails.map((cocktail, i) => (
							<MenuItem
								key={`cocktail-#${i}`}
								title={cocktail.title}
								price={cocktail.price}
								tags={cocktail.tags}
							/>
						))}
					</div>
				</div>

				<Link href='/menu' type='button' className='gold__button'>
					{t('view-more')}
				</Link>
			</div>
		</section>
	);
};

export default SpecialMenu;
