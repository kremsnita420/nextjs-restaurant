import '@styles/base/page.scss';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
import History from '@layout/History/History';
import AboutUsVideo from '@layout/AboutUsVideo/AboutUsVideo';
import Chef from '@layout/Chef/Chef';
import Gallery from '@layout/Gallery/Gallery';

const AboutPage = () => {
	return (
		<>
			<HeaderSecondary title='Welcome to Gerícht' />
			<History />
			<Chef />
			<AboutUsVideo />
			<Gallery />
			<Footer />
		</>
	);
};
export default AboutPage;
