import '@styles/base/page.scss';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import SpecialMenu from './Menu/SpecialMenu';
import Chef from './Chef/Chef';
import Intro from './Intro/Intro';
import Gallery from './Gallery/Gallery';
import FindUs from './Findus/FindUs';
import Footer from './Footer/Footer';

const Home = () => {
	return (
		<div>
			<Header />
			<AboutUs />
			<SpecialMenu />
			<Chef />
			<Intro />
			<Gallery />
			<FindUs />
			<Footer />
		</div>
	);
};
export default Home;
