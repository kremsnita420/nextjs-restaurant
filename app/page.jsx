import '@styles/base/page.scss';
import Header from '@layout/Header/Header';
import AboutUs from '@layout/AboutUs/AboutUs';
import SpecialMenu from '@layout/Menu/SpecialMenu';
import Chef from '@layout/Chef/Chef';
import Gallery from '@layout/Gallery/Gallery';
import FindUs from '@layout/Findus/FindUs';
import Footer from '@layout/Footer/Footer';
import { lazy, Suspense } from 'react';
const Intro = lazy(() => import('@layout/Intro/Intro'));

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
