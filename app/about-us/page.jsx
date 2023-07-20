'use client';
import '@styles/base/page.scss';
import { usePathname } from 'next/navigation';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';

const About = () => {
	const pathname = usePathname();
	const path = pathname.replace('/', '').replace('-', ' ');

	return (
		<>
			<HeaderSecondary title={path} subtitle={path} />
			<Footer />
		</>
	);
};
export default About;
