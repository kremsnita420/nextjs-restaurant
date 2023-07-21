import '@styles/base/page.scss';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
// import Map from '@layout/Map/Map';
import FormSection from '@layout/FormSection/FormSection';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const ContactPage = () => {
	const Map = useMemo(
		() => dynamic(() => import('@layout/Map/Map'), { ssr: false }),
		[]
	);
	return (
		<>
			<HeaderSecondary />
			<Map />
			<FormSection />
			<Footer />
		</>
	);
};

export default ContactPage;
