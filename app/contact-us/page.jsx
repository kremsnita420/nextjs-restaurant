import '@styles/base/page.scss';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
import Map from '@layout/Map/Map';
import FormSection from '@layout/FormSection/FormSection';

const ContactPage = () => {
	return (
		<>
			<HeaderSecondary path='Contact us' />
			{/* <Map /> */}
			<FormSection />
			<Footer />
		</>
	);
};

export default ContactPage;
