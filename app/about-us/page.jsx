import '@styles/base/page.scss';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
import History from '@layout/History/History';

const AboutPage = () => {
	return (
		<>
			<HeaderSecondary title='Welcome to Gerícht' />
			<History />
			<Footer />
		</>
	);
};
export default AboutPage;
