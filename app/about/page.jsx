'use client';
import '@styles/base/page.scss';
import { usePathname } from 'next/navigation';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';

const About = () => {
	const pathname = usePathname();
	const path = pathname.replace('/', '');
	const title = 'About us';
	return (
		<>
			<HeaderSecondary title={title} subtitle1={path} />
			<Footer />
		</>
	);
};
export default About;
