'use client';
import '@styles/base/page.scss';
import { usePathname } from 'next/navigation';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
import About from '@app/about-us/page';
import AboutUs from '@layout/AboutUs/AboutUs';

const Contact = () => {
	const pathname = usePathname();
	const path = pathname.replace('/', '').replace('-', ' ');

	return (
		<>
			<HeaderSecondary title={path} subtitle={path} />
			<Footer />
		</>
	);
};
export default Contact;
