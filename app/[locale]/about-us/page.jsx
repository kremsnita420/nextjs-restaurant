import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
import History from '@layout/History/History';
import AboutUsVideo from '@layout/AboutUsVideo/AboutUsVideo';
import Chef from '@layout/Chef/Chef';
import Gallery from '@layout/Gallery/Gallery';
import { getTranslator } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslator(locale, 'about');

	return {
		title: t('title'),
		description: t('description'),
	};
}

const AboutPage = () => {
	const t = useTranslations('header-secondary');
	return (
		<>
			<HeaderSecondary
				homeLink={t('home-link')}
				title={`${t('about-us-title')} Gerícht`}
				path={t('about-us-path')}
			/>
			<History />
			<Chef />
			<AboutUsVideo />
			<Gallery />
			<Footer />
		</>
	);
};
export default AboutPage;
