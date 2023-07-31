import '@styles/base/page.scss';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
import { getTranslator } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { MenuSection } from '@components';
import { data } from '@constants';
export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslator(locale, 'menu');

	return {
		title: t('title'),
	};
}

const AboutPage = () => {
	const t = useTranslations('header-secondary');
	return (
		<>
			<HeaderSecondary
				homeLink={t('home-link')}
				title={`${t('menu-title')}`}
				path={t('menu-path')}
			/>
			<section className='app__menu-page'>
				<div className='section__wrapper'>
					<MenuSection menuData={data.cocktails} title='Cocktails' />
					<MenuSection menuData={data.wines} title='Wines' />
					{/* <MenuSection title='Drinks' /> */}
				</div>
			</section>
			<Footer />
		</>
	);
};
export default AboutPage;
