import { Navbar } from '@components';
import '@styles/base/globals.scss';
import { Open_Sans } from 'next/font/google';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
