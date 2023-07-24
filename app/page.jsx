import '@styles/base/page.scss';
import Header from '@layout/Header/Header';
import AboutUsIntro from '@layout/AboutUsIntro/AboutUsIntro';
import SpecialMenu from '@layout/Menu/SpecialMenu';
import Chef from '@layout/Chef/Chef';
import Gallery from '@layout/Gallery/Gallery';
import Footer from '@layout/Footer/Footer';
import { lazy, Suspense } from 'react';
const Intro = lazy(() => import('@layout/Intro/Intro'));

const Home = () => {
	return (
		<>
			<Header />
			<AboutUsIntro />
			<SpecialMenu />
			<Chef />
			<Suspense>
				<Intro />
			</Suspense>
			<Gallery />
			<Footer />
		</>
	);
};
export default Home;
