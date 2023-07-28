import Navbar from '@layout/Navbar/Navbar';
import { images } from '@constants';
import '@styles/base/globals.scss';
import { Poppins, Lobster } from 'next/font/google';
import { useLocale, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslator } from 'next-intl/server';

export const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-secondary',
});

export const lobster = Lobster({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-primary',
});

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslator(locale, 'meta-data');

	return {
		title: {
			default: t('title'),
			template: `%s | ${t('title')}`,
		},
		description: t('description'),
		icons: {
			icon: '/assets/spoon.svg',
		},
		openGraph: {
			title: t('title'),
			description: t('description'),
			url: 'https://nextjs.org',
			siteName: 'Gericht',
			images: [
				{
					url: '/assets/laurels.png',
					width: 800,
					height: 600,
				},
			],
			locale: locale,
			type: 'website',
		},
	};
}

// export const metadata = {
// 	title: 'Gericht | Restaurant',
// 	description: 'Amazing classy restaurant website made with Next.js',
// 	openGraph: {
// 		title: 'Restaurant website',
// 		description: 'Amazing classy restaurant website made with Next.js',
// 		url: 'https://nextjs.org',
// 		siteName: 'Gericht',
// 		images: [
// 			{
// 				url: '/assets/laurels.png',
// 				width: 800,
// 				height: 600,
// 			},
// 		],
// 		locale: 'en_US',
// 		type: 'website',
// 	},
// };

export default function RootLayout({ children, params }) {
	const locale = useLocale();
	const t = useTranslations('navbar');

	// Show a 404 error if the user requests an unknown locale
	if (params.locale !== locale) {
		notFound();
	}
	return (
		<html lang={locale}>
			<body
				className={`${lobster.variable} ${poppins.variable}`}
				style={{
					backgroundImage: `url(${images.wave.src})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'repeat',
					backgroundAttachment: 'fixed',
				}}
				suppressHydrationWarning={true}>
				<main>
					<Navbar
						navSiteLogoAlt={t('nav-site-logo-alt')}
						home={t('home')}
						about={t('about')}
						menu={t('menu')}
						contact={t('contact')}
						langFlag={t('lang-switch-flag')}
					/>
					{children}
				</main>
			</body>
		</html>
	);
}
