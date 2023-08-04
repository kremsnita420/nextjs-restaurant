import '@styles/base/page.scss';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
// import Map from '@layout/Map/Map';
import FormSection from '@layout/FormSection/FormSection';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { getTranslator } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslator(locale, 'contact');

	return {
		title: t('title'),
	};
}

const ContactPage = () => {
	const t = useTranslations('header-secondary');
	const tt = useTranslations('map');
	const Map = useMemo(
		() => dynamic(() => import('@layout/Map/Map'), { ssr: false }),
		[]
	);
	return (
		<>
			<HeaderSecondary
				homeLink={t('home-link')}
				title={`${t('contact-us-title')} `}
				path={t('contact-us-path')}
			/>
			<Map
				mapTitle={tt('map-title')}
				mapSubheading={tt('map-subheading')}
				mapDirections={tt('map-directions')}
				openMapLink={tt('open-map-link')}
			/>
			<FormSection />

			<Footer />
		</>
	);
};

export default ContactPage;
