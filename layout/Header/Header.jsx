import { HeaderSlider } from '@components';
import '@styles/layout/Header.scss';
import Link from 'next/link';
import { BiDownArrow } from 'react-icons/bi';
import { useLocale, useTranslations } from 'next-intl';
import { images } from '@constants';
const dataEn = [
	{
		subTitle: 'Chase the new flavour',
		heading: 'Authentic Italian Culinary Experience',
		pText:
			'Our restaurant takes great pride in offering an authentic Italian culinary experience that transports you straight to the heart of Italy',
		link: 'Explore menu',
		image: images.trattoria2,
		imageAlt: 'Welcome picture',
	},
	{
		subTitle: 'Chase the new flavour',
		heading: 'Warm and Inviting Ambiance',
		pText:
			"Step into our Italian oasis where you'll be embraced by a warm and inviting ambiance that echoes the spirit of Italy's famed hospitality. The restaurant's decor is inspired by the rustic charm of Italian countryside settings, featuring exposed brick walls, cozy wooden tables, and soft, ambient lighting.",
		link: 'Read more',
		image: images.trattoria,
		imageAlt: 'Welcome picture',
	},
	{
		subTitle: 'Chase the new flavor',
		heading: 'Extensive Wine Selection',
		pText:
			'No Italian dining experience is complete without the perfect wine pairing to complement your meal. Our restaurant boasts an extensive selection of exquisite Italian wines sourced from various regions across Italy.',
		link: 'Explore menu',
		image: images.welcome613,
		imageAlt: 'Welcome picture',
	},
];
const dataDe = [
	{
		subTitle: 'Verfolgen Sie den neuen Geschmack',
		heading: 'Authentisches italienisches kulinarisches Erlebnis',
		pText:
			'Unser Restaurant ist stolz darauf, ein authentisches italienisches kulinarisches Erlebnis zu bieten, das Sie direkt ins Herz Italiens entführt',
		link: 'Entdecken Sie das Menü',
		image: images.trattoria2,
		imageAlt: 'Willkommensbild',
	},
	{
		subTitle: 'Verfolgen Sie den neuen Geschmack',
		heading: 'Warme und einladende Atmosphäre',
		pText:
			'Treten Sie ein in unsere italienische Oase, wo Sie von einem warmen und einladenden Ambiente umarmt werden, das den Geist der berühmten italienischen Gastfreundschaft widerspiegelt. Die Einrichtung des Restaurants ist vom rustikalen Charme der italienischen Landschaft inspiriert und verfügt über freiliegende Ziegelwände, gemütliche Holztische und sanfte, stimmungsvolle Beleuchtung.',
		link: 'Weiterlesen',
		image: images.trattoria,
		imageAlt: 'Willkommensbild',
	},
	{
		subTitle: 'Verfolgen Sie den neuen Geschmack',
		heading: 'Umfangreiche Weinauswahl',
		pText:
			'Kein italienisches kulinarisches Erlebnis ist vollständig ohne die perfekte Weinbegleitung als Ergänzung zu Ihrer Mahlzeit. Unser Restaurant verfügt über eine umfangreiche Auswahl an erlesenen italienischen Weinen aus verschiedenen Regionen Italiens.',
		link: 'Weiterlesen',
		image: images.welcome613,
		imageAlt: 'Willkommensbild',
	},
];
const Header = () => {
	const locale = useLocale();
	const t = useTranslations('home');
	return (
		<header className='app-header' id='home'>
			<div className='section__wrapper'>
				<HeaderSlider data={locale === 'en' ? dataEn : dataDe} />
			</div>
			<Link className='scroll-down-link' href='#about'>
				<BiDownArrow className='scroll-down-link__arrow scroll-down-link__arrow--1' />
				<span>{t('scroll-button')}</span>
				<BiDownArrow className='scroll-down-link__arrow scroll-down-link__arrow--2' />
			</Link>
		</header>
	);
};

export default Header;
