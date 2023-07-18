import '@styles/base/page.scss';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import SpecialMenu from './Menu/SpecialMenu';
import Chef from './Chef/Chef';
import Gallery from './Gallery/Gallery';
import FindUs from './Findus/FindUs';
import Footer from './Footer/Footer';
import { lazy, Suspense } from 'react';
const Intro = lazy(() => import('./Intro/Intro'));

const Home = () => {
	return (
		<>
			<Header />
			<AboutUs />
			<SpecialMenu />
			<Chef />
			<Suspense>
				<Intro />
			</Suspense>
			<Gallery />
			<FindUs />
			<Footer />
		</>
	);
};
export default Home;
